import Image from "next/image";
export default function Home() {
  return(
    <div>
     <Image src={"./logo.svg"} alt="logo" width={150} height={150}/>
     <p className=" text-xl  font-semibold tracking-tight">NewTube</p>
    </div>
  )
}
