import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-farming-transparent.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced gradient overlay with better transparency */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary-light/60 to-primary-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-primary/20" />
      
      <div className="relative z-10 container max-w-5xl px-4">
        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Shield className="h-4 w-4 text-green-200" />
            <span className="text-sm text-white/90 font-medium">100% Secure</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <TrendingUp className="h-4 w-4 text-green-200" />
            <span className="text-sm text-white/90 font-medium">₹12,000+ Benefits</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-white drop-shadow-lg">Transparent Farming,</span><br />
          <span className="text-green-200 drop-shadow-lg">Corruption-Free Future</span>
        </h1>
        
        <p className="text-lg md:text-2xl mb-10 text-white/95 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-sm">
          Know exactly how much money you will receive, when you will receive it, and from 
          which government scheme. <span className="text-green-200 font-semibold">No middlemen, no corruption, just transparency.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-green-50 font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => navigate('/benefits')}
          >
            Check My Benefits
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white transition-all duration-300"
            onClick={() => navigate('/report-corruption')}
          >
            Report Corruption
          </Button>
        </div>

        {/* Enhanced feature highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-2xl font-bold text-green-200 mb-2">₹12,000+</div>
            <div className="text-white/90 font-medium">Average Annual Benefits</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-2xl font-bold text-green-200 mb-2">15+</div>
            <div className="text-white/90 font-medium">Government Schemes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-2xl font-bold text-green-200 mb-2">100%</div>
            <div className="text-white/90 font-medium">Transparency Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;