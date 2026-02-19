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

type AtmosphereMultiSelectProps = {
  value: string[] | null;
  onValueChange: (value: string[] | null) => void;
}

export default function AtmosphereMultiSelect({ ...props }: AtmosphereMultiSelectProps) {
  const anchor = useComboboxAnchor();
  return (
    <Combobox multiple autoHighlight items={tags} defaultValue={[tags[0]]} {...props} name='tags'>
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
