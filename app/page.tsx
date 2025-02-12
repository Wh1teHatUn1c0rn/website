
import Encryption from '@/components/main/encryption';
import Hero from '@/components/main/hero'
import Skills from '@/components/main/skills';
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />

      </div>
    </main>
  );
}
