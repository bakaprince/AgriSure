import { useState } from "react";
import { MapPin, TrendingUp, TrendingDown, Truck, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/layout/Header";

const MandiPrices = () => {
  const { user } = useAuth();
  const userDistrict = user?.district || "Jaipur";
  const userState = user?.state || "Rajasthan";
  
  const [selectedLocation, setSelectedLocation] = useState(userDistrict.toLowerCase());
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const [quantity, setQuantity] = useState("50");

  // Generate personalized price data based on user's location
  const generatePriceData = () => {
    const basePrice = 2400;
    const userLocation = `${userDistrict}, ${userState?.toUpperCase().slice(0,2) || "RJ"}`;
    
    return [
      {
        location: userLocation,
        type: "Your Local Market",
        isBest: false,
        isLocal: true,
        price: `₹${basePrice}`,
        change: "+₹25 (1.1%)",
        changeType: "up",
        distance: "0 km",
        transportCost: "₹0",
        netProfit: `₹${basePrice * parseInt(quantity)}`,
        profitChange: "Local market",
      },
      {
        location: "Indore, MP",
        type: "Recommended",
        isBest: true,
        price: "₹2,450",
        change: "+₹45 (2.2%)",
        changeType: "up",
        distance: "285 km",
        transportCost: "₹3,500",
        netProfit: "₹119,000",
        profitChange: "+₹5,000",
      },
      {
        location: "Ludhiana, PB", 
        type: "Regional market",
        price: "₹2,380",
        change: "-₹15 (0.6%)",
        changeType: "down",
        distance: "420 km",
        transportCost: "₹5,200",
        netProfit: "₹113,800",
        profitChange: "-₹1,200",
      },
      {
        location: "Delhi, DL",
        type: "Metro market",
        price: "₹2,520",
        change: "+₹65 (2.6%)",
        changeType: "up", 
        distance: "280 km",
        transportCost: "₹4,200",
        netProfit: "₹121,800",
        profitChange: "+₹7,800",
      }
    ];
  };

  const priceData = generatePriceData();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Mandi Prices</h1>
          <p className="text-muted-foreground">
            Live market prices personalized for your location: {userDistrict}, {userState}
          </p>
        </div>

        {/* Price Calculator */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Price Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={userDistrict.toLowerCase()}>Your Area ({userDistrict})</SelectItem>
                  <SelectItem value="indore">Indore, MP</SelectItem>
                  <SelectItem value="ludhiana">Ludhiana, PB</SelectItem>
                  <SelectItem value="delhi">Delhi, DL</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger>
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="sugarcane">Sugarcane</SelectItem>
                </SelectContent>
              </Select>
              
              <Input
                type="number"
                placeholder="Quantity (quintals)"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            
            <Button 
              className="flex items-center gap-2"
              onClick={() => alert('AI recommendation feature coming soon!')}
            >
              <Calculator className="h-4 w-4" />
              Get AI Recommendation
            </Button>
          </CardContent>
        </Card>

        {/* Price Comparison */}
        <div className="grid gap-6">
          <h2 className="text-2xl font-semibold">Today's Prices - {selectedCrop.charAt(0).toUpperCase() + selectedCrop.slice(1)}</h2>
          
          {priceData.map((item, index) => (
            <Card key={index} className={`${item.isBest ? 'ring-2 ring-primary' : ''} ${item.isLocal ? 'bg-blue-50 border-blue-200' : ''}`}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold">{item.location}</span>
                      </div>
                      <Badge variant={item.isBest ? "default" : item.isLocal ? "secondary" : "outline"}>
                        {item.type}
                      </Badge>
                      {item.isBest && <Badge className="bg-success">Best Price</Badge>}
                      {item.isLocal && <Badge className="bg-blue-500">Your Area</Badge>}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Price/Quintal</p>
                        <p className="font-bold text-lg">{item.price}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">24h Change</p>
                        <p className={`font-medium flex items-center gap-1 ${
                          item.changeType === 'up' ? 'text-success' : 'text-destructive'
                        }`}>
                          {item.changeType === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                          {item.change}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Distance</p>
                        <p className="font-medium">{item.distance}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Transport Cost</p>
                        <p className="font-medium">{item.transportCost}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Net Profit ({quantity}q)</p>
                      <p className="text-xl font-bold text-primary">{item.netProfit}</p>
                      <p className="text-sm text-success">{item.profitChange}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {item.isBest ? (
                        <div className="space-y-2">
                          <Button 
                            size="sm" 
                            className="w-full"
                            onClick={() => alert('Transport booking feature coming soon!')}
                          >
                            <Truck className="h-3 w-3 mr-1" />
                            Book Transport
                          </Button>
                        </div>
                      ) : item.isLocal ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                          onClick={() => alert('Local market directions coming soon!')}
                        >
                          Get Directions
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => alert('Transport booking feature coming soon!')}
                        >
                          <Truck className="h-3 w-3 mr-1" />
                          Book Transport
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transport Services */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Transport Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">AgriTransport Partner</h4>
                  <p className="text-sm text-muted-foreground">Reliable transport for your produce</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-success">₹8-12/km</p>
                  <p className="text-sm text-muted-foreground">Competitive rates</p>
                </div>
              </div>
              <div className="mt-3">
                <Button 
                  size="sm" 
                  className="bg-success hover:bg-success/90"
                  onClick={() => alert('Transport quote feature coming soon!')}
                >
                  Get Transport Quote
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default MandiPrices;
