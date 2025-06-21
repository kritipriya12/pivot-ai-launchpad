
import { Users, Calendar, MessageSquare } from 'lucide-react';

const Mentorship = () => {
  const mentors = [
    {
      name: "Arjun Sharma",
      role: "Senior AI Engineer",
      company: "Google",
      experience: "6+ years",
      expertise: ["Machine Learning", "Computer Vision", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      role: "Data Science Lead",
      company: "Microsoft",
      experience: "8+ years",
      expertise: ["Deep Learning", "NLP", "Python"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b04ca08f?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Rohit Kumar",
      role: "AI Product Manager",
      company: "Amazon",
      experience: "5+ years",
      expertise: ["AI Strategy", "Product Development", "Team Leadership"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const mentorshipFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "1-on-1 Sessions",
      description: "Personal guidance tailored to your learning pace and goals"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Book sessions at times that work for your schedule"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "24/7 Community",
      description: "Access to exclusive Discord community for peer support"
    }
  ];

  return (
    <section id="mentorship" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Learn from <span className="gradient-text">Industry Experts</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Get personalized guidance from seasoned professionals working at top tech companies
          </p>
        </div>

        {/* Mentorship Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mentorshipFeatures.map((feature, index) => (
            <div key={index} className="glass-card p-8 text-center hover:bg-card/70 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mentor Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="glass-card p-6 text-center hover:bg-card/70 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-purple-500/30">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-1">{mentor.name}</h3>
              <p className="text-purple-400 font-medium mb-2">{mentor.role}</p>
              <p className="text-foreground/70 text-sm mb-2">{mentor.company} • {mentor.experience}</p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {mentor.expertise.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="inline-flex items-center text-sm text-purple-400">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Available for mentoring
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-6">
            Ready to connect with your mentor and accelerate your AI journey?
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-purple-600/20 border border-purple-500/30 rounded-full">
            <span className="text-purple-300">💬 Join 500+ students already learning with expert guidance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
