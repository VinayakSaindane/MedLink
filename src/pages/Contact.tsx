import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Sparkles, ArrowRight, CornerDownRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from './Header';
import Footer from './Footer';
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call to send email
      // In a real application, you would replace this with an actual backend API call:
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      //
      // if (!response.ok) {
      //   throw new Error('Failed to send message');
      // }

      console.log('Form data submitted:', formData); // For debugging
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      toast.success('Message sent successfully! We will get back to you shortly.', {
        duration: 5000,
        position: 'top-center',
      });

      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again later.', {
        duration: 5000,
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <Toaster /> {/* Place the Toaster component at the root of your app or directly in this component */}

      {/* Animated Background Elements (Subtle) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-400/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section for Contact - Redesigned for Different Screen Sizes */}
      <section className="relative pt-16 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-10">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Text Content Column */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              We're here to help!
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              Get in <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Touch With Us</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Whether you have questions, feedback, or need support, our team is ready to assist you.
              Reach out to us and let's connect.
            </p>
            <Link to="#contact-form-section">
              <Button size="lg" className="group px-8 py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center mx-auto lg:mx-0">
                Send a Message
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Visual Element Column for Larger Screens with Image */}
          <div className={`relative w-full h-full min-h-64 lg:min-h-96 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-3xl shadow-xl flex items-center justify-center p-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            {/* Placeholder Image Added */}
            <img
              src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7866/conversions/talking-about-erectile-dysfunction-thumb.jpg" // Use a relevant illustration URL here
              alt="Illustration of a customer support agent helping a client"
              className="rounded-2xl shadow-lg w-full h-full object-cover" // object-cover or object-contain depending on desired fit
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 rounded-3xl"></div>
            <div className="absolute bottom-4 left-4 inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-blue-700 font-medium text-sm">
              Your voice matters
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section - Enhanced */}
      <section id="contact-form-section" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <Card className="relative overflow-hidden rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/80 backdrop-blur-sm">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-125"></div>
            <CardHeader className="relative text-left pb-4 z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-6 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                <Send className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="relative pt-0 z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your Full Name"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    placeholder="Regarding your inquiry..."
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Type your message here..."
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-y"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></Textarea>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full group px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <CornerDownRight className={`ml-2 w-5 h-5 ${isSubmitting ? 'animate-bounce' : 'group-hover:translate-x-1'} transition-transform`} />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information Cards */}
          <div className="space-y-8">
            {/* Email Card */}
            <Card className="relative overflow-hidden rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-50 to-blue-50">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-125"></div>
              <CardHeader className="relative pb-4 z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl mb-6 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 z-10">
                <a
                  href="mailto:support@medlink.com"
                  className="text-lg text-gray-700 hover:text-blue-700 transition-colors duration-200 flex items-center"
                >
                  support@medlink.com
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="relative overflow-hidden rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-125"></div>
              <CardHeader className="relative pb-4 z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl mb-6 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 z-10">
                <a
                  href="tel:+917397932879"
                  className="text-lg text-gray-700 hover:text-blue-700 transition-colors duration-200 flex items-center"
                >
                  +91 7397932879
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="relative overflow-hidden rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-teal-50 to-green-50">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-teal-600 to-green-500 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-125"></div>
              <CardHeader className="relative pb-4 z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-green-500 rounded-2xl mb-6 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 z-10">
                <p className="text-lg text-gray-700">
                  123 Redium Park<br />
                  MedLink City , Maharashtra , Virar
                </p>
                {/* Optional: Add a link to Google Maps */}
                <a
                  href="http://google.com/maps/search/123+Redium+Park,+MedLink+City,+Maharashtra,+Virar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  View on Map
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </CardContent>
            </Card>
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
      `}</style>
    </div>
  );
};

export default Contact;