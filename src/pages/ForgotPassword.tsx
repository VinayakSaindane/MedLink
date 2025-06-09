import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Mail, ChevronRight, ShieldCheck } from 'lucide-react'; 


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const { resetPassword } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await resetPassword(email);
      setIsEmailSent(true);
      toast({
        title: 'Reset email sent',
        description: 'Check your email for password reset instructions',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send reset email. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // UI for when email has been sent successfully
  if (isEmailSent) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 w-full max-w-md">
          <Card className="shadow-2xl rounded-3xl backdrop-blur-sm bg-white/80 border border-blue-100">
            <CardHeader className="text-center pb-0">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <ShieldCheck className="w-8 h-8 text-green-600" /> {/* Medical-themed success icon */}
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">Check your email</CardTitle>
              <CardDescription className="text-gray-600">
                We've sent password reset instructions to <span className="font-semibold text-blue-700">{email}</span>.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 text-center space-y-6">
              <p className="text-sm text-gray-700">
                Didn't receive the email? Please check your spam folder or click "Try again" to resend.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => setIsEmailSent(false)}
                  variant="outline"
                  className="w-full h-12 text-lg font-semibold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                >
                  Try again
                </Button>
                <Link to="/login" className="block">
                  <Button
                    variant="ghost"
                    className="w-full h-12 text-lg font-semibold rounded-xl text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-all duration-300"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to login
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* CSS for animations */}
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
  }

  // UI for the initial password reset request
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header with App Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center group">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mr-3 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-8 h-8 text-white" /> {/* Consistent app logo */}
            </div>
            <span className="text-3xl font-extrabold text-gray-900 tracking-tight">Med<span className="text-blue-600">App</span></span>
          </Link>
        </div>

        <Card className="shadow-2xl rounded-3xl backdrop-blur-sm bg-white/80 border border-blue-100">
          <CardHeader className="space-y-2 text-center pb-0">
            <CardTitle className="text-3xl font-bold text-gray-900">Forgot your password?</CardTitle>
            <CardDescription className="text-gray-600">
              Enter your email address below to receive a password reset link.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="forgot-email" className="text-gray-700 font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="forgot-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 pr-4 py-2 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 group"
                disabled={isLoading}
              >
                {isLoading ? 'Sending Link...' : (
                  <>
                    Send Reset Link <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center border-t border-gray-200 pt-6">
              <span className="text-sm text-gray-600">
                Remember your password?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                  Back to Login
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* CSS for animations */}
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

export default ForgotPassword;