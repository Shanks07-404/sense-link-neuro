import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileText } from "lucide-react";

export const PrescriptionCard = () => {
  return (
    <Card className="card-shadow smooth-transition hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <FileText className="w-5 h-5 text-accent-foreground" />
          </div>
          Prescription Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Enter prescription notes and medications..."
          className="min-h-[120px] resize-none"
        />
      </CardContent>
    </Card>
  );
};
