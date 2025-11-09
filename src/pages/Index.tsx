import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, Scale, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <header className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
              <Scale className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Faraid Calculator</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Kira pembahagian harta pusaka mengikut hukum Faraid Islam dengan mudah dan tepat
          </p>
          <Link to="/calculator">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
              <Calculator className="mr-2 h-5 w-5" />
              Mula Kira Sekarang
            </Button>
          </Link>
        </div>
      </header>

      {/* What is Faraid Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Apa itu Faraid?</h2>
            </div>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-4">
                <strong className="text-primary">Faraid</strong> adalah sistem pembahagian harta pusaka dalam Islam yang telah
                ditetapkan oleh Allah SWT dalam Al-Quran dan dihuraikan lagi melalui hadis Nabi Muhammad SAW.
              </p>
              <p className="mb-4">
                Sistem ini memastikan setiap waris yang berhak menerima bahagian mereka mengikut kadar yang telah
                ditetapkan oleh syarak. Faraid merupakan salah satu daripada ilmu yang wajib dipelajari kerana ia
                berkaitan dengan hak dan tanggungjawab umat Islam.
              </p>
              <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r-lg mt-6">
                <p className="text-sm italic text-muted-foreground">
                  "Allah mensyariatkan (mewajibkan) kepadamu tentang (pembahagian warisan untuk) anak-anakmu, (iaitu)
                  bahagian seorang anak lelaki sama dengan bahagian dua orang anak perempuan."
                  <span className="block mt-2 font-semibold text-primary">— Surah An-Nisa, Ayat 11</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Ciri-ciri Utama</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 shadow-elegant hover:shadow-gold transition-all duration-300">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Pengiraan Automatik</h3>
            <p className="text-muted-foreground">
              Sistem mengira pembahagian harta secara automatik mengikut hukum syarak dengan tepat dan pantas.
            </p>
          </Card>

          <Card className="p-6 shadow-elegant hover:shadow-gold transition-all duration-300">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Carta Waris Dinamik</h3>
            <p className="text-muted-foreground">
              Visualisasi carta keluarga yang berubah secara automatik berdasarkan waris yang dipilih.
            </p>
          </Card>

          <Card className="p-6 shadow-elegant hover:shadow-gold transition-all duration-300">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
              <Scale className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Hierarki 3 Peringkat</h3>
            <p className="text-muted-foreground">
              Sistem memaparkan Waris Utama, Waris Kedua, dan Waris Ganti mengikut keutamaan syarak.
            </p>
          </Card>
        </div>
      </section>

      {/* Inheritance Hierarchy Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Hierarki Waris</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-primary/5 border-primary/20 shadow-elegant">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Waris Utama</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ibu</li>
                <li>• Bapa</li>
                <li>• Isteri / Suami</li>
                <li>• Anak Lelaki</li>
                <li>• Anak Perempuan</li>
              </ul>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20 shadow-elegant">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Waris Kedua</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Saudara Lelaki/Perempuan</li>
                <li>• Anak Saudara Lelaki</li>
                <li>• Bapa Saudara</li>
                <li>• Sepupu Lelaki</li>
                <li className="text-xs italic">* Jika tiada waris lelaki dalam Waris Utama</li>
              </ul>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20 shadow-elegant">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Waris Ganti</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Datuk / Nenek</li>
                <li>• Cucu Lelaki / Perempuan</li>
                <li>• Cicit Lelaki / Perempuan</li>
                <li className="text-xs italic">* Jika tiada waris lelaki dalam Waris Kedua</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="p-12 shadow-elegant bg-gradient-hero">
          <h2 className="text-3xl font-bold text-foreground mb-4">Mulakan Pengiraan Anda</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gunakan kalkulator Faraid kami untuk mendapatkan pengiraan yang tepat dan terperinci bagi pembahagian
            harta pusaka.
          </p>
          <Link to="/calculator">
            <Button size="lg" className="bg-gradient-primary shadow-elegant">
              <Calculator className="mr-2 h-5 w-5" />
              Pergi ke Kalkulator
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Faraid Calculator. Dibuat untuk memudahkan pengiraan harta pusaka Islam.</p>
          <p className="mt-2 text-xs">
            Sila rujuk kepada pihak berkuasa agama yang sah untuk pengesahan rasmi.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
