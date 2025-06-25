
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bot, Minimize2, Maximize2, X } from 'lucide-react';
import { useChatbot } from '@/hooks/useChatbot';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';

const Chatbot = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, setInput, isLoading, messagesEndRef, handleSend } = useChatbot();

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="neon-button w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Bot className="w-8 h-8" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`cyber-card transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
      } flex flex-col`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyber-blue/20">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-cyber-blue" />
            <span className="font-semibold text-white">SECPULSE Assistant</span>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0 hover:bg-cyber-blue/20"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-red-500/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-cyber-blue" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-cyber-blue rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-cyber-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-cyber-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <ChatInput
              input={input}
              setInput={setInput}
              onSend={handleSend}
              isLoading={isLoading}
            />
          </>
        )}
      </Card>
    </div>
  );
};

export default Chatbot;
