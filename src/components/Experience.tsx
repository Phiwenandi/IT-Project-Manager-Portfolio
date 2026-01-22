import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
  title: "IT Project Manager & Junior Business Analyst",
  company: "Trillion Cart Investments",
  period: "March 2021 - Present",
  location: "Johannesburg",
  responsibilities: [
    "Lead systems implementation and software deployment initiatives across multiple business units, ensuring alignment with programme objectives and operational requirements.",
    "Lead the end-to-end delivery of IT projects, from initiation to closure, including medium to large-scale projects within scope, budget, and timelines.",
    "Translate client and internal business needs into functional specifications, delivery plans, and implementation frameworks.",
    "Plan requirements gathering, design, development, testing, and deployment; coordinate with developers, designers, QA, and cross-functional teams to maintain clear responsibilities and seamless integration.",
    "Develop detailed project plans, timelines, budgets, and resource allocations.",
    "Define project scope, objectives, and deliverables aligned to organisational goals.",
    "Manage timelines, budgets, risks, dependencies, and quality standards while ensuring compliance with governance processes and documentation requirements.",
    "Maintain project documentation, governance, and reporting standards.",
    "Oversee proof of concept phases, pilot rollouts, and staged deployments, incorporating feedback into final releases.",

    "Stakeholder & Client Management:",
    "Engage with technical and business stakeholders to gather and document requirements.",
    "Facilitate communication between development teams, vendors, and business units.",
    "Provide stakeholder updates through structured reports, progress dashboards, and risk mitigation plans.",
    "Influence and manage stakeholder expectations to maintain alignment throughout the project lifecycle.",
    "Facilitate end-user and client training sessions to support adoption readiness and smooth platform transitions.",
    "Support client escalations, technical assessments, and issue resolution through collaboration with internal teams.",

    "Team Leadership:",
    "Lead and motivate project teams, ensuring clear roles, responsibilities, and expectations.",
    "Conduct project meetings, sprint reviews, stand-ups, and regular team check-ins.",

    "Technical & Delivery Expertise:",
    "Analyse technical requirements and maintain solution alignment with architecture standards.",
    "Oversee software development, infrastructure, systems integration, and cloud-based projects.",
    "Manage vendor relationships and ensure contractual deliverables are met.",
    "Support UAT, QA processes, and production deployments.",
    "Collaborate closely with architects, developers, testers, and operational teams.",

    "Project Governance:",
    "Maintain compliance with PMO methodologies including Waterfall, Agile, and Hybrid frameworks.",
    "Drive continuous improvement of project delivery processes and standards.",
    "Prepare and maintain project documentation including business cases, project charters, RAID logs, and post-implementation reviews.",

    "Systems Implementation and Software Deployment:",
    "Led planning, scheduling, and delivery of multiple digital systems including an e-commerce platform, LMS, appointment management system, and online auction platform.",
    "Managed full SDLC, Agile sprints, UAT cycles, and implementation rollouts.",
    "Oversaw proof of concept builds and pilot testing, ensuring smooth transition to production.",
    "Coordinated cross-functional teams including IT, operations, vendors, and technical support.",
    "Facilitated end-user training and adoption for newly deployed systems.",

    "Technical Coordination:",
    "Managed API integrations for mobile apps, websites, payment gateways, and cross-platform systems.",
    "Directed satellite-to-home WiFi configuration and fibre installation coordination with network operators.",
    "Developed detailed project plans, risk mitigation strategies, and technical documentation."
  ]
},
    {
    title: "Account Manager",
    company: "Trillion Cart Investments",
    period: "December 2023 - January 2026",
    location: "Johannesburg",
    responsibilities: [
      "Serve as main point of contact for key clients, maintaining strong relationships with decision-makers and monitoring account health",
      "Identify upselling and cross-selling opportunities, prepare proposals, negotiate contracts, and meet sales targets for strategic accounts",
      "Develop account plans and growth strategies, conducting regular business reviews and forecasting sales progress",
      "Coordinate with tech support, operations, and billing teams to ensure seamless service delivery and resolve escalations promptly",
      "Monitor market trends, competitor offerings, and customer needs to provide insights for product improvement",
      "Maintain accurate CRM records and generate reports on account activity, performance, and pipeline"
    ]
  },
  {
    title: "Designer Team Supervisor",
    company: "Trillion Cart Investments",
    period: "December 2023 - March 2025",
    location: "Johannesburg",
    responsibilities: [
      "Supervised designers, tracked KPIs, assigned workloads, and ensured timely delivery"
    ]
  },
  {
    title: "Web Developer",
    company: "Trillion Cart Investments",
    period: "January 2019 - February 2021",
    location: "Johannesburg",
    responsibilities: [
      "Developed responsive websites using HTML, CSS, and JavaScript",
      "Configured analytics and collaborated with cross-functional teams",
      "Conducted technical troubleshooting and ensured site performance and security",
      "Implemented frontend solutions with modern web technologies"
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Experience</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              Professional Journey
            </h3>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center shadow-soft">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                
                {index < experiences.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-px bg-border" />
                )}
                
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-soft transition-shadow">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium mt-1">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mt-2">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground/80">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
