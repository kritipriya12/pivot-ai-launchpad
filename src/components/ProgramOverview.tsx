
import { Check, Calendar, Users, FileText } from 'lucide-react';

const ProgramOverview = () => {
  const weeks = [
    {
      week: 1,
      title: "AI Fundamentals & Setup",
      description: "Master the basics of AI, set up development environment, and understand core concepts",
      highlights: ["Python for AI", "Environment Setup", "AI Ethics", "First Project"]
    },
    {
      week: 2,
      title: "Machine Learning Deep Dive",
      description: "Hands-on experience with ML algorithms, data preprocessing, and model training",
      highlights: ["Supervised Learning", "Data Preprocessing", "Model Training", "Performance Metrics"]
    },
    {
      week: 3,
      title: "Advanced AI Applications",
      description: "Explore neural networks, computer vision, and natural language processing",
      highlights: ["Neural Networks", "Computer Vision", "NLP Basics", "Real-world APIs"]
    },
    {
      week: 4,
      title: "Project & Portfolio",
      description: "Build your capstone project and prepare for job interviews",
      highlights: ["Capstone Project", "Portfolio Building", "Interview Prep", "Job Search Strategy"]
    }
  ];

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Real Projects",
      description: "Build 4+ production-ready AI projects for your portfolio"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals with 5+ years experience"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Certification",
      description: "Earn an industry-recognized certificate upon completion"
    }
  ];

  return (
    <section id="program" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="gradient-text">4-Week Journey</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A carefully crafted curriculum designed to take you from beginner to job-ready AI professional
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-purple-400 rounded-full"></div>
          
          {weeks.map((week, index) => (
            <div key={week.week} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="glass-card p-6 animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="text-purple-400 font-semibold mb-2">Week {week.week}</div>
                  <h3 className="text-xl font-bold mb-3">{week.title}</h3>
                  <p className="text-foreground/70 mb-4">{week.description}</p>
                  <div className="space-y-2">
                    {week.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-purple-400 mr-2" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-gradient rounded-full border-4 border-background flex items-center justify-center">
                <span className="text-white font-bold text-sm">{week.week}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 text-center hover:bg-card/70 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="w-12 h-12 bg-purple-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
