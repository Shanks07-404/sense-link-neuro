import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AnalysisCardProps {
  title: string;
  icon: React.ReactNode;
  analyzeButtonText: string;
  onAnalyze?: () => Promise<void>;
}

export const AnalysisCard = ({
  title,
  icon,
  analyzeButtonText,
  onAnalyze,
}: AnalysisCardProps) => {
  const [result, setResult] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      if (onAnalyze) {
        await onAnalyze();
      }
      // Simulated result for demo
      const mockResults = [
        "✅ Normal - No irregularities detected",
        "⚠️ Mild Irregularity - Further monitoring recommended",
        "❗ Tremor Detected - Consultation advised",
      ];
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      
      toast({
        title: "Analysis Complete",
        description: "Results are ready for review",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "An error occurred during analysis",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Card className="card-shadow smooth-transition hover:shadow-lg h-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
            {icon}
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="gap-2 w-full"
            size="lg"
          >
            <Upload className="w-4 h-4" />
            {isAnalyzing ? "Analyzing..." : analyzeButtonText}
          </Button>
        </div>

        {result && (
          <div className="p-4 rounded-lg bg-accent border border-border">
            <p className="text-sm font-medium text-foreground mb-2">Result:</p>
            <p className="text-lg font-semibold text-primary">{result}</p>
          </div>
        )}

        <div className="aspect-video bg-accent/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            {result ? "Graph visualization placeholder" : "Click analyze to see visualization"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
