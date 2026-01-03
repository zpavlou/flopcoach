import { CheckCircle, AlertTriangle, XCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const sampleHands = [
  {
    status: "mistake",
    position: "BTN",
    action: "3-bet to 12bb with KJo",
    board: "A♠ 7♥ 2♦",
    feedback: "Overplaying KJo from BTN. Against MP open, prefer flat or fold. 3-betting bloats pot OOP with dominated hands.",
    suggestion: "Flat call or fold. KJo plays better as a call given implied odds and playability.",
  },
  {
    status: "questionable",
    position: "CO",
    action: "Check flop with TPTK",
    board: "K♣ 8♠ 3♥",
    feedback: "Checking top pair on dry board leaves money on the table. You have range advantage here.",
    suggestion: "Bet 33-40% pot for value. This board hits your range hard—capitalize on it.",
  },
  {
    status: "good",
    position: "BB",
    action: "Check-raise flop with nut flush draw",
    board: "9♠ 6♠ 2♣",
    feedback: "Excellent semi-bluff. You have equity, fold equity, and position advantage on later streets.",
    suggestion: null,
  },
];

const statusConfig = {
  mistake: {
    icon: XCircle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
    label: "Mistake",
  },
  questionable: {
    icon: AlertTriangle,
    color: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/30",
    label: "Questionable",
  },
  good: {
    icon: CheckCircle,
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/30",
    label: "Good Play",
  },
};

const HandReviewPreview = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See your hands <span className="text-gradient">differently</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every decision labeled. Every leak explained. Every fix suggested.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {sampleHands.map((hand, index) => {
            const config = statusConfig[hand.status as keyof typeof statusConfig];
            const StatusIcon = config.icon;

            return (
              <div
                key={index}
                className={`bg-card rounded-2xl border ${config.borderColor} p-6 shadow-card animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Status Badge */}
                  <div className={`flex items-center gap-2 ${config.bgColor} px-3 py-1.5 rounded-full shrink-0`}>
                    <StatusIcon className={`w-4 h-4 ${config.color}`} />
                    <span className={`text-sm font-medium ${config.color}`}>{config.label}</span>
                  </div>

                  {/* Hand Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge variant="outline" className="font-mono">
                        {hand.position}
                      </Badge>
                      <span className="text-foreground font-medium">{hand.action}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="font-mono text-muted-foreground">{hand.board}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{hand.feedback}</p>

                    {hand.suggestion && (
                      <div className="flex items-start gap-2 bg-primary/5 rounded-lg p-4 border border-primary/10">
                        <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground">
                          <span className="font-semibold text-primary">Better line: </span>
                          {hand.suggestion}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HandReviewPreview;
