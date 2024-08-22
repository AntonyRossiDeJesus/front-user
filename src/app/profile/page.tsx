// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import LogoutButton from "./LogoutButton";

// interface UserProfile {
//   id: string;
//   email: string;
//   createdAt: Date;
// }

// const ProfilePage = () => {
//   const [profile, setProfile] = useState<UserProfile | null>(null);
//   const router = useRouter();

//   const fetchProfile = async () => {
//     try {
//       // Obter o cookie e verificar se existe um token
//       const token = document.cookie
//         .split("; ")
//         .find((row) => row.startsWith("token="))
//         ?.split("=")[1];

//       if (!token) {
//         console.error("Token is missing");
//         return router.push("/login");
//       }

//       console.log(token); // Verifique o valor do token

//       // Fazer a requisição para obter o perfil
//       const response = await api.get("/profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         console.log("Profile data:", response.data);
//         setProfile(response.data.user);
//       } else {
//         console.error("Unexpected response status:", response.status);
//         router.push("/login");
//       }
//     } catch (error) {
//       console.error("Failed to fetch profile:", error);
//       router.push("/login");
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, [router]);

//   if (!profile) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Profile</h1>
//       <p>Email: {profile.email}</p>
//       <p>Created At: {new Date(profile.createdAt).toLocaleString()}</p>
//       <LogoutButton />
//     </div>
//   );
// };

// export default ProfilePage;

// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import LogoutButton from "./LogoutButton";

// interface UserProfile {
//   id: string;
//   email: string;
//   createdAt: Date;
// }

// const ProfilePage = () => {
//   const [profile, setProfile] = useState<UserProfile | null>(null);
//   const router = useRouter();
//   const fetchProfile = async () => {
//     try {
//       // Obtenha todos os cookies e encontre o token
//       const cookies = document.cookie;
//       const token = cookies
//         .split("; ")
//         .find((row) => row.startsWith("token="))
//         ?.split("=")[1];

//       if (!token) {
//         console.error("Token is missing");
//         return router.push("/login");
//       }

//       console.log("Token encontrado:", token); // Verifique se o token está correto

//       // Faça a requisição para obter o perfil
//       const response = await api.get("/profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         console.log("Profile data:", response.data);
//         setProfile(response.data.user);
//       } else {
//         console.error("Unexpected response status:", response.status);
//         router.push("/login");
//       }
//     } catch (error) {
//       console.error("Failed to fetch profile:", error);
//       router.push("/login");
//     }
//   };

//   useEffect(() => {
//     console.log("Fetching profile...");
//     fetchProfile();
//   }, [router]);

//   if (!profile) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Profile</h1>
//       <p>Email: {profile.email}</p>
//       <p>Created At: {new Date(profile.createdAt).toLocaleString()}</p>
//       <LogoutButton />
//     </div>
//   );
// };

// export default ProfilePage;
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../api/axios";
import LogoutButton from "./LogoutButton";

interface UserProfile {
  id: string;
  email: string;
  createdAt: Date;
}

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const router = useRouter();

  const fetchProfile = async () => {
    try {
      // Recupere o token do localStorage
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.error("Token não encontrado no localStorage");
        return router.push("/login");
      }

      console.log("Token encontrado:", token);

      // Fazer a requisição para obter o perfil
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("Dados do perfil:", response.data);
        setProfile(response.data.user);
      } else {
        console.error("Status de resposta inesperado:", response.status);
        router.push("/login");
      }
    } catch (error) {
      console.error("Falha ao buscar o perfil:", error);
      router.push("/login");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [router]);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {profile.email}</p>
      <p>Created At: {new Date(profile.createdAt).toLocaleString()}</p>
      <LogoutButton />
    </div>
  );
};

export default ProfilePage;
