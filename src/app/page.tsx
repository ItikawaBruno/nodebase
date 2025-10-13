import prisma from "@/lib/db"



const page = async () => {

    const user = await prisma.user.findMany()
  

  return(
    <div className="h-screen min-w-sreen flex items-center justify-center">
      {JSON.stringify(user)}
    </div>
  )
}

export default page