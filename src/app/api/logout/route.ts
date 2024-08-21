// src/app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
  );

  // Redireciona para a página de login após o logout
  return NextResponse.redirect(
    new URL("/login", process.env.BASE_URL || "http://localhost:3000"),
    { headers }
  );
}
