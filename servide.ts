import { FirestoreAdapter } from "@auth/firebase-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { adminDb } from "./firebase-admin";


export const authOptions : NextAuthOptions = {
  adapter: FirestoreAdapter(adminDb),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
          // Añade el ID del usuario a la propiedad 'id' del token
          if (user) {
            token.id = user.id;
          }
          return token;
        },
      },
}