
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    "4-week comprehensive AI curriculum",
    "Live interactive sessions with experts",
    "1-on-1 mentorship sessions",
    "4+ hands-on projects for portfolio",
    "Industry-recognized certification",
    "Job placement assistance",
    "Lifetime access to community",
    "Career guidance and interview prep"
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Simple Pricing</span>, Maximum Value
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Invest in your future with our comprehensive AI career program. 
            One price, everything included.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Countdown Timer */}
          <div className="glass-card p-6 mb-8 text-center">
            <h3 className="text-lg font-semibold mb-4 text-purple-300">⏰ Next Cohort Starts In:</h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-purple-gradient rounded-lg p-3 mb-2">
                    <span className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-sm text-foreground/70 capitalize">{unit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Card */}
          <div className="glass-card p-8 border-2 border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-purple-gradient text-white px-4 py-2 text-sm font-semibold">
              Early Bird Special
            </div>
            
            <div className="text-center mb-8">
              <div className="text-5xl font-bold mb-2">
                <span className="gradient-text">₹1,500</span>
              </div>
              <p className="text-foreground/70">Complete 4-week program</p>
              <p className="text-sm text-purple-300 mt-2">⚡ Limited time offer - Regular price ₹3,000</p>
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-purple-gradient hover:opacity-90 glow-button text-lg py-6 mb-4">
              Join the Next Cohort
            </Button>
            
            <p className="text-center text-sm text-foreground/60">
              💳 Secure payment • 📞 WhatsApp support • 🔒 100% refund guarantee
            </p>
          </div>

          {/* QR Code Section */}
          <div className="mt-8 text-center">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Payment via UPI</h3>
              <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-sm">QR Code</span>
              </div>
              <p className="text-sm text-foreground/70">
                Scan to pay instantly or 
                <span className="text-purple-400 ml-1">pay@verbly.in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
