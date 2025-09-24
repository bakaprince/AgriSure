import { Shield, AlertTriangle, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/layout/Header";

const ReportCorruption = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Report Corruption Anonymously</h1>
          <p className="text-muted-foreground">
            Help eliminate corruption by reporting officials who demand bribes or create obstacles.
            <br />
            Your identity will be completely protected.
          </p>
        </div>

        {/* Protection Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Alert className="border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive font-medium">
              <strong>Report Corruption</strong>
              <br />
              Report any official who demands bribes or creates obstacles in accessing government schemes. Your identity will be protected.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-info/20 bg-info/5">
            <Shield className="h-4 w-4 text-info" />
            <AlertDescription className="text-info font-medium">
              <strong>Whistleblower Protection</strong>
              <br />
              Your report is confidential and protected under the Whistleblower Protection Act. No retaliation is allowed.
            </AlertDescription>
          </Alert>
        </div>

        {/* Report Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Corruption Report Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Type of Corruption *</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bribery">Bribery/Demands for Money</SelectItem>
                  <SelectItem value="delays">Deliberate Delays</SelectItem>
                  <SelectItem value="fake-documents">Fake Document Demands</SelectItem>
                  <SelectItem value="scheme-denial">Scheme Benefit Denial</SelectItem>
                  <SelectItem value="middleman">Middleman Involvement</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Government Department</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agriculture">Agriculture Department</SelectItem>
                  <SelectItem value="revenue">Revenue Department</SelectItem>
                  <SelectItem value="rural-development">Rural Development</SelectItem>
                  <SelectItem value="district-collector">District Collector Office</SelectItem>
                  <SelectItem value="block-office">Block Office</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">State</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="punjab">Punjab</SelectItem>
                    <SelectItem value="haryana">Haryana</SelectItem>
                    <SelectItem value="up">Uttar Pradesh</SelectItem>
                    <SelectItem value="mp">Madhya Pradesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">District/City</label>
                <Input placeholder="Enter district or city" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Official's Name (if known)</label>
              <Input placeholder="Name of the corrupt official" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Official's Designation</label>
              <Input placeholder="e.g., Block Development Officer, Patwari, etc." />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Amount Demanded</label>
              <Input placeholder="₹ Amount in rupees" type="number" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Detailed Description *</label>
              <Textarea 
                placeholder="Describe the incident in detail - what happened, when, where, what was demanded, etc. The more details you provide, the better we can investigate."
                rows={6}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Date of Incident</label>
              <Input type="date" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Supporting Evidence (Optional)</label>
              <Input type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.mp3,.mp4" />
              <p className="text-xs text-muted-foreground mt-1">
                Upload photos, documents, audio recordings, or other evidence (Max 10 files, 5MB each)
              </p>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">How would you like us to contact you for follow-up? (Optional)</label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="anonymous" />
                  <label htmlFor="anonymous" className="text-sm">Keep completely anonymous - no follow-up needed</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="phone" />
                  <label htmlFor="phone" className="text-sm">Phone call (we will not reveal your identity)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="email" />
                  <label htmlFor="email" className="text-sm">Email updates (we will not reveal your identity)</label>
                </div>
              </div>
            </div>

            <Alert className="bg-warning/10 border-warning/20">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <AlertDescription className="text-warning">
                <strong>Important:</strong> Providing false information is a punishable offense. Please ensure all information provided is accurate. Your report will be forwarded to appropriate authorities for investigation. We will follow up on your complaint without revealing your identity.
              </AlertDescription>
            </Alert>

            <div className="flex items-start space-x-2">
              <Checkbox id="confirm" />
              <label htmlFor="confirm" className="text-sm">
                I confirm that the information provided is accurate and I understand this report will be investigated by appropriate authorities. *
              </label>
            </div>

            <div className="flex gap-4">
              <Button 
                className="flex-1 bg-destructive hover:bg-destructive/90"
                onClick={() => alert('Report submitted successfully! Your identity is protected.')}
              >
                Submit Report Anonymously
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => alert('Draft saved successfully!')}
              >
                Save Draft
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-info" />
              Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-medium text-info">Anti-Corruption Helpline:</div>
                <div className="text-lg font-semibold">1800-11-0011 (Toll Free)</div>
              </div>
              
              <div className="text-center">
                <div className="font-medium text-info">WhatsApp Support:</div>
                <div className="text-lg font-semibold">+91-9999-CORRUPT</div>
              </div>
              
              <div className="text-center">
                <div className="font-medium text-info">Email Support:</div>
                <div className="text-lg font-semibold">report@agrisure.gov.in</div>
              </div>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 inline mr-1" />
              Available 24/7 for emergency corruption cases
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ReportCorruption;