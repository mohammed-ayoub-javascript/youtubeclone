import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/db/index";
import { usersTable } from "@/db/schema"; 
import { eq } from "drizzle-orm";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECERT,
  session: {
    strategy: "jwt",
    maxAge: 1296000 * 1000, // 15 يوم
  },
  callbacks: {
    async signIn({ user }) {
      try {
        const existingUser = await db
          .select()
          .from(usersTable)
          .where(eq(usersTable.email, user.email as string));

        if (existingUser.length === 0) {
          await db.insert(usersTable).values({
            name: user.name as string,
            email: user.email as string,
            image: user.image || null,
          });
        }
      } catch (error) {
        console.error("خطأ أثناء تسجيل المستخدم:", error);
        return false;
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};
