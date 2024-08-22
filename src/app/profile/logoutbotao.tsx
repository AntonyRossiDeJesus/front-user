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
