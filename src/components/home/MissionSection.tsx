import { Shield, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MissionSection = () => {
  const navigate = useNavigate();
  
  const missions = [
    {
      icon: Shield,
      title: "No Middlemen",
      description: "Direct connection to government schemes without any intermediaries demanding bribes.",
      bgColor: "bg-success/10",
      iconColor: "text-success",
      borderColor: "border-success/20",
    },
    {
      icon: TrendingUp,
      title: "Transparent Payments",
      description: "Know exactly when and how much money you will receive from each scheme.",
      bgColor: "bg-info/10",
      iconColor: "text-info",
      borderColor: "border-info/20",
    },
    {
      icon: AlertTriangle,
      title: "Report Corruption",
      description: "Safely report officials who demand bribes with complete protection of your identity.",
      bgColor: "bg-warning/10",
      iconColor: "text-warning",
      borderColor: "border-warning/20",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Anti-Corruption Revolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Eliminating corruption by providing direct access to government schemes and 
            transparent payment tracking for every Indian farmer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <Card key={index} className={`group text-center border-2 ${mission.borderColor} hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm`}>
              <CardContent className="pt-10 pb-10">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${mission.bgColor} mb-8 group-hover:scale-110 transition-transform duration-300 border-2 ${mission.borderColor}`}>
                  <mission.icon className={`h-10 w-10 ${mission.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">{mission.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{mission.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Ready to experience corruption-free farming?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="font-semibold"
              onClick={() => navigate('/signup')}
            >
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;