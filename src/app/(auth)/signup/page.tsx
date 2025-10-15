import { RegisterForm } from "@/features/auth/components/register-form"
import { requiredUnauth } from "@/lib/auth-utils";


const Page = async () => {

    await requiredUnauth();

    return(
        <div>
            <RegisterForm></RegisterForm>
        </div>
    )
}

export default Page