// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // Inclua cookies
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         // Login bem-sucedido
//         router.push("/profile"); // Redirecionar para a página de perfil
//       } else {
//         // Erro no login
//         console.error("Login failed:", await response.json());
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//       <a href="/register">Register</a>
//     </div>
//   );
// };

// export default LoginPage;

// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import api from "../api/axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await api.post("/login", {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         // Login bem-sucedido
//         router.push("/profile"); // Redirecionar para a página de perfil
//       } else {
//         // Erro no login
//         console.error("Login failed:", response.data);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//       <a href="/register">Register</a>
//     </div>
//   );
// };

// export default LoginPage;

// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import api from "../api/axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted with:", { email, password });

//     try {
//       const response = await api.post("/login", {
//         email,
//         password,
//       });

//       console.log("API Response:", response);

//       if (response.status === 200) {
//         console.log("Login successful, redirecting to profile page");
//         router.push("/profile");
//       } else {
//         console.error("Login failed:", response.data);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//       <a href="/register">Register</a>
//     </div>
//   );
// };

// export default LoginPage;
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import api from "../api/axios"; // Certifique-se de que o caminho para o axios está correto

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", { email, password });

      if (response.status === 200) {
        const token = response.data.token;

        // Armazene o token no localStorage
        localStorage.setItem("authToken", token);

        console.log("Login bem-sucedido, token armazenado:", token);

        // Redirecionar para a página de perfil
        router.push("/profile");
      } else {
        console.error("Falha no login:", response.status);
      }
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <a href="/register">Register</a>
    </div>
  );
};

export default LoginPage;
