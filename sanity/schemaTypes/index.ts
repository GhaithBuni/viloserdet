import { type SchemaTypeDefinition } from "sanity";
import omOss from "./omOss";
import Ingariflytthjalp from "./Ingariflytthjalp";
import Ingariflyttstadingen from "./Ingariflyttstadingen";
import Ingarivisningsstadning from "./Ingarivisningsstadning";
import Kontakt from "./Kontakt";
import Tipsinforflytt from "./Tipsinforflytt";
import LandingPage from "./landingPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    omOss,
    Ingariflytthjalp,
    Ingariflyttstadingen,
    Ingarivisningsstadning,
    Kontakt,
    Tipsinforflytt,
    LandingPage,
  ],
};
export const schemaTypes = [
  omOss,
  Ingariflytthjalp,
  Ingariflyttstadingen,
  Ingarivisningsstadning,
  Kontakt,
  Tipsinforflytt,
  LandingPage,
];
