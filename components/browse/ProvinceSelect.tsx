import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '../ui/combobox';
import { provinces } from '@/lib/placeholder-data';

type ProvinceSelectProps = {
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function ProvinceSelect({ value, onChange }: ProvinceSelectProps) {
  return (
    <Combobox items={provinces} value={value} onValueChange={onChange} name='province'>
      <ComboboxInput placeholder="เลือกจังหวัด" style={{
        fontSize: '14px'
      }} />
      <ComboboxContent>
        <ComboboxEmpty>ไม่พบเจอจังหวัด</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
