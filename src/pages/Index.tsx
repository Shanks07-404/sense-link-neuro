import { Button } from "@/components/ui/button";
import { Brain, Activity, Mic, Hand, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              <Brain className="w-4 h-4" />
              AI-Powered Early Detection Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                SenseLink
              </span>
              <br />
              <span className="text-foreground">
                AI-Driven Parkinson's Early Detection
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor tremors, movement irregularities, and speech patterns in real time with advanced AI analytics.
            </p>

            <Button
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="gap-2 text-lg px-8 py-6 smooth-transition"
            >
              <Brain className="w-5 h-5" />
              Open Dashboard
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-border card-shadow smooth-transition hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Activity className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient Dashboard</h3>
              <p className="text-muted-foreground">
                Comprehensive patient management with vital signs monitoring and medical history tracking.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border card-shadow smooth-transition hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Mic className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Voice Analysis</h3>
              <p className="text-muted-foreground">
                AI-powered speech pattern detection to identify early signs of neurological conditions.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border card-shadow smooth-transition hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Hand className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Movement Tracking</h3>
              <p className="text-muted-foreground">
                Real-time hand tremor detection and movement irregularity analysis with visual feedback.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
