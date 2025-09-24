import { useState } from "react";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/layout/Header";

const Schemes = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const schemes = [
    {
      id: 1,
      title: "PM-KISAN Samman Nidhi Yojana",
      category: "CENTRAL",
      status: "Eligible",
      statusColor: "success",
      description: "₹6,000 annual income support in 3 installments of ₹2,000 each",
      officialUrl: "https://pmkisan.gov.in/",
      eligibility: "Small and marginal farmers with cultivable land"
    },
    {
      id: 2,
      title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      category: "CENTRAL", 
      status: "Apply Now",
      statusColor: "warning",
      description: "Comprehensive crop insurance covering pre-sowing to post-harvest losses",
      officialUrl: "https://pmfby.gov.in/",
      eligibility: "All farmers including sharecroppers and tenant farmers"
    },
    {
      id: 3,
      title: "Soil Health Card Scheme",
      category: "CENTRAL",
      status: "Apply Now", 
      statusColor: "warning",
      description: "Free soil testing and nutrient-based fertilizer recommendations",
      officialUrl: "https://soilhealth.dac.gov.in/",
      eligibility: "All farmers with agricultural land"
    },
    {
      id: 4,
      title: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
      category: "CENTRAL",
      status: "Apply Now",
      statusColor: "warning", 
      description: "Per Drop More Crop - Micro irrigation and water conservation",
      officialUrl: "https://pmksy.gov.in/",
      eligibility: "Individual farmers, Self Help Groups, Cooperatives"
    },
    {
      id: 5,
      title: "National Agriculture Market (e-NAM)",
      category: "CENTRAL",
      status: "Register Now",
      statusColor: "info",
      description: "Online trading platform for agricultural commodities",
      officialUrl: "https://enam.gov.in/web/",
      eligibility: "Farmers, FPOs, Traders with valid documents"
    },
    {
      id: 6,
      title: "Kisan Credit Card (KCC)",
      category: "CENTRAL",
      status: "Apply Now",
      statusColor: "warning",
      description: "Credit facility for agriculture and allied activities",
      officialUrl: "https://www.india.gov.in/spotlight/kisan-credit-card-kcc-scheme",
      eligibility: "Farmers, tenant farmers, oral lessees, sharecroppers"
    },
    {
      id: 7,
      title: "PM Kisan Maandhan Yojana",
      category: "CENTRAL",
      status: "Apply Now",
      statusColor: "warning",
      description: "Pension scheme for small and marginal farmers",
      officialUrl: "https://maandhan.in/",
      eligibility: "Small and marginal farmers aged 18-40 years"
    },
    {
      id: 8,
      title: "National Beekeeping & Honey Mission (NBHM)",
      category: "CENTRAL",
      status: "Apply Now",
      statusColor: "warning",
      description: "Promotion of beekeeping for additional income",
      officialUrl: "https://nbhm.gov.in/",
      eligibility: "Individual farmers, Self Help Groups, NGOs"
    }
  ];

  const tabs = [
    { id: "all", label: "All (8)", count: 8 },
    { id: "eligible", label: "Eligible (1)", count: 1 },
    { id: "apply", label: "Can Apply (6)", count: 6 },
    { id: "register", label: "Registration (1)", count: 1 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Government Schemes</h1>
          <p className="text-muted-foreground">
            Comprehensive database of Central and State government agricultural schemes
          </p>
        </div>

        {/* Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Filter Schemes</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search schemes by name or description..." className="pl-10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select defaultValue="all-india">
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-india">All India</SelectItem>
                  <SelectItem value="rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all-types">
                <SelectTrigger>
                  <SelectValue placeholder="Scheme Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="income-support">Income Support</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all-crops">
                <SelectTrigger>
                  <SelectValue placeholder="Crop Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-crops">All Crops</SelectItem>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="any-amount">
                <SelectTrigger>
                  <SelectValue placeholder="Benefit Amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any-amount">Any Amount</SelectItem>
                  <SelectItem value="under-5000">Under ₹5,000</SelectItem>
                  <SelectItem value="above-5000">Above ₹5,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Status Tabs */}
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={selectedTab === tab.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTab(tab.id)}
                  className={selectedTab === tab.id ? "bg-primary" : ""}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Schemes List */}
        <div className="grid gap-6">
          {schemes.map((scheme) => (
            <Card key={scheme.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-info border-info">
                        {scheme.category}
                      </Badge>
                      <Badge 
                        variant={scheme.statusColor === "success" ? "default" : scheme.statusColor === "info" ? "secondary" : "secondary"}
                        className={
                          scheme.statusColor === "success" 
                            ? "bg-success text-success-foreground" 
                            : scheme.statusColor === "info"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-warning text-warning-foreground"
                        }
                      >
                        {scheme.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{scheme.title}</h3>
                    <p className="text-muted-foreground mb-2">{scheme.description}</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Eligibility:</strong> {scheme.eligibility}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button 
                      variant="outline"
                      onClick={() => window.open(scheme.officialUrl, '_blank')}
                    >
                      View Details
                    </Button>
                    {scheme.status !== "Eligible" && (
                      <Button 
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => window.open(scheme.officialUrl, '_blank')}
                      >
                        {scheme.status === "Register Now" ? "Register Now" : "Apply Now"}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Schemes;