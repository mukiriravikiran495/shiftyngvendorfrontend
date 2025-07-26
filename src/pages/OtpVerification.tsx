import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Header from "@/components/Header";
import { ArrowLeft, RefreshCw } from "lucide-react";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isResending, setIsResending] = useState(false);

  const handleVerify = () => {
    if (otp.length === 6) {
      navigate("/registration");
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-2xl font-bold text-foreground">Verify your number</h2>
          </div>

          <div className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground text-lg">
                Enter the 6-digit code sent to your phone
              </p>
              <p className="text-primary font-medium">+91 99999 99999</p>
            </div>

            <div className="flex justify-center">
              <InputOTP 
                value={otp} 
                onChange={setOtp}
                maxLength={6}
                className="gap-3"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="h-14 w-12 text-xl border-2 rounded-xl" />
                  <InputOTPSlot index={1} className="h-14 w-12 text-xl border-2 rounded-xl" />
                  <InputOTPSlot index={2} className="h-14 w-12 text-xl border-2 rounded-xl" />
                  <InputOTPSlot index={3} className="h-14 w-12 text-xl border-2 rounded-xl" />
                  <InputOTPSlot index={4} className="h-14 w-12 text-xl border-2 rounded-xl" />
                  <InputOTPSlot index={5} className="h-14 w-12 text-xl border-2 rounded-xl" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button 
              onClick={handleVerify}
              variant="black"
              size="full"
              className="text-lg font-semibold"
              disabled={otp.length !== 6}
            >
              Verify
            </Button>

            <div className="text-center space-y-4">
              <p className="text-muted-foreground">Didn't receive the code?</p>
              <Button 
                variant="ghost" 
                onClick={handleResend}
                disabled={isResending}
                className="text-primary font-medium"
              >
                {isResending ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  "Resend Code"
                )}
              </Button>
            </div>

            <div className="text-center pt-6">
              <p className="text-sm text-muted-foreground">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;