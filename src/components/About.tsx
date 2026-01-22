import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              Solving Problems Through Technology
            </h3>
          </div>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Aphiwe is a seasoned IT Project Manager and Business Analyst with over five years of demonstrated expertise in leading complex systems implementation, software deployment, and enterprise integration initiatives across diverse industries.
              Adept at leveraging both Agile and Waterfall methodologies, I excel in translating business requirements into functional solutions, managing cross-functional teams, and ensuring projects are delivered on time, within scope, and on budget. 
              With a strong technical foundation in web development, API integration, and cloud platforms, she consistently drives successful digital transformations while maintaining rigorous governance, risk management, and stakeholder alignment.
            </p>
            <p>
              Currently serving as an IT Project Manager and Key Account Manager at Trillion Cart Investments, I combine strategic account leadership with hands-on project delivery, managing everything from e-commerce platforms and mobile applications to LMS implementations and fiber infrastructure rollouts. Skilled in end-to-end project lifecycle management, she is proficient in tools such as Jira, Asana, and MS Project, and excels in stakeholder communication, KPI reporting, and team coordination. With additional experience in web development, social media campaign management, and team supervision, she brings a versatile and results-driven approach to every engagement, ensuring measurable outcomes and sustained client satisfaction 
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 rounded-xl bg-gradient-subtle border border-border">
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-muted-foreground mt-2">Major Projects Delivered</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-subtle border border-border">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-muted-foreground mt-2">Industries Served</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-subtle border border-border">
              <p className="text-3xl font-bold text-primary">R3M+</p>
              <p className="text-muted-foreground mt-2">Budget Managed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
