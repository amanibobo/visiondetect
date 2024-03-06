import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mb-28">
    
      <div>
        <h1 className="max-w-2xl text-3xl font-bold sm:text-4xl md:text-[2.8rem] lg:text-[2.8rem] pt-28 text-white">
          <span className="text-[#059669]">Fast & Easy </span>
          <div className="max-w-2xl">
            Object Detection.
          </div>
        </h1>
      </div>

      <div className="pb-20">
            <Link href={"/"}>
              <Button
                size="lg"
                className="bg-[#059669] mt-14 mr-2 text-black text-white border-[#31c497] hover:bg-[#059669]"

              >
                Try Now
              </Button>
            </Link>
            <Link href="https://github.com/amanibobo">
              <Button
                size="lg"
                className="text-white bg-[#222222] hover:text-white border border-[#3b3b3b] hover:bg-[#222222]"
              >
                GitHub
              </Button>
            </Link>
          </div>
    </section>
  );
}
