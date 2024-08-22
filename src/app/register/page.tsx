// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(
//         "https://user-api-ivory.vercel.app/api/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       if (res.ok) {
//         router.push("/profile");
//       } else {
//         // Handle errors here
//         console.error("Registration failed");
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }
"use client";
import { useRouter } from "next/navigation";
import api from "../api/axios";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);

    try {
      const response = await api.post(
        "/register",
        {
          email: formData.get("email"),
          password: formData.get("password"),
        },
        { withCredentials: true }
      );

      if (response.status === 201) {
        // Registro bem-sucedido
        router.push("/profile"); // Redirecionar para a página de perfil ou outra página
      } else {
        // Lidar com erro
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
