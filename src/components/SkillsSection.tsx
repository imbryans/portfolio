import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend",
      color: "bg-accent/10 text-accent border-accent/20",
      skills: [
        { name: "Java", level: "Avanzado", icon: "☕" },
        { name: "Spring Boot", level: "Avanzado", icon: "🚀" },
        { name: "Clean Architecture", level: "Intermedio", icon: "🏗️" },
        { name: "SOAP APIs", level: "Avanzado", icon: "🔌" },
        { name: "APIs REST", level: "Avanzado", icon: "🔗" },
      ]
    },
    {
      title: "Bases de Datos",
      color: "bg-success/10 text-success border-success/20",
      skills: [
        { name: "Oracle", level: "Avanzado", icon: "🛢" },
        { name: "SQLite", level: "Intermedio", icon: "🗃️" },
        { name: "PostgreSQL", level: "Básico", icon: "🛢️" },
        { name: "SQL Server", level: "Básico", icon: "🗄️" },
      ]
    },
    {
      title: "Frontend & Mobile",
      color: "bg-accent/10 text-accent border-accent/20",
      skills: [
        { name: "React", level: "Avanzado", icon: "⚛️" },
        { name: "React Native", level: "Avanzado", icon: "📱" },
        { name: "Flutter", level: "Avanzado", icon: "🌀" },
        { name: "Vue.js", level: "Intermedio", icon: "💚" },
      ]
    },
    {
      title: "Android",
      color: "bg-success/10 text-success border-success/20",
      skills: [
        { name: "Java", level: "Avanzado", icon: "🤖" },
        { name: "Dart", level: "Avanzado", icon: "🎯" },
        { name: "Kotlin", level: "Intermedio", icon: "🇰" },
      ]
    },
    {
      title: "Herramientas & Otros",
      color: "bg-primary/10 text-primary border-primary/20",
      skills: [
        { name: "Git", level: "Avanzado", icon: "🌿" },
        { name: "DevOps", level: "Intermedio", icon: "♾️" },
        { name: "Principios SOLID", level: "Avanzado", icon: "📐" },
        { name: "HTTP Handling", level: "Intermedio", icon: "🌐" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Avanzado":
        return "bg-success/20 text-success";
      case "Intermedio":
        return "bg-accent/20 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & <span className="gradient-text">Tecnologías</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conjunto de tecnologías y herramientas con las que desarrollo soluciones robustas y escalables
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="skill-card">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-success"></div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${getLevelColor(skill.level)} text-xs font-medium`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-accent/5 to-success/5 border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Siempre Aprendiendo
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mi pasión por la tecnología me impulsa a mantenerme actualizado con las últimas tendencias 
                y mejores prácticas en desarrollo de software. Siempre estoy explorando nuevas herramientas 
                y metodologías para mejorar la calidad de mis proyectos.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;