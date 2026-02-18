import Heading from "../ui/Heading";
import { cn } from "@/lib/utils";

type SectionContentProps = {
  title: string;
  className?: string;
  children: React.ReactNode
}

export default function SectionContent({ title, className, children }: SectionContentProps){
  return (
    <section className={cn("container py-10", className)}>
      <Heading level="2" className="mb-7">{title}</Heading>
      {children}
    </section>
  )
}