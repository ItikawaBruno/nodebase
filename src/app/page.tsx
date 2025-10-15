'use client'
import LogoutButton from "./logout";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";


const page = () => {  
  const trpc = useTRPC();
  const data = useQuery(trpc.getWorkflows.queryOptions());
  const queryClient = useQueryClient();
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () =>{
      queryClient.invalidateQueries(trpc.getWorkflows.queryOptions())
    }
  }))

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