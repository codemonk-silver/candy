import Image from "next/image";

export default function Home() {
  return (
      <main className="relative h-screen w-full">
           <Image
              src="/Background.png"
              alt="Background"
              fill
              priority
              className="object-cover"
            />
      </main>
  );
}
