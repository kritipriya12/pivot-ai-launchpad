
const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold gradient-text">Verbly P.I.V.O.T.</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Empowering the next generation of AI professionals through practical, hands-on learning.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Program</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#program" className="hover:text-purple-400 transition-colors">Curriculum</a></li>
              <li><a href="#mentorship" className="hover:text-purple-400 transition-colors">Mentorship</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © 2024 Verbly P.I.V.O.T. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
