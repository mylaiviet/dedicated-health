import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { authenticateWithMedplum } from "@/lib/medplum";
import { Activity, Loader2 } from "lucide-react";

interface MedplumLoginProps {
  onLoginSuccess?: () => void;
}

const MedplumLogin = ({ onLoginSuccess }: MedplumLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Validation Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await authenticateWithMedplum(email, password);
      
      if (result.success) {
        toast({
          title: "Login Successful",
          description: "You have been successfully authenticated with Medplum",
        });
        
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        toast({
          title: "Login Failed",
          description: result.error || "Authentication failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Connection Error",
        description: "Unable to connect to Medplum server",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50 p-4">
      <Card className="w-full max-w-md bg-gradient-card border-0 shadow-large">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto">
            <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Access Medplum EMR
          </CardTitle>
          <p className="text-muted-foreground">
            Sign in to your healthcare management platform
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="bg-background/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="bg-background/50"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary shadow-glow"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                'Sign In to EMR'
              )}
            </Button>
          </form>
          
          <div className="mt-6 pt-4 border-t text-center">
            <p className="text-sm text-muted-foreground">
              Need help? Contact your system administrator
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedplumLogin;