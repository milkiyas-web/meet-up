"use client"
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import img1 from "../assets/images/img1.jpg";
import logo from "../assets/images/trademark.png";
import svg from "../assets/images/svg.jpg";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default async function Home() {

  const router = useRouter();
  const handleClick = () => {
    router.push('/sign-up')
  }
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-20">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center items-center">
            <Image 
                src={logo}
                alt="trademark"
                width={55.64}
                height={35}
                className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
              />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
               src={svg}
               alt="svg"
               width={245}
               height={370}
               className=""
            />
          </div>
          <div className="flex flex-col justify-center gap-3 items-center">
            <h1 className="h1-bold text-rose-500 font-bold">Matches</h1>
            <p className="flex flex-col justify-center text-center text-wrap w-295">we match you with people that have a large <br/> array of similar interests as you.</p>
          </div>
          <div className="flex flex-col justify-center gap-4 items-center">
            <SignInButton>
              <button className="bg-rose-500 text-white rounded-md w-80 h-9 px-3">Create an account</button>
            </SignInButton>
            <p>Already have an account? <Link href="/sign-up" className="rose-500 text-rose-500">sign in</Link></p>
          </div>
        </div>
      </section> 
    </>
  );
}
