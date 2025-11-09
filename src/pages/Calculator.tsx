import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calculator as CalcIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { FamilyTree } from "@/components/FamilyTree";
import { calculateFaraid } from "@/utils/faraidCalculation";
import type { HeirType, CalculationResult } from "@/types/faraid";

const Calculator = () => {
  const [deceasedName, setDeceasedName] = useState("");
  const [totalEstate, setTotalEstate] = useState("");
  const [selectedHeirs, setSelectedHeirs] = useState<HeirType[]>([]);
  const [results, setResults] = useState<CalculationResult | null>(null);

  const primaryHeirs: { id: HeirType; label: string }[] = [
    { id: "ibu", label: "Ibu (Mother)" },
    { id: "bapa", label: "Bapa (Father)" },
    { id: "isteri", label: "Isteri (Wife)" },
    { id: "suami", label: "Suami (Husband)" },
    { id: "anakLelaki", label: "Anak Lelaki (Son)" },
    { id: "anakPerempuan", label: "Anak Perempuan (Daughter)" },
  ];

  const secondaryHeirs: { id: HeirType; label: string }[] = [
    { id: "saudaraSIBL", label: "Saudara Seibu Sebapa Lelaki" },
    { id: "saudaraSBL", label: "Saudara Sebapa Lelaki" },
    { id: "saudaraSIL", label: "Saudara Seibu Lelaki" },
    { id: "saudaraSIBP", label: "Saudara Seibu Sebapa Perempuan" },
    { id: "saudaraSBP", label: "Saudara Sebapa Perempuan" },
    { id: "saudaraSIP", label: "Saudara Seibu Perempuan" },
  ];

  const replacementHeirs: { id: HeirType; label: string }[] = [
    { id: "datuk", label: "Datuk (Grandfather)" },
    { id: "nenekBapa", label: "Nenek dari Bapa" },
    { id: "nenekIbu", label: "Nenek dari Ibu" },
    { id: "cucuLelaki", label: "Cucu Lelaki" },
    { id: "cucuPerempuan", label: "Cucu Perempuan" },
  ];

  const toggleHeir = (heir: HeirType) => {
    setSelectedHeirs((prev) =>
      prev.includes(heir) ? prev.filter((h) => h !== heir) : [...prev, heir]
    );
  };

  const handleCalculate = () => {
    if (!totalEstate || selectedHeirs.length === 0) {
      return;
    }
    const result = calculateFaraid(selectedHeirs, parseFloat(totalEstate));
    setResults(result);
  };

  const handleReset = () => {
    setDeceasedName("");
    setTotalEstate("");
    setSelectedHeirs([]);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Kembali</span>
          </Link>
          <h1 className="text-2xl font-bold text-primary">Faraid Calculator</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="p-6 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CalcIcon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Maklumat Si Mati</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="deceased">Nama Si Mati</Label>
                  <Input
                    id="deceased"
                    placeholder="Masukkan nama..."
                    value={deceasedName}
                    onChange={(e) => setDeceasedName(e.target.value)}
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="estate">Jumlah Harta (RM)</Label>
                  <Input
                    id="estate"
                    type="number"
                    placeholder="0.00"
                    value={totalEstate}
                    onChange={(e) => setTotalEstate(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-elegant">
              <h2 className="text-xl font-semibold text-foreground mb-4">Pilih Waris</h2>
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-6">
                  {/* Primary Heirs */}
                  <div>
                    <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                        1
                      </span>
                      Waris Utama
                    </h3>
                    <div className="space-y-2 pl-10">
                      {primaryHeirs.map((heir) => (
                        <div key={heir.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={heir.id}
                            checked={selectedHeirs.includes(heir.id)}
                            onCheckedChange={() => toggleHeir(heir.id)}
                          />
                          <label
                            htmlFor={heir.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {heir.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Heirs */}
                  <div>
                    <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                        2
                      </span>
                      Waris Kedua
                    </h3>
                    <div className="space-y-2 pl-10">
                      {secondaryHeirs.map((heir) => (
                        <div key={heir.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={heir.id}
                            checked={selectedHeirs.includes(heir.id)}
                            onCheckedChange={() => toggleHeir(heir.id)}
                          />
                          <label
                            htmlFor={heir.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {heir.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Replacement Heirs */}
                  <div>
                    <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                        3
                      </span>
                      Waris Ganti
                    </h3>
                    <div className="space-y-2 pl-10">
                      {replacementHeirs.map((heir) => (
                        <div key={heir.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={heir.id}
                            checked={selectedHeirs.includes(heir.id)}
                            onCheckedChange={() => toggleHeir(heir.id)}
                          />
                          <label
                            htmlFor={heir.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {heir.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                <Button onClick={handleCalculate} className="flex-1 bg-gradient-primary shadow-elegant">
                  Kira Faraid
                </Button>
                <Button onClick={handleReset} variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <Card className="p-6 shadow-elegant">
              <h2 className="text-xl font-semibold text-foreground mb-4">Carta Waris</h2>
              <FamilyTree selectedHeirs={selectedHeirs} deceasedName={deceasedName || "Si Mati"} />
            </Card>

            {results && (
              <Card className="p-6 shadow-elegant">
                <h2 className="text-xl font-semibold text-foreground mb-4">Keputusan Pengiraan</h2>
                <div className="space-y-3">
                  {results.shares.map((share, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border"
                    >
                      <div>
                        <p className="font-medium text-foreground">{share.name}</p>
                        <p className="text-sm text-muted-foreground">{share.relationship}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">
                          RM {share.amount.toFixed(2)}
                        </p>
                        <p className="text-sm text-accent font-semibold">{share.percentage}%</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span className="text-foreground">Jumlah</span>
                      <span className="text-primary">RM {results.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calculator;
