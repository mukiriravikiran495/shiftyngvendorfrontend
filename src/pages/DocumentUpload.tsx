import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { ArrowLeft, Upload, Eye, Check, FileText, CreditCard, Building } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Document {
  type: string;
  name: string;
  icon: React.ReactNode;
  file: File | null;
  preview: string | null;
}

const DocumentUpload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [documents, setDocuments] = useState<Document[]>([
    {
      type: "aadhar",
      name: "Aadhar Card",
      icon: <CreditCard className="h-6 w-6" />,
      file: null,
      preview: null
    },
    {
      type: "pan",
      name: "PAN Card",
      icon: <FileText className="h-6 w-6" />,
      file: null,
      preview: null
    },
    {
      type: "license",
      name: "Business License",
      icon: <Building className="h-6 w-6" />,
      file: null,
      preview: null
    }
  ]);

  const handleFileUpload = (type: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setDocuments(prev =>
        prev.map(doc =>
          doc.type === type
            ? { ...doc, file, preview: e.target?.result as string }
            : doc
        )
      );
    };
    reader.readAsDataURL(file);
  };

  const handlePreview = (preview: string | null, name: string) => {
    if (preview) {
      // Open preview in new window/modal
      const newWindow = window.open();
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head><title>${name} Preview</title></head>
            <body style="margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#f5f5f5;">
              <img src="${preview}" style="max-width:90%;max-height:90%;object-fit:contain;" />
            </body>
          </html>
        `);
      }
    }
  };

  const handleSubmit = () => {
    const allUploaded = documents.every(doc => doc.file);
    if (allUploaded) {
      toast({
        title: "Documents uploaded successfully!",
        description: "Your documents are being verified.",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Please upload all documents",
        description: "All three documents are required to proceed.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-6">
        <div className="w-full max-w-4xl space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-3xl font-bold text-foreground">Upload Documents</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <Card key={doc.type} className="border-2 hover:border-primary transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {doc.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{doc.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-muted rounded-xl p-6 text-center">
                    {doc.file ? (
                      <div className="space-y-3">
                        <div className="flex justify-center">
                          <Check className="h-8 w-8 text-success" />
                        </div>
                        <p className="text-sm font-medium text-success">Uploaded Successfully</p>
                        <p className="text-xs text-muted-foreground truncate">{doc.file.name}</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto" />
                        <div>
                          <p className="text-sm font-medium">Upload {doc.name}</p>
                          <p className="text-xs text-muted-foreground">PNG, JPG, PDF up to 5MB</p>
                        </div>
                      </div>
                    )}
                    
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          if (file.size > 5 * 1024 * 1024) {
                            toast({
                              title: "File too large",
                              description: "Please upload a file smaller than 5MB",
                              variant: "destructive",
                            });
                            return;
                          }
                          handleFileUpload(doc.type, file);
                        }
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>

                  {doc.preview && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePreview(doc.preview, doc.name)}
                      className="w-full"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className="bg-muted/50 rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Please ensure all documents are clear and readable. Your documents will be verified within 24-48 hours. 
                You'll receive a notification once the verification is complete.
              </p>
            </div>

            <Button 
              onClick={handleSubmit}
              variant="black"
              size="lg"
              className="text-lg font-semibold px-12"
              disabled={!documents.every(doc => doc.file)}
            >
              Submit Documents
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;