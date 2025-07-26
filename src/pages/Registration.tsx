import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import { ArrowLeft, Building2, User, Calendar, MapPin } from "lucide-react";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    ownerManagerName: "",
    registrationDate: "",
    city: "",
    state: "",
    location: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // Basic validation
    const requiredFields = Object.values(formData);
    if (requiredFields.every(field => field.trim())) {
      navigate("/document-upload");
    }
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-6">
        <div className="w-full max-w-2xl space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-3xl font-bold text-foreground">Complete Your Registration</h2>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-medium flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="h-12 text-lg rounded-xl"
                />
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-lg font-medium flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  placeholder="Enter your company name"
                  className="h-12 text-lg rounded-xl"
                />
              </div>

              {/* Owner/Manager Name */}
              <div className="space-y-2">
                <Label htmlFor="ownerManagerName" className="text-lg font-medium flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Owner/Manager Name
                </Label>
                <Input
                  id="ownerManagerName"
                  value={formData.ownerManagerName}
                  onChange={(e) => handleInputChange("ownerManagerName", e.target.value)}
                  placeholder="Enter owner or manager name"
                  className="h-12 text-lg rounded-xl"
                />
              </div>

              {/* Registration Date */}
              <div className="space-y-2">
                <Label htmlFor="registrationDate" className="text-lg font-medium flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Registration Date
                </Label>
                <Input
                  id="registrationDate"
                  type="date"
                  value={formData.registrationDate}
                  onChange={(e) => handleInputChange("registrationDate", e.target.value)}
                  className="h-12 text-lg rounded-xl"
                />
              </div>

              {/* City and State */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-lg font-medium flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    City
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Enter city"
                    className="h-12 text-lg rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-lg font-medium">State</Label>
                  <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                    <SelectTrigger className="h-12 text-lg rounded-xl">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-lg font-medium flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Complete Address
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="Enter complete address with pincode"
                  className="h-12 text-lg rounded-xl"
                />
              </div>

              <Button 
                onClick={handleNext}
                variant="black"
                size="full"
                className="text-lg font-semibold mt-8"
                disabled={!Object.values(formData).every(field => field.trim())}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;