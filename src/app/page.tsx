import { requiredAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server"
import LogoutButton from "./logout";


const page = async () => {  

  await requiredAuth()

  const data = await caller.getUsers();

  return(
    <div className="h-screen min-w-sreen flex items-center justify-center flex-col gap-y-6">
      protected server component
      {JSON.stringify(data, null, 2)}
      <LogoutButton></LogoutButton>
    </div>
  )
}


export default page