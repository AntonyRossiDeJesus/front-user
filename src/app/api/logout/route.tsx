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

// "use client";
// import { useRouter } from "next/navigation";

// const LogoutButton = () => {
//   const router = useRouter();

//   const handleLogout = () => {
//     // Remover o token do localStorage
//     localStorage.removeItem("authToken");
//     console.log("Logout efetuado, token removido");

//     // Redirecionar para a página de login
//     router.push("/login");
//   };

//   return <button onClick={handleLogout}>Logout</button>;
// };

// export default LogoutButton;

// src/components/LogoutButton.tsx

// "use client"; // Certifique-se de que o código é executado no lado do cliente

// import { useRouter } from "next/navigation";

// const LogoutButton = () => {
//   const router = useRouter();

//   const handleLogout = async () => {
//     try {
//       // Faça uma solicitação POST para o endpoint de logout
//       await fetch("/api/logout", {
//         method: "POST",
//         credentials: "include", // Inclua cookies para que o cookie seja removido
//       });

//       // Remover o token do localStorage
//       localStorage.removeItem("authToken");
//       console.log("Logout efetuado, token removido");

//       // Redirecionar para a página de login
//       router.push("/login");
//     } catch (error) {
//       console.error("Erro ao fazer logout:", error);
//     }
//   };

//   return <button onClick={handleLogout}>Logout</button>;
// };

// export default LogoutButton;
