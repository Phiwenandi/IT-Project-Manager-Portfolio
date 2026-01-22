import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle -z-10" />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">IT Project Manager</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-warm bg-clip-text text-transparent">
              Aphiwe Ntlamba
            </h1>
          </div>
          
          <p className="text-xl text-foreground/80 leading-relaxed">
            Driving digital transformation through strategic project leadership and cross-functional collaboration across multiple industries.
          </p>
          
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Johannesburg, South Africa</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:Phiwenandi6@gmail.com" className="hover:text-primary transition-colors">
                Phiwenandi6@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>+27 72 601 5134</span>
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button 
              size="lg"
              className="bg-gradient-warm hover:opacity-90 transition-opacity shadow-soft"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-accent/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-medium aspect-square">
            <img 
              src={profileImage}
              alt="Aphiwe Ntlamba"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-card border-2 border-primary rounded-2xl p-6 shadow-medium">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">6+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
