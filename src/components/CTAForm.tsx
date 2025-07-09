import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Send, Sparkles, Star, MessageCircle } from "lucide-react";
import { useState } from "react";

const CTAForm = () => {
  const [agreed, setAgreed] = useState(false);
  const [yourName, setYourName] = useState("");
  const [yourCity, setYourCity] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [instagram, setInstagram] = useState("");
  const [question, setQuestion] = useState("");

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    setAgreed(checked === true);
  };

  const handleUPIPayment = () => {
    // UPI payment details
    const upiId = "darshitkorat08-1@okaxis";
    const amount = "999";
    const transactionNote = `Consultation fee - ${yourName}`;

    // Create UPI payment URL
    const upiUrl = `upi://pay?pa=${upiId}&am=${amount}&tn=${encodeURIComponent(transactionNote)}&cu=INR`;

    // Open UPI app
    window.location.href = upiUrl;

    // Show success message and instructions
    alert("UPI app opening... After payment, please send a screenshot of the payment confirmation along with your question to verify your consultation booking.");
  };

  return <section id="contact" className="py-24 bg-gradient-to-br from-white via-pink-50 to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff1493' fill-opacity='0.02'%3E%3Cpath d='M50 50m-50 0a50,50 0 1,1 100,0a50,50 0 1,1 -100,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Get Personal Guidance
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Share your story with me and get personalized guidance that will change your perspective on love and life.
          </p>
          <div className="flex items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">300K+ Trust Me</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-pink-500" />
              <span className="font-medium">You'll Hear from Me Personally</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="font-medium">Life Changing</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 to-purple-600"></div>
            <CardHeader className="bg-gradient-to-br from-white to-pink-50 pb-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl text-gray-900 mb-2">Share Your Story</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Get personalized guidance from Darshit for just ₹999
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8 space-y-6">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Your Name *</label>
                  <Input placeholder="Enter your full name" className="rounded-xl border-2 border-gray-200 focus:border-pink-400 transition-colors duration-300 h-12 text-lg" value={yourName} onChange={e => setYourName(e.target.value)} required />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Your City *</label>
                  <Input placeholder="Enter your city" className="rounded-xl border-2 border-gray-200 focus:border-pink-400 transition-colors duration-300 h-12 text-lg" value={yourCity} onChange={e => setYourCity(e.target.value)} required />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Mobile Number *</label>
                  <Input type="tel" placeholder="Enter your mobile number" className="rounded-xl border-2 border-gray-200 focus:border-pink-400 transition-colors duration-300 h-12 text-lg" value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} required />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email ID *</label>
                  <Input type="email" placeholder="Enter your email address" className="rounded-xl border-2 border-gray-200 focus:border-pink-400 transition-colors duration-300 h-12 text-lg" value={emailId} onChange={e => setEmailId(e.target.value)} required />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Instagram Username *</label>
                  <Input placeholder="@your_instagram_username" className="rounded-xl border-2 border-gray-200 focus:border-pink-400 transition-colors duration-300 h-12 text-lg" value={instagram} onChange={e => setInstagram(e.target.value)} required />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Your Question & Problem *</label>
                  <Textarea placeholder="Share what's in your heart. What guidance do you seek? (relationships, love life, personal growth, life decisions, etc.)" className="rounded-xl border-2 border-gray-200 focus:border-pink-400 min-h-[150px] transition-colors duration-300 text-lg" value={question} onChange={e => setQuestion(e.target.value)} required />
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-pink-50 rounded-xl border border-pink-200">
                  <Checkbox id="agree" checked={agreed} onCheckedChange={handleCheckboxChange} className="w-5 h-5" />
                  <label htmlFor="agree" className="text-sm text-gray-700 leading-relaxed">
                    I agree to pay ₹999 for personalized guidance and understand that Darshit will respond personally to my question within 24-48 hours.
                  </label>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-6 rounded-xl text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!agreed || !yourName || !yourCity || !mobileNumber || !emailId || !instagram || !question} onClick={handleUPIPayment} type="button">
                  <Send className="w-6 h-6 mr-3" />
                  Pay ₹999 via UPI
                </Button>
                
                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>🔒 UPI Payment • 💝 You'll Hear from Me Personally • ⚡ 24-48 hour response time</p>
                  <p className="mt-2 text-xs text-orange-600">
                    ⚠️ After payment, please send screenshot + your question details for verification
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};

export default CTAForm;
