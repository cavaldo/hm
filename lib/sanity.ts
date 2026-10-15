import "server-only";

import { createClient } from "@sanity/client";

export const sanityProjectId = process.env.SANITY_PROJECT_ID;
export const sanityDataset =
  process.env.SANITY_DATASET || "production";

export const sanityClient = sanityProjectId
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: "2025-02-19",
      useCdn: true,
    })
  : null;
