import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Lock, User, Mail, Shield, ChevronRight, GraduationCap, Building2 } from 'lucide-react'; 


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'patient' as 'patient' | 'doctor',
    specialization: '',
    experience: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const specializations = [
    'Cardiology',
    'Dermatology',
    'Pediatrics',
    'Neurology',
    'Orthopedics',
    'Gynecology',
    'Psychiatry',
    'Radiology',
    'Anesthesiology',
    'Emergency Medicine',
    'General Practitioner'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Password mismatch',
        description: 'Passwords do not match',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: 'Weak password',
        description: 'Password must be at least 6 characters',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        ...(formData.role === 'doctor' && {
          specialization: formData.specialization,
          experience: parseInt(formData.experience),
          rating: 4.5 // Default rating for new doctors
        })
      };

      await register(userData);
      toast({
        title: 'Registration successful',
        description: 'Welcome to MedLink! You can now log in.',
      });
      navigate('/dashboard'); // Or navigate to login after successful registration
    } catch (error) {
      toast({
        title: 'Registration failed',
        description: error instanceof Error ? error.message : 'Something went wrong',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background Elements (similar to index.tsx and Login.tsx) */}
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-extrabold text-gray-900 tracking-tight">Med<span className="text-blue-600">App</span></span>
          </Link>
        </div>

        <Card className="shadow-2xl rounded-3xl backdrop-blur-sm bg-white/80 border border-blue-100">
          <CardHeader className="space-y-2 text-center pb-0">
            <CardTitle className="text-3xl font-bold text-gray-900">Join MedLink Today!</CardTitle>
            <CardDescription className="text-gray-600">
              Create your account to start managing your healthcare effortlessly.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label className="text-gray-700 font-medium">I am a</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value: 'patient' | 'doctor') => {
                    updateFormData('role', value);
                    // Clear doctor specific fields if switching to patient
                    if (value === 'patient') {
                      setFormData(prev => ({
                        ...prev,
                        specialization: '',
                        experience: ''
                      }));
                    }
                  }}
                  className="flex flex-row space-x-6 justify-center bg-gray-50 p-2 rounded-xl"
                >
                  <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200"
                       style={{ background: formData.role === 'patient' ? 'linear-gradient(to right, #bfdbfe, #c4b5fd)' : 'transparent' }}>
                    <RadioGroupItem value="patient" id="reg-patient" className="text-blue-600" />
                    <Label htmlFor="reg-patient" className={`cursor-pointer ${formData.role === 'patient' ? 'text-blue-800 font-semibold' : 'text-gray-700'}`}>
                      Patient <User className="inline-block w-4 h-4 ml-1 relative -top-0.5" />
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200"
                       style={{ background: formData.role === 'doctor' ? 'linear-gradient(to right, #bfdbfe, #c4b5fd)' : 'transparent' }}>
                    <RadioGroupItem value="doctor" id="reg-doctor" className="text-blue-600" />
                    <Label htmlFor="reg-doctor" className={`cursor-pointer ${formData.role === 'doctor' ? 'text-blue-800 font-semibold' : 'text-gray-700'}`}>
                      Doctor <GraduationCap className="inline-block w-4 h-4 ml-1 relative -top-0.5" />
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    required
                    className="pl-10 pr-4 py-2 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="reg-email" className="text-gray-700 font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    required
                    className="pl-10 pr-4 py-2 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Doctor-specific fields */}
              {formData.role === 'doctor' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="specialization" className="text-gray-700 font-medium">Specialization</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                      <Select
                        value={formData.specialization}
                        onValueChange={(value) => updateFormData('specialization', value)}
                        required
                      >
                        <SelectTrigger className="pl-10 pr-4 py-2 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all">
                          <SelectValue placeholder="Select your specialization" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {specializations.map((spec) => (
                            <SelectItem key={spec} value={spec} className="rounded-md">
                              {spec}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-gray-700 font-medium">Years of Experience</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="experience"
                        type="number"
                        placeholder="e.g., 5"
                        value={formData.experience}
                        onChange={(e) => updateFormData('experience', e.target.value)}
                        min="0"
                        max="50"
                        required
                        className="pl-10 pr-4 py-2 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="reg-password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="reg-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => updateFormData('password', e.target.value)}
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

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-gray-700 font-medium">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                    required
                    className="pl-10 pr-10 py-2 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 group"
                disabled={isLoading}
              >
                {isLoading ? 'Creating account...' : (
                  <>
                    Create account <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center border-t border-gray-200 pt-6">
              <span className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign in
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
       {/* CSS for animations (copy from index.tsx and Login.tsx) */}
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

export default Register;
