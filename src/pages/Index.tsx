
import React from 'react';
import EmailSubscription from '@/components/EmailSubscription';
import DecorativeElement from '@/components/DecorativeElement';
import SocialIcons from '@/components/SocialIcons';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen mithila-pattern flex flex-col relative overflow-hidden">
      {/* Mithila painting inspired decorative elements */}
      <DecorativeElement type="leaf" className="absolute top-10 left-5 opacity-20 animate-float-slow" />
      <DecorativeElement type="flower" className="absolute bottom-20 right-5 opacity-20 animate-float-slow" />
      <DecorativeElement type="fish" className="absolute bottom-40 left-10 opacity-15 animate-float-slow" />
      
      <div className="container mx-auto px-4 py-8 flex flex-col justify-between flex-grow">
        <header className="w-full flex justify-center py-4">
          <DecorativeElement type="border" className="w-full max-w-md" />
        </header>
        
        <main className="flex flex-col items-center justify-center flex-grow py-8">
          <div className="max-w-5xl mx-auto text-center px-4">
            {/* Logo and Mascot Container with HTML/CSS positioning */}
            <div className="logo-mascot-container">
              <div className="logo-container">
                <img 
                  src="/lovable-uploads/674e9549-ffb1-40f1-b894-7f08b834c97c.png" 
                  alt="Mithila Sattvik Makhana" 
                  className="logo-image"
                />
              </div>
              
              <div className="mascot-container">
                <img 
                  src="/lovable-uploads/1d324de3-1e03-409e-989d-75a0423c23f0.png" 
                  alt="Makhana Man Mascot" 
                  className="mascot-image"
                />
              </div>
            </div>
            
            <div className="content-container">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading text-mithila-green tracking-tight">
                Coming Soon
              </h1>
              
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
                We're preparing to bring you the finest quality Makhana, sourced directly from the heart of Mithila. 
                Pure, natural, and traditionally processed for authentic taste and maximum nutrition.
              </p>
              
              <div className="mb-12">
                <h2 className="text-xl md:text-2xl font-medium mb-6 font-heading">Get Notified When We Launch</h2>
                <EmailSubscription />
              </div>
            </div>
          </div>
        </main>
        
        <footer className="mt-auto w-full">
          <div className="py-8 border-t border-mithila-green border-opacity-20">
            <div className="mb-4 text-center">
              <p className="text-lg font-medium font-heading mb-2">Connect With Us</p>
              <SocialIcons />
            </div>
            
            <p className="text-center text-sm text-mithila-green text-opacity-70 mt-6">
              © {new Date().getFullYear()} Mithila Sattvik Makhana. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
