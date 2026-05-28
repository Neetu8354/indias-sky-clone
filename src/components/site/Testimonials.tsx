import { Quote } from "lucide-react";

const T = [
  {
    n: "Rahul S.",
    c: "Mumbai",
    role: "IPL regular · 3 years",
    t: "Got my ID on WhatsApp in two minutes flat, funded with UPI, and cashed out ₹45,000 the night of the IPL final. Withdrawal hit my bank before the post-match interviews ended.",
  },
  {
    n: "Priya K.",
    c: "Delhi",
    role: "Live casino · 2 years",
    t: "I've tried four other platforms. Skyexchange7 is the only one where the odds actually refresh in real time and support replies in under a minute — in Hindi, no less.",
  },
  {
    n: "Arjun M.",
    c: "Bangalore",
    role: "Andar Bahar + Teen Patti",
    t: "The live dealers are professional, the streams are HD, and the table limits scale from casual to serious. It's the closest thing to a real card room I've found online.",
  },
];

export const Testimonials = () => (
  <section className="py-20 md:py-32">
    <div className="container">
      <div className="max-w-2xl mb-12 md:mb-16">
        <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-3">Voices from the floor</div>
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05]">
          Stories from <span className="text-shimmer">10 lakh+</span> players who chose us.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {T.map((x, i) => (
          <figure
            key={x.n}
            className={`relative p-8 rounded-3xl glass-card transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 ${
              i === 1 ? "md:translate-y-6" : ""
            }`}
          >
            <Quote className="h-7 w-7 text-primary/40 mb-5" />
            <blockquote className="text-base text-foreground/85 mb-6 leading-relaxed font-light">
              "{x.t}"
            </blockquote>
            <figcaption className="pt-5 border-t border-border/40">
              <div className="font-semibold text-foreground">{x.n}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {x.c} · {x.role}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
