import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, FlaskConical, Globe, Handshake, FileText, Users, Star, ArrowRight, CheckCircle, Award, Sparkles, Heart, Calendar, Clock } from 'lucide-react'; // Added Clock for scheduling CTA
import Header from './Header';
import Footer from './Footer';


const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const serviceOfferings = [
    {
      icon: Stethoscope,
      title: 'Online Consultations',
      description: 'Connect with certified doctors from anywhere, anytime. Secure video calls for your convenience.',
      features: ['24/7 Availability', 'Certified Doctors', 'Secure Platform'],
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: FlaskConical,
      title: 'Lab Test Bookings',
      description: 'Schedule lab tests at partnered facilities and receive results directly in your app.',
      features: ['Home Collection', 'Quick Results', 'Digital Reports'],
      color: 'from-teal-600 to-blue-500',
      bgColor: 'bg-gradient-to-br from-teal-50 to-blue-50'
    },
    {
      icon: Globe,
      title: 'Pharmacy Delivery',
      description: 'Get your prescriptions delivered to your doorstep. Fast and reliable service.',
      features: ['Same Day Delivery', 'Prescription Verified', 'Track Orders'],
      color: 'from-indigo-600 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    },
    {
      icon: Handshake,
      title: 'Health Programs',
      description: 'Access personalized health programs and wellness plans tailored to your needs.',
      features: ['Personalized Plans', 'Progress Tracking', 'Expert Guidance'],
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50'
    },
    {
      icon: Users,
      title: 'Specialist Referrals',
      description: 'Easily get referrals to top specialists in various medical fields.',
      features: ['Expert Network', 'Quick Referrals', 'Verified Specialists'],
      color: 'from-cyan-600 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-indigo-50'
    },
    {
      icon: FileText,
      title: 'Digital Health Records',
      description: 'Securely store and access all your medical history, prescriptions, and reports in one place.',
      features: ['Secure Storage', 'Easy Access', 'Complete History'],
      color: 'from-purple-600 to-blue-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-blue-50'
    }
  ];


  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section - Redesigned for Services Page */}
      <section className="relative pt-16 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-800 mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Your complete suite of healthcare solutions
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              Comprehensive
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Healthcare Services.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-xl leading-relaxed">
              Explore our wide range of services designed to simplify your health journey, 
              from online consultations to digital records and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link to="#services-grid"> {/* Link to the services grid below */}
                <Button size="lg" className="group px-8 py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/schedule-consultation"> {/* New specific CTA */}
                <Button variant="outline" size="lg" className="group px-8 py-4 bg-white/80 backdrop-blur text-gray-700 rounded-2xl text-lg font-semibold hover:bg-white transition-all duration-300 flex items-center">
                  <Clock className="mr-2 w-5 h-5" />
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Placeholder for Services Hero */}
          <div className={`relative w-full h-full min-h-64 lg:min-h-96 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 rounded-3xl shadow-xl flex items-center justify-center p-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
              <img 
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3Jhd3BpeGVsb2ZmaWNlMl9taW5pbWFsX3Bob3RvX29mX2FmcmljYW5fYW1lcmljYW5fbWFsZV9wZWRpYXRyaV83ODJkNDZiZi0wNmFiLTQ4MjAtYmExZi1hNzNiMWJjYzNlYTMucG5n.png" 
                alt="Healthcare Services Illustration" 
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-indigo-600/10 rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-blue-700 font-medium text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Your wellness is our priority
              </div>
          </div>
        </div>
      </section>

     

      {/* Services Grid with new design */}
      <section id="services-grid" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Comprehensive Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is meticulously designed to provide you with seamless, efficient, and secure healthcare solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOfferings.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${service.bgColor}`}
                >
                  {/* Subtle Background Swoosh */}
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-125`}></div>
                  
                  <CardHeader className="relative text-left pb-4 z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative pt-0 z-10">
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-md text-gray-700">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="flex justify-start">
                      <Button 
                        variant="ghost" 
                        className="group/btn text-blue-700 hover:text-blue-900 font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:bg-blue-100"
                      >
                        Discover More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default Services;