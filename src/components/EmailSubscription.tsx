
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real scenario, you would send the email to your backend/API
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll notify you when we launch.",
        duration: 5000,
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row w-full gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white bg-opacity-80 border-mithila-green border-opacity-30 focus:border-mithila-orange text-mithila-green placeholder:text-mithila-green placeholder:opacity-60"
          required
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-mithila-orange hover:bg-mithila-dark-orange text-white"
        >
          {isLoading ? 'Processing...' : 'Notify Me'}
        </Button>
      </div>
      <p className="text-xs mt-2 text-center text-mithila-green text-opacity-80">
        We respect your privacy and won't share your email with anyone.
      </p>
    </form>
  );
};

export default EmailSubscription;
