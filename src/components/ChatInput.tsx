
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

const ChatInput = ({ input, setInput, onSend, isLoading }: ChatInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="p-4 border-t border-cyber-blue/20">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="اكتب رسالتك هنا..."
          className="flex-1 bg-gray-800 border border-cyber-blue/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue"
          disabled={isLoading}
        />
        <Button
          onClick={onSend}
          disabled={isLoading || !input.trim()}
          className="neon-button px-3"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
