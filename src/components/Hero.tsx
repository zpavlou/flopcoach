import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Automated hand review for serious grinders</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turn hand histories into{" "}
            <span className="text-gradient">winning insights</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Upload your sessions. Get instant analysis of your biggest leaks. 
            Improve faster with clear, coaching-style feedback.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl">
              <Upload className="w-5 h-5" />
              Upload Hand History
            </Button>
            <Button variant="hero-outline" size="xl">
              See Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Sessions Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">50M+</div>
              <div className="text-sm text-muted-foreground">Hands Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Leak Detection</div>
            </div>
          </div>
        </div>

        {/* Floating Cards Preview */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 hidden lg:flex gap-4 opacity-40">
          <div className="w-16 h-24 bg-card rounded-lg border border-border shadow-card flex items-center justify-center font-mono text-2xl animate-float">
            A♠
          </div>
          <div className="w-16 h-24 bg-card rounded-lg border border-border shadow-card flex items-center justify-center font-mono text-2xl animate-float" style={{ animationDelay: '0.5s' }}>
            K♠
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
