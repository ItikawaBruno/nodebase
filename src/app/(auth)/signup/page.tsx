import { RegisterForm } from "@/features/auth/components/register-form"
import { requiredUnauth } from "@/lib/auth-utils";


const Page = async () => {

    await requiredUnauth();

    return(
        <RegisterForm></RegisterForm>
    )
}

export default Page