import { HERO } from "@/app/constants";

const Hero = () => (
  <header className="min-h-54 flex flex-col items-center justify-center gap-4 mb-10">
    <span className="text-black/80 text-[10px] sm:text-xs bg-stone-200 px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl">
      {HERO.preface}
    </span>
    <h1 className="text-3xl sm:text-4xl font-bold font-oswald capitalize tracking-tight text-balance my-1">
      <span className="text-national-maroon">{HERO.title.split(" ")[0]} </span>
      {HERO.title.split(" ").slice(1).join(" ")}
    </h1>
    <p className="text-muted-foreground text-xs sm:text-sm leading-snug max-w-xl text-center">
      {HERO.description}
    </p>
  </header>
);

export default Hero;
