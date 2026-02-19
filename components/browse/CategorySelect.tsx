import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { categories } from '@/lib/placeholder-data';

export default function CategorySelect() {
  return (
    <div>
      <Select>
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
