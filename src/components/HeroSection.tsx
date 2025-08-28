import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const handleDownloadCV = () => {
    window.open("/files/Desarrollador_de_Software_Brayan.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-pattern relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-success rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent to-success flex items-center justify-center text-4xl font-bold text-white">
            BSO
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Brayan Sanchez Ortiz
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-medium text-primary-foreground/90 mb-4">
            Full Stack Software Developer
          </h2>

          {/* Location */}
          <p className="text-lg text-primary-foreground/80 mb-8">
            📍 Colombia 🇨🇴
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Desarrollador de Software con 2+ años de experiencia especializado en desarrollo 
            backend con Java y Spring Boot, y desarrollo móvil con React Native y Flutter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg group"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Descargar CV
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10 px-8 py-3 text-lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" size={20} />
              Contactar
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-primary-foreground" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-primary-foreground" />
            </a>
            <a
              href="mailto:brayan@example.com"
              className="p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;