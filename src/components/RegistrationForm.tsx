
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    goals: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Registration Successful! 🎉",
      description: "Welcome to Verbly P.I.V.O.T.! Check your email for next steps.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      experience: '',
      goals: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Career?
            </h2>
            <p className="text-xl text-foreground/80">
              Fill out this form to secure your spot in the next cohort
            </p>
          </div>

          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-foreground/90">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-white/20 focus:border-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground/90">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-white/20 focus:border-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-foreground/90">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-white/20 focus:border-purple-500"
                    placeholder="+91 99999 99999"
                  />
                </div>
                
                <div>
                  <Label htmlFor="education" className="text-foreground/90">Education Level *</Label>
                  <select
                    id="education"
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 bg-background/50 border border-white/20 rounded-md focus:border-purple-500 focus:outline-none text-foreground"
                  >
                    <option value="">Select your education</option>
                    <option value="undergraduate">Undergraduate Student</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">Post Graduate</option>
                    <option value="diploma">Diploma</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="experience" className="text-foreground/90">Programming Experience</Label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="mt-2 w-full px-3 py-2 bg-background/50 border border-white/20 rounded-md focus:border-purple-500 focus:outline-none text-foreground"
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="some">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <Label htmlFor="goals" className="text-foreground/90">Career Goals</Label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2 w-full px-3 py-2 bg-background/50 border border-white/20 rounded-md focus:border-purple-500 focus:outline-none text-foreground resize-none"
                  placeholder="Tell us about your career aspirations and what you hope to achieve with this program..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-gradient hover:opacity-90 glow-button text-lg py-6"
              >
                {isSubmitting ? 'Submitting...' : 'Secure My Spot 🚀'}
              </Button>

              <p className="text-center text-sm text-foreground/60">
                By registering, you agree to our terms and privacy policy.
                <br />
                🔒 Your information is secure and encrypted.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
