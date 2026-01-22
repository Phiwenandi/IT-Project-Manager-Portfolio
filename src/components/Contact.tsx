import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-3 text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's Work Together
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm looking to take on roles where I can continue managing projects, contribute to process improvement, and help drive digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:Phiwenandi6@gmail.com"
              className="group p-6 rounded-xl bg-gradient-subtle border border-border hover:shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Email</h4>
              <p className="text-sm text-muted-foreground break-all">Phiwenandi6@gmail.com</p>
            </a>
            
            <a 
              href="tel:+27726015134"
              className="group p-6 rounded-xl bg-gradient-subtle border border-border hover:shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Phone</h4>
              <p className="text-sm text-muted-foreground">+27 72 601 5134</p>
            </a>
            
            <div className="group p-6 rounded-xl bg-gradient-subtle border border-border hover:shadow-soft transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Location</h4>
              <p className="text-sm text-muted-foreground">Johannesburg, South Africa</p>
            </div>
          </div>
          
          <div className="flex justify-center pt-8">
            <a href="/files/Aphiwe Ntlamba_ IT Project Manager Main" download>
            
            <Button 
            size="lg"
            className="bg-gradient-warm hover:opacity-90 transition-opacity shadow-soft gap-2">
              <Download className="w-5 h-5" />
              Download CV
              </Button>
              </a>
              </div>
          
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2025 Aphiwe Ntlamba. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
