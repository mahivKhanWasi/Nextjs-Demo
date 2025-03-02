import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      accessToken: string;
    };
  }

  interface JWT {
    id: string;
    accessToken: string;
  }
}
