// import { auth } from "@/lib/auth/server";

import { auth } from "../../../../../lib/auth/server";

export const { GET, POST } = auth.handler();
