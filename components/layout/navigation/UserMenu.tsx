import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TextAlignJustify, House, Globe, Contact, Library } from 'lucide-react';
import Link from 'next/link';

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size='icon' className="border-gray-400">
          <TextAlignJustify />
          <span className="hidden">เมนู</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-semibold">ผู้ใช้</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href="/user/my-collection" className="cursor-pointer">
              <Library />
              <span>รายการที่ชื่นชอบ</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-semibold">
            ส่วนการนำทาง
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href="/" className="cursor-pointer">
              <House />
              <span>หน้าแรก</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/browse" className="cursor-pointer">
              <Globe />
              <span>สำรวจและค้นหา</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/contact" className="cursor-pointer">
              <Contact />
              <span>ติดต่อเรา</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
