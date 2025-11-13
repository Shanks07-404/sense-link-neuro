import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Weight, Ruler, Droplet } from "lucide-react";

interface VitalsCardProps {
  weight: string;
  height: string;
  bp: string;
  o2: string;
  heartRate: string;
}

export const VitalsCard = ({ weight, height, bp, o2, heartRate }: VitalsCardProps) => {
  return (
    <Card className="card-shadow smooth-transition hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <Activity className="w-5 h-5 text-accent-foreground" />
          </div>
          Vital Signs
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
            <Weight className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Weight</p>
              <p className="font-semibold text-foreground">{weight}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
            <Ruler className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Height</p>
              <p className="font-semibold text-foreground">{height}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
            <Droplet className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">BP</p>
              <p className="font-semibold text-foreground">{bp}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
            <Activity className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">O₂ Sat</p>
              <p className="font-semibold text-foreground">{o2}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
            <Heart className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Heart Rate</p>
              <p className="font-semibold text-foreground">{heartRate}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
