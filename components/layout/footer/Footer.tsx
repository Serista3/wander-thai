import Logo from '@/components/ui/Logo';
import Navigation from '../navigation/Navigation';
import { defaultLinks } from '@/lib/links';
import Paragraph from '@/components/ui/Paragraph';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="py-9 bg-emerald-600 text-white">
      <div className="container">
        <Logo />
        <Navigation items={defaultLinks} className="mt-4 mb-6" />
        <Separator />

        {/* Copy right */}
        <div className="mt-6">
          <Paragraph className="text-base mt-3 mb-2 leading-7">
            จัดทำโดย นาย ธนภัทร มลิแก้ว นักศึกษาคณะเทคโนโลยีสารสนเทค รุ่น 21
            ของมหาลัยวิทยาลัยพระจอมเกล้าลาดกระบัง
          </Paragraph>
          <Paragraph className="text-gray-300">
            © 2026 WanderTher. Designed by Thanapat Malikaew.
          </Paragraph>
        </div>
      </div>
    </footer>
  );
}
