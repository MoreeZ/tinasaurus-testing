import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'fa3744d795a0477c3bb07f3cb97f7334b4c9b82c', queries,  });
export default client;
  