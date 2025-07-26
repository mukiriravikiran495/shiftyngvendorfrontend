import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { QrCode, Smartphone, Mail } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  const handleContinue = () => {
    if (phoneOrEmail.trim()) {
      navigate("/otp-verification");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-foreground">
              What's your phone number or email?
            </h2>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter phone number or email"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                className="h-14 px-4 text-lg rounded-xl border-2 focus:border-primary"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                {phoneOrEmail.includes("@") ? (
                  <Mail className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Smartphone className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </div>

            <Button 
              onClick={handleContinue}
              variant="black"
              size="full"
              className="text-lg font-semibold"
              disabled={!phoneOrEmail.trim()}
            >
              Continue
            </Button>

            <div className="flex items-center space-x-4">
              <Separator className="flex-1" />
              <span className="text-muted-foreground text-sm">or</span>
              <Separator className="flex-1" />
            </div>

            <div className="space-y-3">
              <Button variant="social" size="full" className="h-14">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjU2IDEyLjI1QzIyLjU2IDExLjQ3IDIyLjQ5IDEwLjcyIDIyLjM2IDEwSDEyVjE0LjI2SDIwLjY5QzIwLjMgMTUuNiAxOS42MiAxNi44IDE4LjYyIDE3LjY5VjIwLjY5SDIwLjk0QzIxLjc2IDE5Ljk3IDIyLjU2IDE2LjMgMjIuNTYgMTIuMjVaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMiAyM0M5LjQ4IDIzIDcuMzggMjIuNzYgNS44MSAyMi4wN0w1LjgxIDIyLjA3TDUuODEgMjIuMDZDNC4zNyAyMS4yIDMuNDggMTkuNzcgMy40OCAxOEMzLjQ4IDEwLjkzIDkuNDggNS4xNyAxNi44NSA1LjE3QzE4LjQgNS4xNyAxOS44OSA1LjU3IDIxIDYuMjJMMTguNjIgNy4yNEMxNy41OCA3IDEzLjggNi43NSAxMiAxMkMxMS41NyAxMy43IDExLjY5IDE1LjM1IDEyIDEyQzEyIDEyIDEyLjMyIDEyLjA3IDEyIDEyWiIgZmlsbD0iIzM0QTg1MyIvPgo8L3N2Zz4K"
                  alt="Google"
                  className="h-5 w-5"
                />
                <span className="text-lg">Continue with Google</span>
              </Button>

              <Button variant="social" size="full" className="h-14">
                <div className="h-5 w-5 bg-black rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <span className="text-lg">Continue with Apple</span>
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Separator className="flex-1" />
              <span className="text-muted-foreground text-sm">or</span>
              <Separator className="flex-1" />
            </div>

            <Button variant="outline" size="full" className="h-14">
              <QrCode className="h-5 w-5" />
              <span className="text-lg">Log in with QR code</span>
            </Button>

            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, 
              including by automated means, from Shiftyng and its affiliates to the number provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;