import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Database, 
  Zap, 
  Users, 
  FileText, 
  Activity,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              MedplumCare
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Documentation</Button>
            <Button variant="ghost">Support</Button>
            <Button className="bg-gradient-primary shadow-glow">
              Access EMR
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            FHIR-Compliant EMR Solution
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Modern Healthcare
            <br />
            Data Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your healthcare operations with Medplum's comprehensive EMR solution. 
            FHIR-compliant, secure, and built for modern healthcare providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary shadow-glow text-lg px-8 py-6">
              Start with Medplum
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Medplum?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for developers and healthcare professionals who demand flexibility, security, and compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>HIPAA Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  End-to-end encryption and comprehensive audit trails ensure your data meets all healthcare compliance requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <Database className="h-12 w-12 text-accent mb-4" />
                <CardTitle>FHIR R4 Native</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built on FHIR R4 standards for seamless interoperability with existing healthcare systems and workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Developer Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive APIs, SDKs, and documentation make integration simple for development teams.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Multi-tenant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Support multiple organizations, practices, and user roles with granular access controls.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Clinical Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Streamlined patient management, appointment scheduling, and clinical documentation workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <Activity className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced reporting and analytics to improve patient outcomes and operational efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground">
                This landing page is configured to connect with your Medplum EMR instance.
              </p>
            </div>
            
            <Card className="bg-gradient-card border-0 shadow-large">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Quick Setup</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1" />
                        <div>
                          <p className="font-medium">Configure Environment</p>
                          <p className="text-sm text-muted-foreground">Set your Medplum server URL and API credentials</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1" />
                        <div>
                          <p className="font-medium">Deploy to Hostinger</p>
                          <p className="text-sm text-muted-foreground">Upload built files to your hosting provider</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1" />
                        <div>
                          <p className="font-medium">Customize & Extend</p>
                          <p className="text-sm text-muted-foreground">Add your branding and custom workflows</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Environment Variables</h4>
                    <code className="text-sm bg-background/80 p-3 rounded block">
                      VITE_MEDPLUM_BASE_URL=https://api.medplum.com/<br/>
                      VITE_MEDPLUM_CLIENT_ID=your_client_id
                    </code>
                    <p className="text-sm text-muted-foreground mt-3">
                      Configure these in your hosting environment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">MedplumCare</span>
            </div>
            <p className="text-muted-foreground">
              Powered by Medplum - The modern healthcare data platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;