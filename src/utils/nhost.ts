import { NhostClient } from "@nhost/react";

const nhost = new NhostClient({
  subdomain: "localhost",
});

export { nhost };
