import { type SchemaTypeDefinition } from "sanity";
import omOss from "./omOss";
import Ingariflytthjalp from "./Ingariflytthjalp";
import Ingariflyttstadingen from "./Ingariflyttstadingen";
import Ingarivisningsstadning from "./Ingarivisningsstadning";
import Kontakt from "./Kontakt";
import Tipsinforflytt from "./Tipsinforflytt";
import LandingPage from "./landingPage";
import Forsakring from "./Forsakring";
import miljovanligt from "./miljovanligt";
import Prisgaranti from "./Prisgaranti";
import nojdgaranti from "./nojdgaranti";
import Footer from "./Footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    omOss,
    Ingariflytthjalp,
    Ingariflyttstadingen,
    Ingarivisningsstadning,
    Kontakt,
    Tipsinforflytt,
    LandingPage,
    Forsakring,
    miljovanligt,
    Prisgaranti,
    nojdgaranti,
    Footer,
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
  Forsakring,
  miljovanligt,
  Prisgaranti,
  nojdgaranti,
  Footer,
];
