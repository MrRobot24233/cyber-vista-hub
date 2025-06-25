
import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '@/types/chatbot';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          message.sender === 'user'
            ? 'bg-cyber-blue text-black'
            : 'bg-gray-700 text-white'
        }`}
      >
        <div className="flex items-start gap-2">
          {message.sender === 'bot' && <Bot className="w-4 h-4 mt-0.5 text-cyber-blue flex-shrink-0" />}
          {message.sender === 'user' && <User className="w-4 h-4 mt-0.5 text-black flex-shrink-0" />}
          <span className="text-sm leading-relaxed">{message.text}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
