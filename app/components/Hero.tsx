import { HERO } from "@/app/constants";

const Hero = () => (
  <header className="min-h-32 sm:min-h-54 flex flex-col items-center justify-center gap-4 mb-10">
    <span className="text-[10px] sm:text-xs frosted bg-stone-200/45! dark:bg-stone-200/20! px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl text-shadow-md">
      {HERO.preface}
    </span>
    <h1 className="text-3xl sm:text-4xl font-bold font-oswald capitalize tracking-tight text-balance my-1 text-shadow-md">
      <span className="text-national-maroon">{HERO.title.split(" ")[0]} </span>
      {HERO.title.split(" ").slice(1).join(" ")}
    </h1>
    <p className="text-muted-foreground text-xs sm:text-sm leading-snug max-w-xl text-center">
      {HERO.description}
    </p>
  </header>
);

export default Hero;
