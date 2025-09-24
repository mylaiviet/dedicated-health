import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  UserCheck, 
  Activity,
  Heart,
  Shield,
  Stethoscope,
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  LogIn
} from "lucide-react";
import { Link } from "react-router-dom";
import doctorImage from "@/assets/doctor-kitchen-consultation.jpg";

const DedicatedHealthLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
              DH
            </div>
            <span className="text-xl font-bold text-foreground">DEDICATED HEALTH</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <a href="https://accounts.charmtracker.com/signin" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="mr-3">
                <LogIn className="mr-2 h-4 w-4" />
                Patient Portal
              </Button>
            </a>
            <a href="https://outlook.office.com/bookwithme/user/0be1f2c1fa2b4c2dae14f69885cc536c@liberatehc.com?anonymous&ismsaljsauthenabled&ep=plink" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90">
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Expert Care,<br />
                <span className="block">Tailored to You</span>
              </h1>
              <p className="text-xl mb-4 text-white/90">
                Care coordinated with clarity and compassion.
              </p>
              <p className="text-lg mb-8 text-white/80 leading-relaxed">
                Experience concierge primary care that puts you first. No more rushed visits, 
                endless waits, or confusing communications between specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://outlook.office.com/bookwithme/user/0be1f2c1fa2b4c2dae14f69885cc536c@liberatehc.com?anonymous&ismsaljsauthenabled&ep=plink" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Consultation
                  </Button>
                </a>
                <a href="tel:415-419-1219">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white text-lg px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: (415) 419-1219
                  </Button>
                </a>
              </div>
            </div>
            <div className="lg:order-last">
              <img
                src={doctorImage}
                alt="Dr. providing personalized care to a couple in their home kitchen"
                className="rounded-2xl shadow-large w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Banner */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground">24/7 Access</h3>
            </div>
            <div className="flex flex-col items-center">
              <UserCheck className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground">Personal Physician</h3>
            </div>
            <div className="flex flex-col items-center">
              <Activity className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground">Coordinated Care</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Redefining Primary Care</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Dedicated Health, we believe healthcare should be personal, accessible, and comprehensive. 
              Our concierge model ensures you receive the time, attention, and expert care you deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Personalized Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Every treatment plan is tailored to your unique health needs and lifestyle preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">24/7 Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Direct access to your physician whenever you need care, not just during office hours.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Concierge Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Dedicated time and attention from your healthcare team, never rushed appointments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader className="text-center">
                <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Comprehensive Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  From preventive medicine to complex health management, we coordinate your complete care.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Philosophy</h3>
            <div className="bg-muted/30 rounded-lg p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Healthcare is not one-size-fits-all. We take the time to understand your unique health story, 
                goals, and concerns. By limiting our patient panel, we can provide the personalized attention 
                and comprehensive care that leads to better health outcomes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience the difference of having a healthcare partner who truly knows you and is dedicated to your wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Comprehensive Care Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From preventive care to complex medical management, we provide the full spectrum of primary care 
              services with the personalized attention you deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Comprehensive Physical Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Thorough annual physicals with preventive screening and health optimization planning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Chronic Disease Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert management of diabetes, hypertension, heart disease, and other chronic conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Wellness & Prevention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personalized wellness plans, nutrition counseling, and lifestyle medicine approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Medication Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Careful medication review, optimization, and monitoring for safety and effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Care Coordination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamless coordination with specialists, hospitals, and other healthcare providers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Virtual Consultations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Convenient telehealth visits for routine check-ins and urgent care needs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-large">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Same-Day & Urgent Care</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When urgent health concerns arise, you'll have direct access to your physician. 
                  No waiting weeks for an appointment or visiting urgent care centers where they don't know your health history.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Begin Your Healthcare Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to experience personalized, comprehensive primary care? Contact us today to schedule 
              your consultation and learn more about our concierge services.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="bg-gradient-card border-0 shadow-medium text-center">
                <CardHeader>
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">(415) 419-1219</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for patients</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-medium text-center">
                <CardHeader>
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary mb-2">care@dedicatedhealth.com</p>
                  <p className="text-sm text-muted-foreground">Secure patient portal available</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-medium text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <p>123 Medical Plaza</p>
                    <p>Suite 200</p>
                    <p>Your City, ST 12345</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-medium text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Monday - Friday</strong></p>
                    <p>8:00 AM - 6:00 PM</p>
                    <p><strong>Saturday</strong></p>
                    <p>9:00 AM - 2:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <div className="bg-primary/10 rounded-lg p-6 inline-block">
                <p className="text-lg font-semibold text-primary">
                  <strong>24/7 Access:</strong> Patients have direct access to their physician for urgent needs outside regular hours.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Schedule Your Consultation</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Learn how our concierge primary care model can transform your healthcare experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://outlook.office.com/bookwithme/user/0be1f2c1fa2b4c2dae14f69885cc536c@liberatehc.com?anonymous&ismsaljsauthenabled&ep=plink" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Button>
                </a>
                <a href="tel:415-419-1219">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Call to Learn More
                  </Button>
                </a>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-lg font-semibold text-primary mb-2">New Patient Special:</p>
                <p className="text-muted-foreground">
                  Complimentary initial consultation to discuss your healthcare needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-white text-primary rounded-lg flex items-center justify-center font-bold">
              DH
            </div>
            <span className="text-xl font-bold">DEDICATED HEALTH</span>
          </div>
          <p className="text-white/80">
            Personalized healthcare that puts you first
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DedicatedHealthLanding;