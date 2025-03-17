import { trpc } from "@/trpc/server";

export default async  function Home() {
  const data = await trpc.hello({text : "abo aisha"})
  return(
    <div>
    Server component says : {data.greeting}
    </div>
  )
}
