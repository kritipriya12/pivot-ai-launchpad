
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Verbly P.I.V.O.T.</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#program" className="text-foreground/80 hover:text-purple-400 transition-colors">Program</a>
            <a href="#pricing" className="text-foreground/80 hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#mentorship" className="text-foreground/80 hover:text-purple-400 transition-colors">Mentorship</a>
            <a href="#faq" className="text-foreground/80 hover:text-purple-400 transition-colors">FAQ</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-purple-400">
              Login
            </Button>
            <Button className="bg-purple-gradient hover:opacity-90 glow-button">
              Enroll Now
            </Button>
          </div>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#program" className="text-foreground/80 hover:text-purple-400 transition-colors">Program</a>
              <a href="#pricing" className="text-foreground/80 hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#mentorship" className="text-foreground/80 hover:text-purple-400 transition-colors">Mentorship</a>
              <a href="#faq" className="text-foreground/80 hover:text-purple-400 transition-colors">FAQ</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-foreground hover:text-purple-400 justify-start">
                  Login
                </Button>
                <Button className="bg-purple-gradient hover:opacity-90 glow-button justify-start">
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
