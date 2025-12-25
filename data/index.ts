import { worldHistory } from "./world-history";
import { technology } from "./technology";
import { unificationOfNepal } from "./unification-of-nepal";
import { revolutionsOfNepal } from "./revolutions-of-nepal";
import { constitutionsOfNepal } from "./constitutions-of-nepal";
import { divyaUpadesh } from "./divya-upadesh";
import { earthquakesInNepal } from "./earthquakes-in-nepal";
import { primeMinistersRepublic } from "./pm-of-republic";
import { nepalPoliticalHistory } from "./nepal-political-history";
import { preUnificationDynastiesNepal } from "./pre-unification-nepal";
import { sinjaValleyCivilization } from "./sinja-valley-civilization";

export const timelines = [
  sinjaValleyCivilization,
  preUnificationDynastiesNepal,
  nepalPoliticalHistory,
  primeMinistersRepublic,
  earthquakesInNepal,
  divyaUpadesh,
  constitutionsOfNepal,
  revolutionsOfNepal,
  unificationOfNepal,
  worldHistory,
  technology,
].filter((timeline) =>
  process.env.NODE_ENV === "production" ? timeline.state !== "archived" : true
);
