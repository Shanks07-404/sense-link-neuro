import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

interface PatientCardProps {
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
}

export const PatientCard = ({ name, age, gender, lastVisit }: PatientCardProps) => {
  return (
    <Card className="card-shadow smooth-transition hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <User className="w-5 h-5 text-accent-foreground" />
          </div>
          Patient Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="font-semibold text-foreground">{name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Age</p>
            <p className="font-semibold text-foreground">{age} years</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Gender</p>
            <p className="font-semibold text-foreground">{gender}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Last Visit</p>
            <p className="font-semibold text-foreground">{lastVisit}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
