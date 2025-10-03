import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold gradient-text">404</h1>
        <p className="mb-8 text-2xl text-muted-foreground">Oops! Page not found</p>
        <Button asChild size="lg" className="rounded-full gradient-primary">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
