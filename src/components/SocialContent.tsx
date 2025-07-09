
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Instagram, Heart, Users, Sparkles } from "lucide-react";

const SocialContent = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff69b4' fill-opacity='0.04'%3E%3Cpath d='M40 40c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20zm-20-20c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            My Content Universe
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-6">
            Dive Into Love Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join my community and get inspired by real stories, practical advice, and transformative content that touches hearts worldwide.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* YouTube Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-2xl mb-6 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">YouTube Channel</h3>
                  <p className="text-white/90">Deep dives into love and life</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* YouTube Videos Grid */}
              <div className="grid grid-cols-1 gap-6">
                <Card className="overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-0 relative">
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/Kbp_DPyJ7-w" title="YouTube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full aspect-video rounded-lg"></iframe>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-0 relative">
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/CdkBGE8soYE" title="YouTube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full aspect-video rounded-lg"></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => window.open('https://www.youtube.com/@darshitkorat6319', '_blank')}>
              <Youtube className="w-5 h-5 mr-2" />
              Explore My YouTube
            </Button>
          </div>
          
          {/* Instagram Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-2xl mb-6 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Instagram</h3>
                  <p className="text-white/90">300K+ followers • Daily inspiration</p>
                </div>
              </div>
            </div>
            
            {/* Instagram Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">300K+</div>
                <div className="text-gray-700 font-medium">Followers</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">30M+</div>
                <div className="text-gray-700 font-medium">Monthly Views</div>
              </div>
            </div>
            
            {/* Instagram Content - Clean Profile Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-pink-100 hover:border-pink-300 transition-all duration-300">
              <a href="https://www.instagram.com/i_am_darshit8/" target="_blank" rel="noopener noreferrer" className="block text-center group">
                <div className="flex items-center justify-center mb-4">
                  <Instagram className="w-12 h-12 text-pink-500 group-hover:text-pink-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">Follow @i_am_darshit8</h3>
                <p className="text-gray-600 mb-4">300K+ Followers • Reels • Coaching Journey</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      title: "Love Tips",
                      gradient: "from-pink-400 to-rose-400",
                      icon: Heart
                    },
                    {
                      title: "Life Advice",
                      gradient: "from-purple-500 to-indigo-500",
                      icon: Sparkles
                    }
                  ].map((item, index) => (
                    <div key={index} className={`aspect-square bg-gradient-to-br ${item.gradient} rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 mb-2" />
                      <p className="text-sm font-bold">{item.title}</p>
                    </div>
                  ))}
                </div>
              </a>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => window.open('https://www.instagram.com/i_am_darshit8/', '_blank')}>
              <Instagram className="w-5 h-5 mr-2" />
              Follow @i_am_darshit8
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialContent;
