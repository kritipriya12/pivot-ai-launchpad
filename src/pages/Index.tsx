
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgramOverview from '@/components/ProgramOverview';
import Pricing from '@/components/Pricing';
import RegistrationForm from '@/components/RegistrationForm';
import Mentorship from '@/components/Mentorship';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ProgramOverview />
      <Pricing />
      <RegistrationForm />
      <Mentorship />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
