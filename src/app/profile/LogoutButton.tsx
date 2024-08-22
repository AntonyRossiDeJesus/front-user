// // src/components/LogoutButton.tsx
// "use client";

// import { useRouter } from "next/navigation";

// export default function LogoutButton() {
//   const router = useRouter();

//   const handleLogout = async () => {
//     try {
//       await fetch("https://user-api-ivory.vercel.app/api/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       router.push("/login"); // Redireciona para a página de login após o logout
//     } catch (error) {
//       console.error("Failed to logout:", error);
//     }
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         handleLogout();
//       }}
//     >
//       <button type="submit">Logout</button>
//     </form>
//   );
// }

"use client"; // Para garantir que o código seja executado no lado do cliente

import { useRouter } from "next/navigation";
import api from "../api/axios";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Faça uma solicitação POST para o endpoint de logout usando axios
      await api.post("/api/logout", {}, { withCredentials: true });

      // Remover o token do localStorage
      localStorage.removeItem("authToken");
      console.log("Logout efetuado, token removido");

      // Redirecionar para a página de login
      router.push("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
