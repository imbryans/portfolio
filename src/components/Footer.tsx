import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-8">
            <div className="text-2xl font-bold gradient-text mb-4">
              Brayan Sanchez Ortiz
            </div>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Software Engineer • Colombia 🇨🇴
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <a href="#home" className="hover:text-accent transition-colors">Inicio</a>
              <a href="#about" className="hover:text-accent transition-colors">Sobre mí</a>
              <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
              <a href="#experience" className="hover:text-accent transition-colors">Experiencia</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contacto</a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-primary-foreground/20 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <div className="flex items-center space-x-1 mb-4 md:mb-0">
              <span>Desarrollado con</span>
              <Heart className="w-4 h-4 text-accent" fill="currentColor" />
              <span>y</span>
              <Code className="w-4 h-4 text-accent" />
              <span>en Colombia</span>
            </div>
            
            <div>
              <span>© {currentYear} Brayan Sanchez Ortiz. Todos los derechos reservados.</span>
            </div>
          </div>

          {/* Tech Stack Note */}
          <div className="text-center mt-6 pt-6 border-t border-primary-foreground/20">
            <p className="text-xs text-primary-foreground/50">
              Construido con React, TypeScript, Tailwind CSS y ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;