import { Users } from "lucide-react";
import type { HeirType } from "@/types/faraid";

interface FamilyTreeProps {
  selectedHeirs: HeirType[];
  deceasedName: string;
}

export const FamilyTree = ({ selectedHeirs, deceasedName }: FamilyTreeProps) => {
  const heirLabels: Record<HeirType, string> = {
    ibu: "Ibu",
    bapa: "Bapa",
    isteri: "Isteri",
    suami: "Suami",
    anakLelaki: "Anak Lelaki",
    anakPerempuan: "Anak Perempuan",
    saudaraSIBL: "Saudara SIBL",
    saudaraSBL: "Saudara SBL",
    saudaraSIL: "Saudara SIL",
    saudaraSIBP: "Saudara SIBP",
    saudaraSBP: "Saudara SBP",
    saudaraSIP: "Saudara SIP",
    datuk: "Datuk",
    nenekBapa: "Nenek (Bapa)",
    nenekIbu: "Nenek (Ibu)",
    cucuLelaki: "Cucu Lelaki",
    cucuPerempuan: "Cucu Perempuan",
  };

  if (selectedHeirs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <Users className="h-16 w-16 mb-4 opacity-50" />
        <p className="text-center">Pilih waris untuk memaparkan carta keluarga</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Deceased Person */}
      <div className="flex justify-center">
        <div className="bg-muted border-2 border-primary rounded-lg p-4 shadow-md">
          <p className="text-xs text-muted-foreground mb-1 text-center">Si Mati</p>
          <p className="font-bold text-primary text-center">{deceasedName}</p>
        </div>
      </div>

      {/* Connection Line */}
      <div className="flex justify-center">
        <div className="w-0.5 h-8 bg-primary/30"></div>
      </div>

      {/* Heirs Section */}
      <div className="space-y-8">
        {/* Primary Heirs */}
        {selectedHeirs.some((h) =>
          ["ibu", "bapa", "isteri", "suami", "anakLelaki", "anakPerempuan"].includes(h)
        ) && (
          <div>
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                Waris Utama
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {selectedHeirs
                .filter((h) => ["ibu", "bapa", "isteri", "suami", "anakLelaki", "anakPerempuan"].includes(h))
                .map((heir) => (
                  <div
                    key={heir}
                    className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-center hover:bg-primary/20 transition-colors"
                  >
                    <p className="text-sm font-medium text-primary">{heirLabels[heir]}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Secondary Heirs */}
        {selectedHeirs.some((h) =>
          [
            "saudaraSIBL",
            "saudaraSBL",
            "saudaraSIL",
            "saudaraSIBP",
            "saudaraSBP",
            "saudaraSIP",
          ].includes(h)
        ) && (
          <div>
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                Waris Kedua
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {selectedHeirs
                .filter((h) =>
                  [
                    "saudaraSIBL",
                    "saudaraSBL",
                    "saudaraSIL",
                    "saudaraSIBP",
                    "saudaraSBP",
                    "saudaraSIP",
                  ].includes(h)
                )
                .map((heir) => (
                  <div
                    key={heir}
                    className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-center hover:bg-accent/20 transition-colors"
                  >
                    <p className="text-sm font-medium text-accent-foreground">{heirLabels[heir]}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Replacement Heirs */}
        {selectedHeirs.some((h) =>
          ["datuk", "nenekBapa", "nenekIbu", "cucuLelaki", "cucuPerempuan"].includes(h)
        ) && (
          <div>
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                Waris Ganti
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {selectedHeirs
                .filter((h) => ["datuk", "nenekBapa", "nenekIbu", "cucuLelaki", "cucuPerempuan"].includes(h))
                .map((heir) => (
                  <div
                    key={heir}
                    className="bg-secondary/50 border border-secondary rounded-lg p-3 text-center hover:bg-secondary/70 transition-colors"
                  >
                    <p className="text-sm font-medium text-secondary-foreground">{heirLabels[heir]}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
