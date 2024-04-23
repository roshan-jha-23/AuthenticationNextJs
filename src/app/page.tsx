'use client'
import Image from "next/image";
import { LandingPage } from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Auth</h1>
      <Navbar/>
      <LandingPage />
    </main>
  );
}
