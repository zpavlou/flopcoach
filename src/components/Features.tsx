import { 
  Target, 
  Brain, 
  TrendingUp, 
  Clock, 
  Shield, 
  Layers 
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Spot-Focused Analysis",
    description: "We prioritize the spots that matter most—preflop ranges, c-bet decisions, and flop play. No noise, just signal.",
  },
  {
    icon: Brain,
    title: "Coaching-Style Feedback",
    description: "Every mistake comes with a clear explanation of *why* it's wrong and what you should do instead.",
  },
  {
    icon: TrendingUp,
    title: "Leak Tracking Over Time",
    description: "See your most common mistakes across sessions. Track whether you're actually improving.",
  },
  {
    icon: Clock,
    title: "Instant Results",
    description: "Upload your session and get results in seconds. No waiting for manual review or complex setup.",
  },
  {
    icon: Shield,
    title: "Strategy-Based Rules",
    description: "Powered by proven poker principles—position, board texture, range advantage—not black-box solvers.",
  },
  {
    icon: Layers,
    title: "Multi-Street Analysis",
    description: "Premium features unlock turn and river review, plus detailed bet sizing recommendations.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-gradient">serious players</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to study smarter, not harder
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-gradient-card rounded-2xl border border-border p-6 shadow-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
