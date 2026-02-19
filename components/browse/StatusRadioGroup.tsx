import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

export default function StatusRadioGroup() {
  return (
    <RadioGroup defaultValue="open" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="open" id="r1" />
        <Label htmlFor="r1">เปิด</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="close" id="r2" />
        <Label htmlFor="r2">ปิด</Label>
      </div>
    </RadioGroup>
  );
}
