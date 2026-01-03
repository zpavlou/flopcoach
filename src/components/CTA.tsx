import { Button } from "@/components/ui/button";
import { Upload, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Free to start</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to plug your <span className="text-gradient">leaks</span>?
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Upload your first session and discover the mistakes costing you money. 
            No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              <Upload className="w-5 h-5" />
              Start Free Analysis
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Supports PokerStars, GGPoker, 888Poker, and more
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
