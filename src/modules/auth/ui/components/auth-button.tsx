"use client";
import { Button } from "@/components/ui/button"
import { UserCircle2Icon } from "lucide-react"
import {signIn} from "next-auth/react"
export const AuthButton = () => {
    return(
        <Button 
         variant={"outline"}
         onClick={() => {
            signIn("google");
         }}
         className=" px-4 py-2 text-sm  font-medium text-blue-500 hover:text-blue-500 border-blue-500/2 rounded-full shadow-none [&_svg]:size-5 "
        >
            <UserCircle2Icon/>
            تسجيل الدخول
        </Button>
    )
}