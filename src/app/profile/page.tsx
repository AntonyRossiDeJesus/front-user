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

  // useEffect(() => {
  // const fetchProfile = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://user-api-ivory.vercel.app/api/profile",
  //       {
  //         method: "GET",
  //         credentials: "include",
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       setProfile(data.user);
  //     } else {
  //       router.push("/login");
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch profile:", error);
  //     router.push("/login");
  //   }
  // };
  const fetchProfile = async () => {
    try {
      console.log("Fetching profile...");

      // Obter o cookie e verificar se existe um token
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      if (!token) {
        console.error("Token is missing");
        return router.push("/login");
      }

      console.log("Token found:", token); // Verifique o valor do token

      // Fazer a requisição para obter o perfil
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("Profile data:", response.data);
        setProfile(response.data.user);
      } else {
        console.error("Unexpected response status:", response.status);
        router.push("/login");
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
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
