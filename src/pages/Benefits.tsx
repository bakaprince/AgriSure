import { useState } from "react";
import { User, Calendar, Clock, CheckCircle, TrendingUp, Receipt, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";

const Benefits = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);
  
  const userProfile = {
    name: user?.name || "Demo User",
    location: user?.village || "Demo Village, Demo State",
    landSize: user?.landSize || "5 acres",
    aadhaar: "****-****-XXXX",
    status: "Verified",
  };

  const benefitSummary = {
    received: "₹18,500",
    expected: "₹32,000", 
    remaining: "₹13,500",
    receivedGrowth: "+23% from last year",
    nextPayment: "Dec 31, 2024",
    pendingPayments: 3,
  };

  const paymentCalendar = [
    {
      scheme: "PM-KISAN Installment 3",
      date: "31 December 2024",
      amount: "₹2,000",
      status: "upcoming",
      transactionId: null,
    },
    {
      scheme: "Soil Health Incentive",
      date: "15 November 2024", 
      amount: "₹1,500",
      status: "upcoming",
      transactionId: null,
    },
    {
      scheme: "PM-KISAN Installment 2",
      date: "15 August 2024",
      amount: "₹2,000", 
      status: "received",
      transactionId: "TXN240815PM001234",
    },
    {
      scheme: "PM-KISAN Installment 1",
      date: "15 April 2024",
      amount: "₹2,000",
      status: "received",
      transactionId: "TXN240415PM001235",
    },
  ];

  const handleViewDetails = (payment: any) => {
    setSelectedPayment(payment);
    setShowReceipt(true);
  };

  const schemes = [
    {
      title: "PM-KISAN Scheme",
      description: "₹6,000 annual income support in 3 installments",
      status: "Receiving Benefits",
      statusColor: "success",
      annualBenefit: "₹6,000",
      nextPayment: "₹2,000",
      paymentDate: "December 31, 2024",
    },
    {
      title: "Soil Health Card",
      description: "Free soil testing and ₹1,500 incentive", 
      status: "Approved",
      statusColor: "info",
      annualBenefit: "₹1,500",
      nextPayment: "",
      paymentDate: "",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Benefits Dashboard</h1>
          <p className="text-muted-foreground">
            Complete transparency of your government scheme benefits and payments
          </p>
        </div>

        {/* User Profile Card */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <User className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold">{userProfile.name}</h2>
                    <p className="text-muted-foreground">{userProfile.location} • {userProfile.landSize}</p>
                    <p className="text-sm text-muted-foreground">Aadhaar: {userProfile.aadhaar}</p>
                  </div>
                  <Badge className="bg-success text-success-foreground">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {userProfile.status}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-1">{benefitSummary.received}</div>
                <div className="text-sm text-muted-foreground mb-2">Received This Year</div>
                <div className="text-xs text-success flex items-center justify-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {benefitSummary.receivedGrowth}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-info mb-1">{benefitSummary.expected}</div>
                <div className="text-sm text-muted-foreground mb-2">Expected This Year</div>
                <div className="text-xs text-info flex items-center justify-center gap-1">
                  <Clock className="h-3 w-3" />
                  {benefitSummary.pendingPayments} payments pending
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-1">{benefitSummary.remaining}</div>
                <div className="text-sm text-muted-foreground mb-2">Remaining to Receive</div>
                <div className="text-xs text-warning flex items-center justify-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Next: {benefitSummary.nextPayment}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Annual Benefits Progress</CardTitle>
              <span className="text-sm text-muted-foreground">58% Complete</span>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={58} className="mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>₹18,500 received</span>
              <span>₹32,000 expected</span>
            </div>
          </CardContent>
        </Card>

        {/* Payment Calendar */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Payment Calendar
              </CardTitle>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <span>Received: ₹18,500</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-info"></div>
                  <span>Expected: ₹13,500</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentCalendar.map((payment, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      payment.status === 'received' 
                        ? 'bg-success text-success-foreground' 
                        : 'bg-info text-info-foreground'
                    }`}>
                      {payment.status === 'received' ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{payment.scheme}</div>
                      <div className="text-sm text-muted-foreground">{payment.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-lg font-semibold">{payment.amount}</div>
                      <Badge 
                        variant={payment.status === 'received' ? 'default' : 'secondary'}
                        className={
                          payment.status === 'received' 
                            ? 'bg-success text-success-foreground' 
                            : 'bg-info text-info-foreground'
                        }
                      >
                        {payment.status === 'received' ? t('benefits.received') : t('benefits.upcoming')}
                      </Badge>
                    </div>
                    {payment.status === 'received' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDetails(payment)}
                        className="flex items-center gap-1"
                      >
                        <Receipt className="h-3 w-3" />
                        {t('benefits.viewDetails')}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Schemes */}
        <Card>
          <CardHeader>
            <CardTitle>My Government Schemes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {schemes.map((scheme, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{scheme.title}</h3>
                        <p className="text-muted-foreground">{scheme.description}</p>
                      </div>
                      <Badge 
                        className={
                          scheme.statusColor === 'success' 
                            ? 'bg-success text-success-foreground' 
                            : 'bg-info text-info-foreground'
                        }
                      >
                        {scheme.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Annual Benefit:</div>
                        <div className="text-lg font-semibold text-success">{scheme.annualBenefit}</div>
                      </div>
                      {scheme.nextPayment && (
                        <>
                          <div>
                            <div className="text-sm text-muted-foreground">Next Payment:</div>
                            <div className="text-lg font-semibold text-info">{scheme.nextPayment}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Payment Date:</div>
                            <div className="text-sm font-medium text-info">{scheme.paymentDate}</div>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => alert('Benefit details feature coming soon!')}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Receipt Modal */}
      <Dialog open={showReceipt} onOpenChange={setShowReceipt}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              {t('receipt.title')}
            </DialogTitle>
          </DialogHeader>
          {selectedPayment && (
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{t('receipt.transactionId')}:</span>
                  <span className="font-mono text-sm">{selectedPayment.transactionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{t('receipt.scheme')}:</span>
                  <span className="text-sm font-medium">{selectedPayment.scheme}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{t('receipt.amount')}:</span>
                  <span className="text-lg font-bold text-primary">{selectedPayment.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{t('receipt.date')}:</span>
                  <span className="text-sm">{selectedPayment.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{t('receipt.status')}:</span>
                  <Badge className="bg-success text-success-foreground">
                    {t('benefits.received')}
                  </Badge>
                </div>
              </div>
              
              <div className="text-center text-xs text-muted-foreground">
                <p>Government of India</p>
                <p>Ministry of Agriculture & Farmers Welfare</p>
                <p>This is a computer generated receipt</p>
              </div>
              
              <Button 
                onClick={() => setShowReceipt(false)} 
                className="w-full"
              >
                {t('receipt.close')}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Benefits;