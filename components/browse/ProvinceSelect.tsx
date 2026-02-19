import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '../ui/combobox';
import { provinces } from '@/lib/placeholder-data';

export default function ProvinceSelect() {
  return (
    <Combobox items={provinces}>
      <ComboboxInput placeholder="เลือกจังหวัด" />
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
