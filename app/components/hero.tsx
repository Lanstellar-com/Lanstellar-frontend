import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen bg-[#151515] bg-[url('/heropatern.svg')] bg-cover bg-center text-white flex flex-col items-center justify-center rounded-b-[40px]">
      <Image
        src="/heronoise.png"
        alt="hero"
        width={1200}
        height={800}
        className="absolute top-0 left-0 w-[1700px] h-full z-0 opacity-20"
      />

      <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
        <h1 className="text-[64px] leading-[72px] font-medium font-helvetica">
          Stablecoin Lending,
          <br /> For Real World Assets
        </h1>

        <p className="mt-4 text-gray-300 text-[20px] leading-[28px] font-inter">
          Lanstella connects asset owners, liquidity providers and asset <br />
          managers for stable coin Loans. Tokenize real-world value.
          <br /> Unlock stable-coin liquidity.
        </p>

        <div className="mt-5 flex justify-center gap-4">
          <Button className=" h-[56px] w-[190px] font-inter text-[16px] bg-gradient-to-t from-[#2E2E2E] to-[#4A4A4A] text-white px-6 py-3 rounded-full">
            Request a Loan
          </Button>
          <Button className="bg-white h-[56px] w-[190px] font-inter text-[16px] text-black px-6 py-3 rounded-full">
            Partner with Us
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="-space-x-2 flex items-center">
            <Image
              src="/lisk.png"
              alt="crypto"
              width={32}
              height={32}
              className=" rounded-full"
            />
            <Image
              src="/base.png"
              alt="crypto"
              width={32}
              height={32}
              className=" rounded-full"
            />
            <Image
              src="/moonriver.png"
              alt="crypto"
              width={32}
              height={32}
              className=" rounded-full bg-white"
            />
            <Image
              src="/moonbeam.png"
              alt="crypto"
              width={32}
              height={32}
              className=" rounded-full"
            />
          </div>
          <p className="text-gray-400 text-sm">
            Trusted by leading crypto companies
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <Image src="/coins.png" alt="coins" width={307} height={307} />
      </div>
      <div className="absolute -top-33 -left-44 transform  -rotate-50">
        <Image src="/coins.png" alt="coins" width={307} height={307} />
      </div>
    </section>
  );
};

export default Hero;
