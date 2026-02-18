'use client';

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
  ComboboxInput,
  useComboboxAnchor,
} from '@/components/ui/combobox';
import { Input } from '../ui/input';
import { categories, tags, provinces } from '@/lib/placeholder-data';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { Button } from '../ui/button';

export default function FilterControl() {
  const anchor = useComboboxAnchor();
  const [value, setValue] = useState([2, 4])

  return (
    <form className="p-6 border border-gray-300 rounded-lg">
      <FieldSet>
        <FieldLegend className="font-semibold">กรองการค้นหา</FieldLegend>
        <FieldDescription>
          ค้นหาสถานที่ท่องเที่ยวที่คุณอยากไปด้วยระบบการกรอง
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="budget">งบประมาณ</FieldLabel>
            <Input id="budget" autoComplete="off" placeholder="เงินที่คุณมี" />
          </Field>
          <Field>
            <FieldLabel htmlFor="category">หมวดหมู่</FieldLabel>
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
          </Field>
          <Field>
            <FieldLabel htmlFor="province">จังหวัด</FieldLabel>
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
          </Field>
          <Field>
            <FieldLabel htmlFor="tag-input">บรรยากาศ</FieldLabel>
            <Combobox
              multiple
              autoHighlight
              items={tags}
              defaultValue={[tags[0]]}
            >
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
          </Field>
          <Field>
            <FieldLabel>สถานะ</FieldLabel>
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
          </Field>
          <Field>
            <div className="mx-auto grid w-full max-w-xs gap-3">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="slider-demo-temperature">คะแนนรีวิว</Label>
                <span className="text-muted-foreground text-sm">
                  {value.join(', ')}
                </span>
              </div>
              <Slider
                id="slider-demo-temperature"
                value={value}
                onValueChange={setValue}
                min={0}
                max={5}
                step={0.5}
              />
            </div>
          </Field>
        </FieldGroup>
      </FieldSet>
      <Button type='submit' className='w-full mt-10 bg-emerald-500 hover:bg-emerald-600'>
        กรอง
      </Button>
    </form>
  );
}
