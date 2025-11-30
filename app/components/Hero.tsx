import { HERO } from "@/app/constants";

const Hero = () => (
  <header className="min-h-54 flex flex-col items-center justify-center gap-4 mb-10">
    <span className="text-black/80 text-xs bg-stone-200  px-3 py-1 rounded-xl">
      {HERO.preface}
    </span>
    <h1 className="text-3xl md:text-4xl font-bold font-oswald capitalize tracking-tight text-balance">
      <span className="text-national-maroon">{HERO.title.split(" ")[0]} </span>
      {HERO.title.split(" ").slice(1).join(" ")}
    </h1>
    <p className="text-muted-foreground text-sm leading-snug max-w-xl text-center">
      {HERO.description}
    </p>
  </header>
);

export default Hero;
