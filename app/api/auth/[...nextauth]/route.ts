import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
  
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "m@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and Password are required");
        }

        try {
          const res = await fetch("https://sohagsheik-server.vercel.app/api/v1/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

           
          if (!res.ok) {
            throw new Error("Invalid credentials");
          }

          const user = await res.json();

          return {
            id: String(user.id),
            email: user.email,
            accessToken: user.accessToken,
          };
        } catch {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

// ✅ Correctly export NextAuth using the App Router syntax
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
