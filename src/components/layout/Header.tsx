import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import agrisureLogo from "@/assets/agrisure-logo-final.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Schemes", path: "/schemes" },
    { name: "My Benefits", path: "/benefits" },
    { name: "Mandi Prices", path: "/mandi-prices" },
    { name: "Report Corruption", path: "/report-corruption" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={agrisureLogo} 
            alt="AgriSure Logo" 
            className="h-12 w-auto max-w-[140px]"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive(item.path)
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-1"
          >
            <Languages className="h-4 w-4" />
            {language === 'en' ? 'हिं' : 'EN'}
          </Button>
          {isAuthenticated ? (
            <>
              <span className="text-sm text-muted-foreground">{t('header.welcome')}, {user?.name}</span>
              <Button 
                variant="outline"
                onClick={handleLogout}
              >
                {t('header.logout')}
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="outline"
                onClick={() => navigate('/login')}
              >
                {t('header.login')}
              </Button>
              <Button
                onClick={() => navigate('/signup')}
              >
                {t('header.register')}
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;