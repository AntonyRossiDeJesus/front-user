// // src/lib/serverProfile.ts
// import { PrismaClient } from "@prisma/client";
// import jwt from "jsonwebtoken";

// const prisma = new PrismaClient();
// const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// interface ServerProfileResponse {
//   user: {
//     id: string;
//     email: string;
//     createdAt: Date;
//   };
// }

// export async function getServerSideProfile(
//   token: string | undefined
// ): Promise<ServerProfileResponse | null> {
//   if (!token) {
//     return null;
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
//     const user = await prisma.user.findUnique({
//       where: { id: decoded.userId },
//     });

//     if (!user) {
//       return null;
//     }

//     return {
//       user: { id: user.id, email: user.email, createdAt: user.createdAt },
//     };
//   } catch (error) {
//     return null;
//   }
// }
