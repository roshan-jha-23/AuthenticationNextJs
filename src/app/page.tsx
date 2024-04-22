import Image from "next/image";
import { SignupPage } from "./signup/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignupPage/>
    </main>
  );
}
