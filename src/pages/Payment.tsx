// utils/paymentIntegration.ts
import { useToast } from '@/hooks/use-toast';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface PaymentData {
  amount: number;
  currency: string;
  doctorName: string;
  patientName: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: string;
}

export interface PaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export const initializeRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const processPayment = async (
  paymentData: PaymentData,
  onSuccess: (response: PaymentResponse) => void,
  onFailure: (error: any) => void
): Promise<void> => {
  const isRazorpayLoaded = await initializeRazorpay();

  if (!isRazorpayLoaded) {
    onFailure(new Error('Razorpay SDK failed to load'));
    return;
  }

  // Create order (in a real app, this would be an API call to your backend)
  const order = {
    id: `order_${Date.now()}`,
    amount: paymentData.amount * 100, // Razorpay expects amount in paise
    currency: paymentData.currency,
  };

  const options = {
    key: 'rzp_test_1234567890', // Replace with your actual Razorpay test key
    amount: order.amount,
    currency: order.currency,
    name: 'HealthCare App',
    description: `Appointment with Dr. ${paymentData.doctorName}`,
    order_id: order.id,
    handler: function (response: PaymentResponse) {
      onSuccess(response);
    },
    prefill: {
      name: paymentData.patientName,
      email: 'patient@example.com', // You can get this from user context
      contact: '9999999999', // You can get this from user context
    },
    notes: {
      doctor: paymentData.doctorName,
      appointment_date: paymentData.appointmentDate,
      appointment_time: paymentData.appointmentTime,
      appointment_type: paymentData.appointmentType,
    },
    theme: {
      color: '#3B82F6',
    },
    modal: {
      ondismiss: function () {
        onFailure(new Error('Payment cancelled by user'));
      },
    },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};

// Hook for payment processing
export const usePayment = () => {
  const { toast } = useToast();

  const processAppointmentPayment = async (
    paymentData: PaymentData,
    onPaymentSuccess: (paymentResponse: PaymentResponse) => void
  ) => {
    try {
      await processPayment(
        paymentData,
        (response: PaymentResponse) => {
          toast({
            title: 'Payment Successful!',
            description: `Payment ID: ${response.razorpay_payment_id}`,
          });
          onPaymentSuccess(response);
        },
        (error: any) => {
          toast({
            title: 'Payment Failed',
            description: error.message || 'Something went wrong with the payment',
            variant: 'destructive',
          });
        }
      );
    } catch (error) {
      toast({
        title: 'Payment Error',
        description: 'Unable to process payment. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return { processAppointmentPayment };
};