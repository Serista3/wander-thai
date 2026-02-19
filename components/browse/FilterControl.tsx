'use client';

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '../ui/input';
import { useState } from 'react';
import { Button } from '../ui/button';
import CategorySelect from './CategorySelect';
import ProvinceSelect from './ProvinceSelect';
import AtmosphereMultiSelect from './AtmosphereMultiSelect';
import StatusRadioGroup from './StatusRadioGroup';
import RatingGroup from './RatingSlider';

export default function FilterControl() {
  const [value, setValue] = useState([2, 4]);

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
            <CategorySelect />
          </Field>
          <Field>
            <FieldLabel htmlFor="province">จังหวัด</FieldLabel>
            <ProvinceSelect />
          </Field>
          <Field>
            <FieldLabel htmlFor="tag-input">บรรยากาศ</FieldLabel>
            <AtmosphereMultiSelect />
          </Field>
          <Field>
            <FieldLabel>สถานะ</FieldLabel>
            <StatusRadioGroup />
          </Field>
          <Field>
            <RatingGroup value={value} setValue={setValue} />
          </Field>
        </FieldGroup>
      </FieldSet>
      <Button
        type="submit"
        className="w-full mt-10 bg-emerald-500 hover:bg-emerald-600"
      >
        กรอง
      </Button>
    </form>
  );
}
