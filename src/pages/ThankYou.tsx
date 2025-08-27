import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-6">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Message Sent Successfully!
          </h1>
          
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out! I've received your message and will get back to you as soon as possible.
          </p>
          
          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full">
              <Link to="/#contact">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Send Another Message
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;