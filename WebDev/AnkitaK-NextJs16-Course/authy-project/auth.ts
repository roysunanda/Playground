// import NextAuth from "next-auth";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [],
// });

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log(credentials);
        return null;
      },
    }),
  ],
});
