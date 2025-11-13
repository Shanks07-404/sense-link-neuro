import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PatientSidebar } from "@/components/PatientSidebar";
import { PatientCard } from "@/components/PatientCard";
import { VitalsCard } from "@/components/VitalsCard";
import { PrescriptionCard } from "@/components/PrescriptionCard";

const dummyPatients = [
  { id: "0", name: "Vrushank Tipnis" },
  { id: "1", name: "Riya Mehta" },
  { id: "2", name: "Aarav Shah" },
  { id: "3", name: "Sara Ali" },
  { id: "4", name: "Vikram Singh" },
  { id: "5", name: "Priya Patel" },
];

const patientData = {
  "0": { name: "Vrushank Tipnis", age: 28, gender: "Male", lastVisit: "2025-01-13" },
  "1": { name: "Riya Mehta", age: 62, gender: "Female", lastVisit: "2025-01-10" },
  "2": { name: "Aarav Shah", age: 58, gender: "Male", lastVisit: "2025-01-09" },
  "3": { name: "Sara Ali", age: 65, gender: "Female", lastVisit: "2025-01-08" },
  "4": { name: "Vikram Singh", age: 71, gender: "Male", lastVisit: "2025-01-07" },
  "5": { name: "Priya Patel", age: 54, gender: "Female", lastVisit: "2025-01-06" },
};

const vitalsData = {
  "0": { weight: "72 kg", height: "178 cm", bp: "118/76", o2: "98%", heartRate: "68 bpm" },
  "1": { weight: "65 kg", height: "162 cm", bp: "120/80", o2: "98%", heartRate: "72 bpm" },
  "2": { weight: "78 kg", height: "175 cm", bp: "118/75", o2: "97%", heartRate: "68 bpm" },
  "3": { weight: "70 kg", height: "158 cm", bp: "125/82", o2: "96%", heartRate: "75 bpm" },
  "4": { weight: "82 kg", height: "178 cm", bp: "130/85", o2: "95%", heartRate: "78 bpm" },
  "5": { weight: "58 kg", height: "165 cm", bp: "115/70", o2: "99%", heartRate: "70 bpm" },
};

const Dashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState<string | null>("0");
  const navigate = useNavigate();

  const currentPatient = selectedPatient ? patientData[selectedPatient as keyof typeof patientData] : null;
  const currentVitals = selectedPatient ? vitalsData[selectedPatient as keyof typeof vitalsData] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 flex">
        <PatientSidebar
          patients={dummyPatients}
          selectedPatient={selectedPatient}
          onSelectPatient={setSelectedPatient}
        />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Patient Dashboard</h1>
                <p className="text-muted-foreground">
                  Monitor patient health and perform AI-powered analysis
                </p>
              </div>
              <Button
                onClick={() => navigate("/analysis")}
                size="lg"
                className="gap-2"
              >
                <Settings className="w-5 h-5" />
                Analyze for Parkinson's
              </Button>
            </div>

            {currentPatient && currentVitals ? (
              <div className="space-y-6">
                <PatientCard {...currentPatient} />
                <VitalsCard {...currentVitals} />
                <PrescriptionCard />
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Select a patient to view details</p>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
