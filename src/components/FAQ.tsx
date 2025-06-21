
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Who is this program suitable for?",
      answer: "This program is perfect for students, recent graduates, and professionals looking to transition into AI careers. No prior AI experience is required - we start from the basics and build up to advanced concepts."
    },
    {
      question: "What if I have no programming background?",
      answer: "Don't worry! We start with Python fundamentals and gradually build your skills. Our mentors provide personalized support to ensure everyone can keep up, regardless of their starting point."
    },
    {
      question: "How much time do I need to dedicate weekly?",
      answer: "We recommend 8-10 hours per week, including live sessions, assignments, and project work. The schedule is flexible to accommodate working professionals and students."
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll build 4 industry-relevant projects including a machine learning classifier, computer vision application, NLP chatbot, and a comprehensive capstone project of your choice."
    },
    {
      question: "Is job placement guaranteed?",
      answer: "While we can't guarantee job placement, we provide comprehensive career support including resume building, interview preparation, and connections to our industry network. Many graduates have successfully landed AI roles."
    },
    {
      question: "What happens after the 4 weeks?",
      answer: "You'll receive lifetime access to our community, course materials, and career support. We also offer advanced modules and specialized workshops for continued learning."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes! We offer a 100% money-back guarantee within the first week if you're not completely satisfied with the program quality."
    },
    {
      question: "How is this different from online courses?",
      answer: "Unlike pre-recorded courses, we offer live interactive sessions, 1-on-1 mentorship, peer collaboration, and hands-on project guidance. It's like a bootcamp but more personalized and affordable."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Frequently Asked</span> Questions
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about the program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border border-white/10 rounded-lg"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-purple-400 hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@verbly.in"
              className="inline-flex items-center px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-lg text-purple-300 transition-colors"
            >
              📧 Email Support
            </a>
            <a 
              href="https://wa.me/9999999999"
              className="inline-flex items-center px-6 py-3 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-lg text-green-300 transition-colors"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
