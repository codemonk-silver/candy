import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
      <div>
      <main className="relative h-screen w-full">
           <Image
              src="/Background.png"
              alt="Background"
              fill
              priority
              className="object-cover"
            />
            <div className="flex justify-center relative px-60 top-10">
                <div className="flex justify-between h-screen items-center">
                    <div className="basis-[40%] text-black space-y-6">
                        <h1 className="text-5xl">Build Innovative Apps For Your Business</h1>
                        <p className="text-[0.85rem] max-w-96">Build smarter, move faster, and grow stronger with custom apps designed to support your business every step of the way.</p>
                        <Button className="px-8 py-5 bg-amber-600 text-white">Browse Our Services</Button>
                    </div>
                    <div className="basis-[45%]">
                        <Image
                          src="/images.png"
                          alt="Background"
                          width={500}
                          height={200}
                          className="object-cover"
                        />
                    </div>
                </div>
            </div>
      </main>

      {/* servicres */}
      <div className="relative bg-white w-full h-[50vh] flex justify-center items-center">
          <Image
            src="/serviceframe.png"
            alt="Background"
            fill
            className="object-cover shadow-2xl"
            />
      </div>

      </div>
  );
}
