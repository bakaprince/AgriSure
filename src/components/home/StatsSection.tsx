import { Users, Award, ShieldCheck, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Farmers Benefited",
      description: "Active users receiving benefits",
    },
    {
      icon: Award,
      value: "₹125 Cr+",
      label: "Benefits Distributed",
      description: "Total amount distributed transparently",
    },
    {
      icon: ShieldCheck,
      value: "Zero",
      label: "Corruption Cases",
      description: "In our transparent system",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Success Rate",
      description: "Scheme applications approved",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Agriculture Through Transparency</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Real impact, real numbers, real change in the lives of Indian farmers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-colors">
                  <stat.icon className="h-8 w-8 text-green-200" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-green-200">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-primary-foreground/80">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;