"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";

interface UserProfile {
  id: string;
  email: string;
  createdAt: Date;
}

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const router = useRouter();

  useEffect(() => {
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
        const response = await fetch(
          "https://user-api-ivory.vercel.app/api/profile",
          {
            method: "GET",
          }
        );
        if (response.ok) {
          console.log("Response status:", response.status);
          const data = await response.json();
          console.log("Profile data:", data);
          setProfile(data.user);
        } else {
          console.log("Response error:", response.status);
          router.push("/login");
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        router.push("/login");
      }
    };

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
