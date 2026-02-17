import Heading from "../ui/Heading";

type SectionContentProps = {
  title: string;
  children: React.ReactNode
}

export default function SectionContent({ title, children }: SectionContentProps){
  return (
    <section className="container py-10">
      <Heading level="2">{title}</Heading>
      {children}
    </section>
  )
}