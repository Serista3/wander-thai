import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from '../ui/combobox';
import { tags } from '@/lib/placeholder-data';

export default function AtmosphereMultiSelect() {
  const anchor = useComboboxAnchor();
  return (
    <Combobox multiple autoHighlight items={tags} defaultValue={[tags[0]]}>
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {(values) => (
            <>
              {values.map((value: string) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="เลือกบรรยากาศ" />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
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
