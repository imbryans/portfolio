import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, BookOpen, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "2+ Años de Experiencia",
      description: "Desarrollo backend y móvil con tecnologías modernas"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Inglés Certificado",
      description: "Comunicación efectiva en entornos internacionales"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Aprendizaje Continuo",
      description: "Siempre actualizándome con las últimas tecnologías"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Calidad de Código",
      description: "Enfoque en clean code y buenas prácticas"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-success/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-success/10"></div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-success flex items-center justify-center text-2xl font-bold text-white">
                    BSO
                  </div>
                  <div className="text-lg font-semibold text-foreground">Full Stack Software Developer</div>
                  <div className="text-sm text-muted-foreground">Colombia 🇨🇴</div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Soy un <strong>Ingeniero de Software</strong> con más de 2 años de experiencia especializado en desarrollo backend con <strong>Java y Spring Boot</strong>, desarrollo mobile con <strong>React Native y Flutter</strong>, y desarrollo web con <strong>React y VueJS</strong>.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Mi enfoque está en el uso de <strong>tecnologías modernas</strong> para escribir código limpio, seguir buenas prácticas de desarrollo y crear soluciones escalables.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Poseo un <strong>dominio certificado del inglés</strong> y una pasión constante por el aprendizaje, siempre manteniéndome actualizado con las últimas tecnologías y mejores prácticas de la industria.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                  Java
                </Badge>
                <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20">
                  Spring Boot
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20">
                  Flutter
                </Badge>
                <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20">
                  VueJS
                </Badge>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;