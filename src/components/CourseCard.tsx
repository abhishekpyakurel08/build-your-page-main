import { motion } from "framer-motion";
import { Brain, Database, Settings, Zap, Clock, Award, ChevronRight } from "lucide-react";

const courses = [
  {
    title: "AI",
    icon: Brain,
    description: "Master Artificial Intelligence fundamentals, neural networks, NLP, and computer vision with hands-on projects.",
    standardPrice: 30000,
    standardDiscount: 15000,
    premiumPrice: 70000,
    premiumDiscount: 35000,
    features: ["Neural Networks & Deep Learning", "Natural Language Processing", "Computer Vision", "Hands-on Projects"],
  },
  {
    title: "Data Science",
    icon: Database,
    description: "Learn data analysis, visualization, statistical modeling, and machine learning for data-driven decisions.",
    standardPrice: 30000,
    standardDiscount: 15000,
    premiumPrice: 70000,
    premiumDiscount: 35000,
    features: ["Data Analysis & Visualization", "Statistical Modeling", "Machine Learning", "Real-world Datasets"],
  },
  {
    title: "MLOps",
    icon: Settings,
    description: "Deploy, monitor, and manage ML models in production with CI/CD pipelines and infrastructure automation.",
    standardPrice: 30000,
    standardDiscount: 15000,
    premiumPrice: 70000,
    premiumDiscount: 35000,
    features: ["Model Deployment", "CI/CD Pipelines", "Monitoring & Logging", "Infrastructure as Code"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const CourseCard = ({ course, index }: { course: typeof courses[0]; index: number }) => (
  <motion.div
    variants={item}
    className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
  >
    <div className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-accent">
        <course.icon className="w-6 h-6 text-accent-foreground" />
      </div>
      <h3 className="font-display text-2xl font-bold text-card-foreground mb-2">{course.title}</h3>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{course.description}</p>

      <div className="space-y-2 mb-6">
        {course.features.map((f) => (
          <div key={f} className="flex items-center gap-2 text-sm text-card-foreground">
            <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>{f}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Standard</span>
          <div className="flex items-center gap-2">
            <span className="text-sm line-through text-muted-foreground">Rs.{course.standardPrice.toLocaleString()}</span>
            <span className="text-lg font-bold text-gradient">Rs.{course.standardDiscount.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Premium</span>
          <div className="flex items-center gap-2">
            <span className="text-sm line-through text-muted-foreground">Rs.{course.premiumPrice.toLocaleString()}</span>
            <span className="text-lg font-bold text-gradient">Rs.{course.premiumDiscount.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default CourseCard;
