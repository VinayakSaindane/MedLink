import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, FileText, Shield, Star, Users, ChevronRight, Play, CheckCircle, ArrowRight, Sparkles, Heart, Globe, Award } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsLoaded, setStatsLoaded] = useState(false);
  // New state to hold the animated values for each stat
  const [animatedStats, setAnimatedStats] = useState([
    { number: 0, label: 'Expert Doctors', icon: Users, finalValue: 500, suffix: '+' },
    { number: 0, label: 'Happy Patients', icon: Heart, finalValue: 10000, suffix: 'k+' },
    { number: 0, label: 'Appointments', icon: Calendar, finalValue: 50000, suffix: 'k+' },
    { number: 0, label: 'User Rating', icon: Star, finalValue: 4.9, suffix: '', isDecimal: true }
  ]);

  useEffect(() => {
    setIsVisible(true);
    // Simulate data fetching for stats section
    const statsTimer = setTimeout(() => {
      setStatsLoaded(true);
    }, 500); // Shorter delay before animation starts

    return () => clearTimeout(statsTimer);
  }, []);

  useEffect(() => {
    if (statsLoaded) {
      animatedStats.forEach((stat, index) => {
        const duration = 1500; // milliseconds
        const framesPerSecond = 60;
        const totalFrames = (duration / 1000) * framesPerSecond;
        const increment = stat.finalValue / totalFrames;

        let currentFrame = 0;
        const interval = setInterval(() => {
          currentFrame++;
          const newValue = stat.isDecimal
            ? Math.min(stat.finalValue, parseFloat((increment * currentFrame).toFixed(1)))
            : Math.min(stat.finalValue, Math.ceil(increment * currentFrame));

          setAnimatedStats(prevStats => {
            const newStats = [...prevStats];
            newStats[index] = { ...newStats[index], number: newValue };
            return newStats;
          });

          if (currentFrame >= totalFrames) {
            clearInterval(interval);
            // Ensure the final value is exactly as intended
            setAnimatedStats(prevStats => {
              const newStats = [...prevStats];
              newStats[index] = { ...newStats[index], number: stat.finalValue };
              return newStats;
            });
          }
        }, 1000 / framesPerSecond); // Update 60 times per second

        return () => clearInterval(interval);
      });
    }
  }, [statsLoaded]); // Run this effect only when statsLoaded becomes true

  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered appointment booking that finds the perfect time slots for you and your doctor.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Digital Health Records',
      description: 'Advanced OCR technology converts your medical documents into searchable, organized records.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your health data is protected with military-grade encryption and HIPAA compliance.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: 'Access your health dashboard, book appointments, and connect with doctors 24/7.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      text: 'MedLink revolutionized how I manage my healthcare. The interface is intuitive and booking appointments is effortless.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Cardiologist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      text: 'As a doctor, MedLink helps me manage my practice efficiently while providing excellent patient care.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: 'The medical records feature is a game-changer. Everything is organized and accessible whenever I need it.'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section with Enhanced Design */}
      <section className="relative pt-16 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                Trusted by 10,000+ patients worldwide
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
                Your Health,
                <br />
                <span className="text-blue-600">
                  Reimagined.
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the future of healthcare with AI-powered scheduling, intelligent medical records, 
                and seamless doctor-patient connections. Your wellness journey starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/register">
                  <Button size="lg" className="group px-8 py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="group px-8 py-4 bg-white/80 backdrop-blur text-gray-700 rounded-2xl text-lg font-semibold hover:bg-white transition-all duration-300 flex items-center">
                    <Play className="mr-2 w-5 h-5" />
                    I'm a Doctor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cards Preview */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transform perspective-1000">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rotate-1 hover:rotate-0">
              <Calendar className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Book Instantly</h3>
              <p className="text-gray-600 text-sm">Find and book appointments with top doctors in seconds</p>
            </div>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 -rotate-1 hover:rotate-0 mt-6 md:mt-0">
              <FileText className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Smart Records</h3>
              <p className="text-gray-600 text-sm">AI-powered medical record management and insights</p>
            </div>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rotate-1 hover:rotate-0">
              <Shield className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600 text-sm">Military-grade security for your health data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Increasing Number Animation */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {animatedStats.map((stat, index) => { // Use animatedStats here
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mb-4 group-hover:shadow-lg transition-shadow">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {/* Display the animated number with appropriate formatting */}
                    {stat.isDecimal ? stat.number.toFixed(1) : stat.number.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-800 mb-6">
              <Award className="w-4 h-4 mr-2" />
              Award-winning features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for
              <br />
              <span className="text-blue-600">
                Better Healthcare
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with intuitive design to revolutionize 
              how you manage your health and connect with healthcare professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl from-blue-600 to-purple-600"></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Patients & Doctors
            </h2>
            <p className="text-xl text-gray-600">See what our community has to say</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent block">
                Healthcare Journey?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join thousands of satisfied patients who have revolutionized their healthcare experience. 
              Start your journey towards simplified, effective health management today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-black hover:bg-white/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-blue-200 text-sm mb-4">Trusted by healthcare professionals worldwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-white/70 font-semibold">HIPAA Compliant</div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="text-white/70 font-semibold">SSL Encrypted</div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="text-white/70 font-semibold">24/7 Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <Footer />

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Index;