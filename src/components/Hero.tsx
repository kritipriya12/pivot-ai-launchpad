
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-8">
            <span className="text-purple-300 text-sm font-medium">🚀 Next Cohort Starts Soon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Launch Your{' '}
            <span className="gradient-text">AI Career</span>
            <br />
            with P.I.V.O.T.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform from curious learner to industry-ready AI professional in just 4 weeks. 
            Master practical skills, build real projects, and land your dream tech job.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-purple-gradient hover:opacity-90 glow-button text-lg px-8 py-6 animate-glow"
            >
              Start My AI Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-6"
            >
              View Program Details
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4 Weeks</div>
              <div className="text-foreground/70">Intensive Training</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">₹1,500</div>
              <div className="text-foreground/70">Complete Program</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-foreground/70">Practical Projects</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
