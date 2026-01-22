import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Project Management",
    skills: [
      "Agile & Waterfall",
      "Hybrid Delivery",
      "Project Planning",
      "Resource Allocation",
      "Risk Management",
      "Change Control",
      "Budget Tracking",
      "UAT & Testing",
      "Sprint Planning",
      "Systems Implementation"
    ]
  },
  {
    title: "Technical & Tools",
    skills: [
      "Jira",
      "Asana",
      "MS Project",
      "SmartSheets",
      "Microsoft 365",
      "Figma",
      "HTML/CSS/JavaScript",
      "API Integration",
      "Git & GitHub",
      "Backend Development"
    ]
  },
  {
    title: "Business Analysis",
    skills: [
      "Requirements Gathering",
      "Process Mapping",
      "Documentation",
      "Functional Specifications",
      "Business Modeling",
      "Stakeholder Workshops",
      "Solution Analysis"
    ]
  },
  {
    title: "Leadership & Communication",
    skills: [
      "Team Coordination",
      "Cross-Functional Collaboration",
      "Stakeholder Engagement",
      "Training & Onboarding",
      "Client Communication",
      "Conflict Resolution",
      "KPI Reporting",
      "Dashboard Creation"
    ]
  }
];

const certifications = [
  { name: "Full Stack Development", issuer: "FNB App Academy", year: "2025" },
  { name: "Introducing Generative AI with AWS", issuer: "Udacity", year: "2025" },
  { name: "Agile Project Management + Agile Scrum + Jira", issuer: "Udemy", year: "2025" },
  { name: "Oracle Certified Associate, Java SE 8 Programmer", issuer: "Oracle", year: "2018" },
  { name: "ICT Professional Competence Diploma", issuer: "Accredited Institution", year: "2016" },
  { name: "IT System Development Certificate (NQF Level 4 & 5)", issuer: "Accredited Institution", year: "2015" }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="space-y-3 text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              Skills & Certifications
            </h3>
          </div>
          
          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-2xl font-semibold text-foreground border-l-4 border-primary pl-4">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="px-4 py-2 text-sm hover:bg-accent/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6 pt-8"
          >
            <h4 className="text-2xl font-semibold text-foreground border-l-4 border-primary pl-4">
              Certifications & Education
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-card border border-border hover:shadow-soft transition-shadow"
                >
                  <p className="font-semibold text-foreground">{cert.name}</p>
                  <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span className="text-primary font-medium">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
