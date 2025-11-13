import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 smooth-transition hover:opacity-80">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              SenseLink
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-muted-foreground hover:text-primary smooth-transition"
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="text-sm font-medium text-muted-foreground hover:text-primary smooth-transition"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
