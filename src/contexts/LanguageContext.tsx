import { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'hi';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.home': 'Home',
    'header.schemes': 'Schemes',
    'header.benefits': 'My Benefits',
    'header.mandiPrices': 'Mandi Prices',
    'header.reportCorruption': 'Report Corruption',
    'header.profile': 'Profile',
    'header.login': 'Login',
    'header.register': 'Register',
    'header.logout': 'Logout',
    'header.welcome': 'Welcome',
    
    // Benefits
    'benefits.title': 'My Benefits Dashboard',
    'benefits.paymentCalendar': 'Payment Calendar',
    'benefits.viewDetails': 'View Details',
    'benefits.received': 'Received',
    'benefits.upcoming': 'Upcoming',
    
    // Receipt
    'receipt.title': 'Payment Receipt',
    'receipt.transactionId': 'Transaction ID',
    'receipt.scheme': 'Scheme',
    'receipt.amount': 'Amount',
    'receipt.date': 'Date',
    'receipt.status': 'Status',
    'receipt.close': 'Close'
  },
  hi: {
    // Header
    'header.home': 'होम',
    'header.schemes': 'योजनाएं',
    'header.benefits': 'मेरे लाभ',
    'header.mandiPrices': 'मंडी भाव',
    'header.reportCorruption': 'भ्रष्टाचार की रिपोर्ट',
    'header.profile': 'प्रोफाइल',
    'header.login': 'लॉगिन',
    'header.register': 'पंजीकरण',
    'header.logout': 'लॉगआउट',
    'header.welcome': 'स्वागत',
    
    // Benefits
    'benefits.title': 'मेरा लाभ डैशबोर्ड',
    'benefits.paymentCalendar': 'भुगतान कैलेंडर',
    'benefits.viewDetails': 'विवरण देखें',
    'benefits.received': 'प्राप्त',
    'benefits.upcoming': 'आगामी',
    
    // Receipt
    'receipt.title': 'भुगतान रसीद',
    'receipt.transactionId': 'लेनदेन आईडी',
    'receipt.scheme': 'योजना',
    'receipt.amount': 'राशि',
    'receipt.date': 'दिनांक',
    'receipt.status': 'स्थिति',
    'receipt.close': 'बंद करें'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
