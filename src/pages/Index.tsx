import { useState } from "react";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  MapPin,
  ArrowUpDown,
  Calendar as CalendarIcon2,
  Search,
  Truck,
  ShieldCheck,
  Clock,
  HeadphonesIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How do I book a mover?",
      answer:
        "Simply enter your pickup and drop locations, select your moving date, choose the shift type, and click search to browse available movers.",
    },
    {
      question: "What is included in the service?",
      answer:
        "Our service includes professional packing, loading, transportation, unloading, and unpacking. Insurance coverage is also available.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2-3 days in advance for local moves and 1-2 weeks for long-distance moves.",
    },
    {
      question: "Are my belongings insured?",
      answer:
        "Yes, all our partner movers provide basic insurance coverage. Premium insurance options are also available.",
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <div className=" mt-24 mb-24 relative flex flex-1 items-center justify-center px-4 bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-center text-center space-y-3 ">
          <h1 className="text-4xl font-bold">Register your Packers & Movers</h1>
          <p className="text-2xl text-muted-foreground">with</p>
          <h1 className="text-4xl font-bold " style={{ fontFamily: 'Arial, sans-serif' }}>Shiftyng</h1>
          <Button
            onClick={() => navigate("/login")}
            className="text-lg px-6 py-3 w-80 h-16 "
          >
            Login to Become a Partner
          </Button>
        </div>
      </div>

      {/* Why Shiftyng Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Shiftyng?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We connect you with verified, trusted packers and movers to make
              your relocation stress-free and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Verified Movers
              </h4>
              <p className="text-gray-600">
                All our partner movers are verified and background checked for
                your safety.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                On-Time Delivery
              </h4>
              <p className="text-gray-600">
                We ensure your belongings reach the destination on time, every
                time.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Support
              </h4>
              <p className="text-gray-600">
                Our customer support team is available round the clock to assist
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border">
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 text-gray-400 transition-transform",
                      openFaqIndex === index && "rotate-90"
                    )}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Shiftyng</h4>
              <p className="text-gray-400">
                Making relocation simple and stress-free for everyone.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Local Moving</li>
                <li>Domestic Moving</li>
                <li>Office Relocation</li>
                <li>International Moving</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Track Your Move</li>
                <li>Insurance Claims</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shiftyng. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>

  );
};

export default Index;
