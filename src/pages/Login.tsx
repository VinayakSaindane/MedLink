import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Lock, User, Mail, Shield, ChevronRight } from 'lucide-react'; 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'patient' | 'doctor'>('patient');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password, role);
      toast({
        title: 'Login successful',
        description: 'Welcome back!',
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error instanceof Error ? error.message : 'Invalid credentials',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = (userRole: 'patient' | 'doctor') => {
    setRole(userRole);
    if (userRole === 'patient') {
      setEmail('patient@demo.com');
    } else {
      setEmail('doctor@demo.com');
    }
    setPassword('password');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background Elements (similar to index.tsx) */}
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
              <Shield className="w-8 h-8 text-white" /> {/* Changed icon to Shield for medical feel */}
            </div>
            <span className="text-3xl font-extrabold text-gray-900 tracking-tight">Med<span className="text-blue-600">App</span></span>
          </Link>
        </div>

        <Card className="shadow-2xl rounded-3xl backdrop-blur-sm bg-white/80 border border-blue-100">
          <CardHeader className="space-y-2 text-center pb-0">
            <CardTitle className="text-3xl font-bold text-gray-900">Welcome Back!</CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to manage your health journey.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label className="text-gray-700 font-medium">I am a</Label>
                <RadioGroup
                  value={role}
                  onValueChange={(value: 'patient' | 'doctor') => setRole(value)}
                  className="flex flex-row space-x-6 justify-center bg-gray-50 p-2 rounded-xl"
                >
                  <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200"
                       style={{ background: role === 'patient' ? 'linear-gradient(to right, #bfdbfe, #c4b5fd)' : 'transparent' }}>
                    <RadioGroupItem value="patient" id="patient" className="text-blue-600" />
                    <Label htmlFor="patient" className={`cursor-pointer ${role === 'patient' ? 'text-blue-800 font-semibold' : 'text-gray-700'}`}>
                      Patient <User className="inline-block w-4 h-4 ml-1 relative -top-0.5" />
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200"
                       style={{ background: role === 'doctor' ? 'linear-gradient(to right, #bfdbfe, #c4b5fd)' : 'transparent' }}>
                    <RadioGroupItem value="doctor" id="doctor" className="text-blue-600" />
                    <Label htmlFor="doctor" className={`cursor-pointer ${role === 'doctor' ? 'text-blue-800 font-semibold' : 'text-gray-700'}`}>
                      Doctor <Lock className="inline-block w-4 h-4 ml-1 relative -top-0.5" />
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 pr-4 py-2 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10 pr-10 py-2 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Demo Buttons */}
              <div className="space-y-2 pt-2">
                <div className="text-sm text-gray-600 text-center font-medium">Quick Access:</div>
                <div className="flex gap-3 justify-center">
                  <Button
                    type="button"
                    variant="secondary" // Use a secondary variant for demo buttons
                    size="sm"
                    onClick={() => fillDemoCredentials('patient')}
                    className="flex-1 max-w-[150px] bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg shadow-sm"
                  >
                    Patient Demo
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => fillDemoCredentials('doctor')}
                    className="flex-1 max-w-[150px] bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg shadow-sm"
                  >
                    Doctor Demo
                  </Button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-center"> {/* Centered for better flow */}
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 group"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : (
                  <>
                    Sign in <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center border-t border-gray-200 pt-6">
              <span className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                  Create Account
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
       {/* CSS for animations (copy from index.tsx) */}
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

export default Login;