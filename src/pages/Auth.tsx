import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <Link 
          to="/" 
          className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <div className="bg-white/95 backdrop-blur-sm shadow-large border-0 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Patient Portal</h2>
          <p className="text-muted-foreground mb-6">
            The patient portal is now available at:
          </p>
          <a 
            href="https://hipaa-portal.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary underline text-lg"
          >
            https://hipaa-portal.vercel.app/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;