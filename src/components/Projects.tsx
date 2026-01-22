import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, Users } from "lucide-react";

const projects = [
  {
    title: "Church Mobile App",
    description: "Mobile application for church members to access sermons, event updates, donations, and notifications.",
    timeline: "March 2021 – August 2021",
    budget: "R120,000",
    platforms: ["iOS", "Android", "Gallery App (Huawei)"],
    highlights: [
      "80% member registration within 3 months",
      "Seamless sermon streaming",
      "Push notifications system",
      "Donation management"
    ]
  },
  {
    title: "MVNO Platform Development",
    description: "Development and deployment of a mobile virtual network operator platform with SIM provisioning and billing integration.",
    timeline: "June 2022 – Dec 2022",
    budget: "R500,000",
    platforms: ["Infrastructure", "Backend Systems"],
    highlights: [
      "Complete MVNO infrastructure",
      "SIM provisioning automation",
      "Billing integration",
      "<2% critical bugs post-launch"
    ]
  },
  {
    title: "E-Commerce Platform (Takealot-like)",
    description: "Full-featured online shopping platform supporting multiple product categories, payment processing, and order tracking.",
    timeline: "Jan 2023 – Aug 2023",
    budget: "R400,000",
    platforms: ["Web"],
    highlights: [
      ">500 orders processed first month",
      "Multi-category product catalog",
      "Integrated payment gateway",
      "Real-time order tracking"
    ]
  },
  {
    title: "Funeral Home Member Portal (Mobile App)",
    description: "Comprehensive web and mobile portal for funeral services management with customer registration, payments, and scheduling.",
    timeline: "March 2022 – August 2022",
    budget: "R200,000",
    platforms: ["iOS", "Android", "Gallery App (Huawei)"],
    highlights: [
      "80% online registration rate",
      "Payment integration",
      "Member portal dashboard",
      "Admin management system"
    ]
  },
  {
    title: "Auction Site Platform",
    description: "Online auction site enabling multiple sellers to list products and buyers to bid in real time with secure payment processing.",
    timeline: "May 2023 – Oct 2023",
    budget: "R250,000",
    platforms: ["Web Platform"],
    highlights: [
      "Real-time bidding system",
      "Secure payment integration",
      "Multi-seller support",
      "Admin panel for oversight"
    ]
  },
  {
    title: "Learning Management System (LMS)",
    description: "Enterprise LMS for course delivery, student management, and progress tracking with integrated assessment tools.",
    timeline: "2021 - 2023",
    budget: "Confidential",
    platforms: ["Web Platform", "Mobile Apps"],
    highlights: [
      "Course content delivery",
      "Assessment & grading system",
      "Student progress tracking",
      "Admin dashboard"
    ]
  },
  {
    title: "Appointment & Scheduling System",
    description: "Digital system for booking appointments with Google Meet integration, prayer requests, document storage, and facility management.",
    timeline: "Jan 2023 – Apr 2023",
    budget: "R120,000",
    platforms: ["Web", "Mobile"],
    highlights: [
      "90% appointments booked online",
      "Google Meet integration",
      "Equipment inventory management",
      "Branch reporting system"
    ]
  },
  {
    title: "Fiber Installation Project",
    description: "Installation of fiber connectivity across 20 branch sites for improved internet and intranet infrastructure.",
    timeline: "April 2023 – July 2023",
    budget: "R1,200,000",
    platforms: ["Infrastructure"],
    highlights: [
      "20 sites connected",
      "100% operational delivery",
      "Minimal downtime",
      "Complete documentation"
    ]
  },
  {
    title: "Website Project Manager",
    description: "Management of multiple client website projects across various industries including travel, real estate, and hospitality.",
    timeline: "March 2021 – Ongoing",
    budget: "R50,000 - R150,000 per site",
    platforms: ["Web"],
    highlights: [
      "15+ websites delivered",
      "Multiple industries served",
      "Full project lifecycle management",
      "High client satisfaction"
    ]
  },
    {
    title: "ICOM Mobile App",
    description: "The ICOM Mobile app lets users buy airtime and data, manage subscriptions, link their bank card for payments.",
    timeline: "October 2023 – December 2023",
    budget: "R150,000 - R300,000",
    platforms: ["iOS", "Android", "Gallery App (Huawei)"],
    highlights: [
      "15+ websites delivered",
      "Multiple industries served",
      "Full project lifecycle management",
      "High client satisfaction"
    ]
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-3 text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured Projects
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading complex technical initiatives across multiple industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{project.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span>{project.budget}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.platforms.map((platform, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-2 pt-2">
                      <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        Key Achievements
                      </p>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        {project.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span className="line-clamp-1">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
