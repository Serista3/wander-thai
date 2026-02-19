import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

import { MapPin, PhoneCall, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="container py-10 mb-5">
      <Heading className="mb-8">ติดต่อเรา</Heading>
      <address className="flex flex-col gap-8 not-italic">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Heading level="3" className="flex items-center gap-2">
              <MapPin />
              <span>ที่อยู่</span>
            </Heading>
            <Paragraph>
              199/76 ซ.3/3 หมู่บ้าน Golden Town รัตนาธิเบศร์ บางบัวทอง
              บางรักใหญ่ นนทบุรี 11110
            </Paragraph>
          </div>
          <div className="flex flex-col gap-2">
            <Heading level="3" className="flex items-center gap-2">
              <PhoneCall />
              <span>เบอร์โทรศัพท์</span>
            </Heading>
            <Paragraph>064-951-5415</Paragraph>
          </div>
          <div className="flex flex-col gap-2">
            <Heading level="3" className="flex items-center gap-2">
              <Mail />
              <span>อีเมล</span>
            </Heading>
            <Paragraph>stacla5282@gmail.com</Paragraph>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.469890892204!2d100.42909077557869!3d13.870828586533534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2900390134fdf%3A0x63838439bc14bc3d!2z4LmC4LiB4Lil4LmA4LiU4LmJ4LiZ4LiX4Liy4Lin4LiZ4LmMIOC4o-C4seC4leC4meC4suC4mOC4tOC5gOC4muC4qOC4o-C5jC3guKrguJbguLLguJnguLXguKPguJbguYTguJ_guJ_guYnguLLguJrguLLguIfguJ7guKXguLk!5e0!3m2!1sth!2sth!4v1771512141078!5m2!1sth!2sth"
          className="max-w-200 h-100 rounded-lg border border-gray-500"
          style={{
            border: 0,
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </address>
    </section>
  );
}
