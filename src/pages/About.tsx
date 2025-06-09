import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Heart, Lightbulb, Shield, Sparkles, ArrowRight, CheckCircle, Award, Star } from 'lucide-react'; // Icons for mission, team, values, innovation
import Header from './Header'; // Ensure this path is correct relative to About.tsx
import Footer from './Footer'; // Assuming you have a Footer component now

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'We prioritize the health and well-being of our users above all else.',
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-red-50'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Fostering strong relationships between patients and healthcare providers.',
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly seeking new ways to improve healthcare accessibility and management.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Ensuring the highest standards of data privacy and reliability.',
      color: 'from-purple-600 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Animated Background Elements (Subtle) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section for About Us - Redesigned */}
      <section className="relative pt-16 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-10">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-800 mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Learn more about MedLink
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
            Empowering Health, <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              One Connection at a Time.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to transforming healthcare by making it more accessible, efficient, and user-friendly for everyone.
          </p>
          <Link to="/register">
            <Button size="lg" className="group px-8 py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center mx-auto">
              Join Our Community
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Mission & Vision Section - Enhanced Layout */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by a clear vision, we are committed to revolutionizing healthcare accessibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Mission Card */}
            <Card className="relative overflow-hidden rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-125"></div>
              <CardHeader className="relative pb-4 z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-6 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 z-10">
                <CardDescription className="text-gray-700 leading-relaxed text-lg">
                  Our mission is to empower individuals to take control of their health by providing a seamless, secure, and integrated platform for all their medical needs. We aim to bridge the gap between patients and healthcare providers, ensuring everyone receives timely and quality care.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="relative overflow-hidden rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-125"></div>
              <CardHeader className="relative pb-4 z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-2xl mb-6 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                  <Star className="w-8 h-8 text-white" /> {/* Using Star for Vision */}
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 z-10">
                <CardDescription className="text-gray-700 leading-relaxed text-lg">
                  To be the leading digital health platform, recognized for innovation, reliability, and our unwavering commitment to improving global health outcomes. We envision a world where healthcare is effortlessly managed and universally accessible.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section - Enhanced with subtle background */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            The MedLink <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-xl">
            MedLink was founded in 2023 by a team of healthcare professionals and technology enthusiasts who recognized the growing need for a simplified and integrated approach to personal health management. Frustrated by fragmented systems and inaccessible information, we set out to create a platform that puts patients at the center of their care. From humble beginnings, MedLink has grown into a trusted partner for thousands of users, continually evolving to meet the dynamic demands of modern healthcare.
          </p>
          <div className="mt-12 flex justify-center items-center gap-6">
            <div className="flex items-center text-blue-700 font-semibold text-lg">
              <Award className="w-6 h-6 mr-2 text-yellow-500" />
              Award-Winning Innovation
            </div>
            <div className="flex items-center text-blue-700 font-semibold text-lg">
              <Users className="w-6 h-6 mr-2 text-green-500" />
              Thousands of Happy Users
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Reusing Services Card Style */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and how we interact with our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${value.bgColor}`}
                >
                  {/* Subtle Background Swoosh */}
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-125`}></div>
                  
                  <CardHeader className="relative text-left pb-4 z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative pt-0 z-10">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


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
      `}</style>
    </div>
  );
};

export default About;