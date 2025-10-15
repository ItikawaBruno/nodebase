import { LoginForm } from "@/features/auth/components/login-form"
import { requiredUnauth } from "@/lib/auth-utils"
import Image from "next/image";
import Link from "next/link";


const Page = async () => {

    await requiredUnauth();

    return(
            <LoginForm></LoginForm>
    )
}

export default Page