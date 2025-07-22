import { type SchemaTypeDefinition } from "sanity";
import omOss from "./omOss";
import Ingariflytthjalp from "./Ingariflytthjalp";
import Ingariflyttstadingen from "./Ingariflyttstadingen";
import Ingarivisningsstadning from "./Ingarivisningsstadning";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    omOss,
    Ingariflytthjalp,
    Ingariflyttstadingen,
    Ingarivisningsstadning,
  ],
};
export const schemaTypes = [
  omOss,
  Ingariflytthjalp,
  Ingariflyttstadingen,
  Ingarivisningsstadning,
];
