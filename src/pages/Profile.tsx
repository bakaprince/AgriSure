import Header from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { User, MapPin, Phone, Mail, Calendar, Tractor, Wheat, Award } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const farmerData = {
    name: user?.name || "Demo User",
    farmerId: user?.farmerId || "DEMO/2024/001234",
    phone: user?.phone || "91XXXXXXXX",
    email: user?.email || "demo.user@email.com",
    village: user?.village || "Demo Village, Demo State, India",
    landSize: user?.landSize || "5 acres",
    crops: ["Wheat", "Rice", "Cotton", "Sugarcane"],
    registrationDate: "January 15, 2024"
  };

  const recentBenefits = [
    { scheme: "PM-KISAN", amount: "₹6,000", date: "March 2024", status: "Received" },
    { scheme: "Crop Insurance", amount: "₹25,000", date: "February 2024", status: "Processing" },
    { scheme: "Fertilizer Subsidy", amount: "₹8,500", date: "January 2024", status: "Received" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-primary">Farmer Profile</h1>
            <p className="text-muted-foreground">View your personal information and benefits</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Information */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Name</label>
                    <p className="text-lg font-semibold">{farmerData.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Farmer ID</label>
                    <p className="text-lg font-mono">{farmerData.farmerId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </label>
                    <p className="text-lg">{farmerData.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      Email
                    </label>
                    <p className="text-lg">{farmerData.email}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Address
                  </label>
                  <p className="text-lg">{farmerData.village}</p>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    variant="outline"
                    onClick={() => alert('Profile editing feature coming soon!')}
                  >
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Farm Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tractor className="h-5 w-5" />
                  Farm Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Land Size</label>
                  <p className="text-2xl font-bold text-primary">{farmerData.landSize}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                    <Wheat className="h-4 w-4" />
                    Main Crops
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {farmerData.crops.map((crop, index) => (
                      <Badge key={index} variant="secondary">{crop}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Registration Date
                  </label>
                  <p className="text-lg">{farmerData.registrationDate}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Recent Benefits
              </CardTitle>
              <CardDescription>
                Recent scheme benefits you have received
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{benefit.scheme}</p>
                      <p className="text-sm text-muted-foreground">{benefit.date}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-bold text-lg text-primary">{benefit.amount}</p>
                      <Badge variant={benefit.status === "Received" ? "default" : "secondary"}>
                        {benefit.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button onClick={() => navigate('/benefits')}>View All Benefits</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;