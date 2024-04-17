import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "email", type: "text", placeholders: "" },
        password: { label: "email", type: "text", placeholders: "" },
      },
      async authorize(credentials: any) {
        return {
          id: "user1",
          name: "pradhumn gautam",
        };
      },
    }),
  ],
});
export const GET = handler;
export const POST = handler;
