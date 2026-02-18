import FilterControl from "@/components/browse/FilterControl";
import Heading from "@/components/ui/Heading";

export default function BrowsePage(){
  return (
    <section className="container py-10">
      <Heading className="mb-8">สำรวจค้นหาสถานที่</Heading>
      <FilterControl />
    </section>
  )
}