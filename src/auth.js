import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(props) {
        console.log(props);

        return {
          id: "ccc8bb56998213c8bb9d269e817f2c2c8796dbef10b97f2f0bc4da2ca0ae506d",
          name: "dmasndj",
          _id: "mongoose_id",
          email: "arvinth@droot.in",
        };
        // const response = await fetch(request);
        // if (!response.ok) return null;
        // return (await response.json()) ?? null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add the user's _id to the token if the user object is available
      console.log("------- token -----", { token, user });
      if (user) {
        token._id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Add the _id from the token to the session object

      console.log("------- session -----", { session, token });
      token;
      if (token) {
        session.user._id = token._id;
      }
      return session;
    },
  },
});
