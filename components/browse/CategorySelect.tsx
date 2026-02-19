import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { categories } from '@/lib/placeholder-data';

type CategorySelectProps = {
  value: string;
  onValueChange: (value: string) => void;
}

export default function CategorySelect({ ...props }: CategorySelectProps) {
  return (
    <div>
      <Select {...props} name='category'>
        <SelectTrigger>
          <SelectValue placeholder="เลือกหมวดหมู่" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.map((category) => (
              <SelectItem value={category.title} key={`${category.id}`}>
                {category.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
