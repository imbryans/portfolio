import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Github } from "lucide-react";

const ExperienceSection = () => {
  const projects = [
    {
      title: "App Móvil para Gestión Ambiental",
      company: "Proyecto Mobile Multiplataforma",
      period: "2024 - 2025",
      location: "Colombia",
      description: "Desarrollo de aplicación móvil para la gestión ambiental, permitiendo a los usuarios monitorear y reportar problemas ambientales en su área. Integración con plataforma web y almacenamiento local con Isar.",
      technologies: ["Flutter", "Isar", "Riverpod", "Clean Architecture", "JWT", "Oracle"],
      highlights: [
        "Arquitectura escalable con patrones SOLID",
        "Creación de formularios",
        "Sincronización de información con sistema de gestión empresarial"
      ],
      type: "Mobile"
    },
    {
      title: "Sistema de Pasarela de pagos para comercio electrónico",
      company: "Proyecto Web Full Stack",
      period: "2023 - 2024",
      location: "Colombia",
      description: "Desarrollo de sistema de pasarela de pagos para comercio electrónico, permitiendo a los usuarios realizar pagos seguros y eficientes por diferentes pasarelas de pago. Integración con backend y base de datos Oracle.",
      technologies: ["VueJS", "Java", "Spring Boot", "Oracle", "REST APIs", "PL/SQL", "Oracle"],
      highlights: [
        "Arquitectura escalable con patrones SOLID",
        "Optimización de consultas SQL mejorando rendimiento 40%",
        "Integración con pasarelas de pago locales (Wompi, ePayco, etc.)"
      ],
      type: "Full Stack"
    },
    {
      title: "App móvil para recargas de gas",
      company: "Proyecto Backend - Mobile",
      period: "2023 - 2024",
      location: "Colombia",
      description: "Desarrollo de aplicación móvil para recargas de gas, permitiendo a los usuarios cargar su medidor por medio de lecturas y escrituras de tarjetas NFC. Gestión del historial de recargas y diferentes productos de la compañía. Creación e integración con backend y base de datos Oracle.",
      technologies: ["React Native", "NFC", "Java", "Spring Boot", "Oracle", "PL/SQL"],
      highlights: [
        "Lectura y escritura NFC",
        "Gestión de diferentes productos usuario-compañía",
        "Integración con portal de pagos (PSE/ACH)"
      ],
      type: "Full Stack"
    },
    {
      title: "App Android para gestión de suspensiones y lecturas de medidor",
      company: "Proyecto Mobile Nativo",
      period: "2023-2024",
      location: "Colombia",
      description: "Desarrollo de aplicación Android nativa usando Java para las lecturas de medidores y generación de suspensiones del servicio. Implementación de funcionalidades offline (captura de datos), sincronización de datos y arquitectura MVVM.",
      technologies: ["Android", "Java", "MVVM", "Room", "Unirest", "Oracle", "PL/SQL"],
      highlights: [
        "Funcionalidad offline completa",
        "Sincronización automática de datos y fotos",
        "Arquitectura MVVM"
      ],
      type: "Android"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Backend":
        return "bg-accent/10 text-accent border-accent/20";
      case "Mobile":
        return "bg-success/10 text-success border-success/20";
      case "Database":
        return "bg-primary/10 text-primary border-primary/20";
      case "Android":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      case "Full Stack":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Experiencia & <span className="gradient-text">Proyectos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proyectos destacados que demuestran mi experiencia en desarrollo backend, móvil y gestión de bases de datos
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card">
                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <Badge className={`${getTypeColor(project.type)} mb-3`}>
                        {project.type}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-accent font-medium mb-2">
                        {project.company}
                      </p>
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {project.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {project.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Logros destacados:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-accent mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-muted/50 text-foreground/70 hover:bg-muted"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          {/*<div className="mt-16 text-center">
            <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-accent/5 to-success/5 border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Estoy disponible para nuevos desafíos y oportunidades. 
                Conectemos y hablemos sobre cómo puedo ayudar a hacer realidad tu proyecto.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hablemos
              </Button>
            </Card>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;