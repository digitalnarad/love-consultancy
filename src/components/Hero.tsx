
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles, Star, Instagram } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Full Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('/lovable-uploads/ecc10bb5-63aa-481a-9682-1179aa85fab9.png')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/30">
              <Sparkles className="w-4 h-4" />
              Life Coach & Counselor
              <Heart className="w-4 h-4 text-pink-300" />
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Find Your
              <span className="block bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
                Love Story
              </span>
            </h1>
            
            <p className="text-2xl text-white/90 mb-8 leading-relaxed backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20">Transform your life and discover your true path with personalized guidance from Darshit Korat.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <Button size="lg" onClick={scrollToContact} className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
              Get Your Guidance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-md px-8 py-4 rounded-full text-lg transition-all duration-300" onClick={() => window.open('https://www.instagram.com/i_am_darshit8/?igsh=MWtqbXh6bGVqcDVweg%3D%3D#', '_blank')}>
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </Button>
          </div>
          
          <div className="flex items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Available Now</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">300K+ Followers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
