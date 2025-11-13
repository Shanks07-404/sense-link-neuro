import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnalysisCard } from "@/components/AnalysisCard";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Hand, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";

const Analysis = () => {
  const [voiceResult, setVoiceResult] = useState<string | null>(null);
  const [handResult, setHandResult] = useState<string | null>(null);

  const getFinalRisk = () => {
    if (!voiceResult && !handResult) return null;
    
    const hasWarning = voiceResult?.includes("⚠️") || handResult?.includes("⚠️");
    const hasDanger = voiceResult?.includes("❗") || handResult?.includes("❗");
    
    if (hasDanger) return { level: "high", text: "Tremor Detected", icon: AlertCircle };
    if (hasWarning) return { level: "medium", text: "Mild Irregularity", icon: AlertTriangle };
    return { level: "low", text: "Low Risk", icon: CheckCircle };
  };

  const finalRisk = getFinalRisk();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Parkinson's Analysis</h1>
            <p className="text-muted-foreground">
              Upload voice and movement data for AI-powered early detection analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <AnalysisCard
              title="Voice Tremor Analysis"
              icon={<Mic className="w-6 h-6 text-primary" />}
              acceptedFiles=".wav,.mp3"
              analyzeButtonText="Analyze Voice"
              onAnalyze={async (file) => {
                // This would call your Flask backend: POST /analyse_voice
                console.log("Analyzing voice file:", file.name);
                // Simulated for demo
                setTimeout(() => {
                  const results = ["✅ Normal Speech", "⚠️ Mild Speech Irregularity", "❗ Tremor Detected"];
                  setVoiceResult(results[Math.floor(Math.random() * results.length)]);
                }, 1500);
              }}
            />

            <AnalysisCard
              title="Hand Tremor Analysis"
              icon={<Hand className="w-6 h-6 text-primary" />}
              acceptedFiles=".csv"
              analyzeButtonText="Analyze Movement"
              onAnalyze={async (file) => {
                // This would call your Flask backend: POST /process_vitals
                console.log("Analyzing movement file:", file.name);
                // Simulated for demo
                setTimeout(() => {
                  const results = ["✅ Normal Motion", "⚠️ Mild Irregularity", "❗ Tremor Pattern Detected"];
                  setHandResult(results[Math.floor(Math.random() * results.length)]);
                }, 1500);
              }}
            />
          </div>

          {finalRisk && (
            <Card className="card-shadow border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      finalRisk.level === "high"
                        ? "bg-destructive/10"
                        : finalRisk.level === "medium"
                        ? "bg-warning/10"
                        : "bg-success/10"
                    }`}
                  >
                    <finalRisk.icon
                      className={`w-8 h-8 ${
                        finalRisk.level === "high"
                          ? "text-destructive"
                          : finalRisk.level === "medium"
                          ? "text-warning"
                          : "text-success"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      Overall Assessment: {finalRisk.text}
                    </h3>
                    <p className="text-muted-foreground">
                      Analysis completed at {new Date().toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      ✓ Auto-saved to report log
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analysis;
