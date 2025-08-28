import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, Github, FileDown } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarme. Te responderé pronto.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "brayan.sanchez.dev@gmail.com",
      href: "mailto:brayan.sanchez.dev@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Teléfono",
      value: "+57 3241931262",
      href: "https://wa.link/e18549"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Ubicación",
      value: "Colombia 🇨🇴",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/brayan-sanchez-dev/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/imbryans",
      color: "hover:text-gray-800"
    },
    {
      icon: <FileDown className="w-5 h-5" />,
      label: "Descargar CV",
      href: "/files/Desarrollador_de_Software_Brayan.pdf",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hablemos de tu <span className="gradient-text">Proyecto</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estoy disponible para nuevas oportunidades y proyectos emocionantes. 
              ¡No dudes en contactarme!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            {/* <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envíame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="¿De qué quieres hablar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-lg"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </Card>
            */}

            {/* Contact Details */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          key={index}
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-medium hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contactame en
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-3 rounded-lg bg-background/50 hover:bg-background transition-all duration-200 group ${link.color}`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      {link.icon}
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
          </div>
          <Card className="p-8 mt-6 bg-gradient-to-r from-success/5 to-accent/5 border border-success/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <h3 className="text-xl font-bold text-foreground">
                Disponible para proyectos
              </h3>
            </div>
            <p className="text-muted-foreground">
              Actualmente estoy disponible para nuevas oportunidades laborales 
              y proyectos freelance. ¡No dudes en contactarme!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;