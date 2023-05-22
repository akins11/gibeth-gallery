import Link from "next/link";
import Image from "next/image";


const Hero = () => {
  return (
    <section className="bg-[#14213D] h-[800px] rounded-b-3xl bg-no-repeat bg-center py-24 text-white">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercese">
            <div className="w-10 h-[2px] bg-[#FCA311] mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-1.1 font-light mb-4">
            AUTUMN SALE STYLISH <br/> <span className="font-semibold">WOMENS</span>
          </h1>
          <Link href={"/"} className="self-start uppercase font-semibold border-b-2 hover:border-b-[#14213D] hover:text-[#FCA311] border-primary transition duration-300">
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <div className="h-full flex justify-center items-center">
            <Image 
              src="/header_img.png"
              alt=" "
              width={200}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  )
}


export default Hero;