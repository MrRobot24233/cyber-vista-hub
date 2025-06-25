
import { useState, useRef, useEffect } from 'react';
import { pipeline } from '@huggingface/transformers';
import { Message } from '@/types/chatbot';
import { getCybersecurityResponse } from '@/utils/cybersecurityResponses';

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'مرحباً! أنا مساعد ذكي متخصص في الأمن السيبراني. كيف يمكنني مساعدتك اليوم؟',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generator, setGenerator] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize the AI model
  useEffect(() => {
    const initializeAI = async () => {
      try {
        console.log('Loading AI model...');
        const pipe = await pipeline('text-generation', 'Xenova/distilgpt2', {
          device: 'webgpu'
        });
        setGenerator(pipe);
        console.log('AI model loaded successfully');
      } catch (error) {
        console.log('WebGPU not available, falling back to CPU');
        try {
          const pipe = await pipeline('text-generation', 'Xenova/distilgpt2');
          setGenerator(pipe);
          console.log('AI model loaded on CPU');
        } catch (cpuError) {
          console.error('Failed to load AI model:', cpuError);
        }
      }
    };

    initializeAI();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // First try cybersecurity specific response
    const cybersecResponse = getCybersecurityResponse(userMessage);
    if (cybersecResponse !== getCybersecurityResponse('default')) {
      return cybersecResponse;
    }

    // If no specific match and AI model is available, use it
    if (generator) {
      try {
        const prompt = `User: ${userMessage}\nCybersecurity Expert:`;
        const result = await generator(prompt, {
          max_new_tokens: 50,
          temperature: 0.7,
          do_sample: true,
        });
        
        if (Array.isArray(result) && result[0]?.generated_text) {
          const response = result[0].generated_text.split('Cybersecurity Expert:')[1]?.trim();
          if (response && response.length > 10) {
            return response;
          }
        }
      } catch (error) {
        console.error('AI generation error:', error);
      }
    }

    // Fallback to cybersecurity default
    return getCybersecurityResponse('default');
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await generateAIResponse(input);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    messagesEndRef,
    handleSend
  };
};
