import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_CLIENT_ID || "",
      clientSecret: process.env.AUTH_CLIENT_SECRET || "",
    }),
  ],
});
export { handler as GET, handler as POST };
