import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface Patient {
  id: string;
  name: string;
}

interface PatientSidebarProps {
  patients: Patient[];
  selectedPatient: string | null;
  onSelectPatient: (id: string) => void;
}

export const PatientSidebar = ({ patients, selectedPatient, onSelectPatient }: PatientSidebarProps) => {
  return (
    <div className="w-64 bg-card border-r border-border p-4 h-full">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
        <Users className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-lg">Patients List</h2>
      </div>
      <div className="space-y-2">
        {patients.map((patient) => (
          <button
            key={patient.id}
            onClick={() => onSelectPatient(patient.id)}
            className={cn(
              "w-full text-left px-4 py-3 rounded-lg smooth-transition",
              "hover:bg-accent hover:text-accent-foreground",
              selectedPatient === patient.id
                ? "bg-primary text-primary-foreground font-medium"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {patient.name}
          </button>
        ))}
      </div>
    </div>
  );
};
