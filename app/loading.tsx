import { Spinner } from "@/components/ui/spinner"

export default function Loading(){
  return (
    <div className="container py-20">
      <div className="flex gap-4 items-center justify-center">
        <Spinner className="size-8" />
        <h2 className="text-xl">Loading...</h2>
      </div>
    </div>
  )
}