import type { NavItem } from "@/types"
import { cn } from "@/lib/utils"
import Link from "next/link"

type NavigationProps = {
  items: NavItem[]
  direction?: 'col' | 'row'
  className?: string;
}

const directionClasses = {
  row: 'flex-row gap-10',
  col: 'flex-col gap-4'
}

export default function Navigation({ items, direction = 'row', className }: NavigationProps){
  return (
    <nav>
      <div className={cn(`max-w-275 flex ${directionClasses[direction]}`, className)}>
        {items.map(item => (
          <Link key={item.label} href={item.href}>{item.label}</Link>
        ))}
      </div>
    </nav>
  )
}