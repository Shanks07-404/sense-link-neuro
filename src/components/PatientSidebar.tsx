import { useState } from "react";
import { Users, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-64 bg-card border-r border-border p-4 h-full">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
        <Users className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-lg">Patients List</h2>
      </div>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="space-y-2">
        {filteredPatients.map((patient) => (
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
