'use client'
import LogoutButton from "./logout";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";


const page = () => {  
  const trpc = useTRPC();
  const data = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(trpc.createWorkflow.mutationOptions())

  return(
    <div className="h-screen min-w-sreen flex items-center justify-center flex-col gap-y-6">
      protected server component
      {JSON.stringify(data, null, 2)}
      <Button
      onClick={() => create.mutate()}>Create Workflow</Button>
      <LogoutButton></LogoutButton>
    </div>
  )
}


export default page