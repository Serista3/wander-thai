import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

type StatusRadioGroupProps = {
  value: string;
  onValueChange: (value: string) => void;
}

export default function StatusRadioGroup({ value, onValueChange }: StatusRadioGroupProps) {
  return (
    <RadioGroup defaultValue="เปิด" className="w-fit" value={value} onValueChange={onValueChange} name='status'>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="เปิด" id="r1" />
        <Label htmlFor="r1">เปิด</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="ปิด" id="r2" />
        <Label htmlFor="r2">ปิด</Label>
      </div>
    </RadioGroup>
  );
}
