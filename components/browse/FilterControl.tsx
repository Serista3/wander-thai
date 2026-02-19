"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import CategorySelect from "./CategorySelect";
import ProvinceSelect from "./ProvinceSelect";
import AtmosphereMultiSelect from "./AtmosphereMultiSelect";
import StatusRadioGroup from "./StatusRadioGroup";
import RatingSlider from "./RatingSlider";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterControl() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [budgetValue, setBudgetValue] = useState<number>(
    Number(searchParams.get("budget")) || 0,
  );
  const [categoryValue, setCategoryValue] = useState(
    searchParams.get("category") || "ทะเล",
  );
  const [provinceValue, setProvinceValue] = useState<string | null>(
    searchParams.get("province") || "นนทบุรี",
  );
  const [atmosphereValue, setAtmosphereValue] = useState<string[] | null>(
    searchParams.get("tags")?.split(",") || ["ผ่อนคลาย"],
  );
  const [statusValue, setStatusValue] = useState(
    searchParams.get("status") || "เปิด",
  );
  const [ratingValue, setRatingValue] = useState(
    searchParams
      .get("ratings")
      ?.split(",")
      .map((r) => Number(r)) || [2, 4],
  );

  const handleForm = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const search = new URLSearchParams(searchParams.toString());
    const formData = new FormData(e.currentTarget);

    const tags: string[] = [];
    const ratings: string[] = [];

    for (const [key, value] of formData.entries()) {
      const strValue = value.toString();

      if (key.includes("tags")) {
        tags.push(strValue);
      } else if (key.includes("rating")) {
        ratings.push(strValue);
      } else {
        if (strValue) {
          search.set(key, strValue);
        } else {
          search.delete(key);
        }
      }
    }

    if (tags.length > 0) {
      search.set("tags", tags.join(","));
    } else {
      search.delete("tags");
    }

    if (ratings.length > 0) {
      search.set("ratings", ratings.join(","));
    } else {
      search.delete("ratings");
    }

    replace(`/browse?${search.toString()}`);
  };

  return (
    <form
      onSubmit={handleForm}
      className="p-6 border border-gray-300 rounded-lg"
    >
      <FieldSet>
        <FieldLegend
          className="font-semibold text-xl"
          style={{
            fontSize: "20px",
          }}
        >
          กรองการค้นหา
        </FieldLegend>
        <FieldDescription>
          ค้นหาสถานที่ท่องเที่ยวที่คุณอยากไปด้วยระบบการกรองที่หลากหลาย
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="budget">งบประมาณ</FieldLabel>
            <Input
              id="budget"
              name="budget"
              type="number"
              autoComplete="off"
              placeholder="เงินที่คุณมี"
              className="text-sm"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBudgetValue(Number(e.target.value))
              }
              value={budgetValue}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="category">หมวดหมู่</FieldLabel>
            <CategorySelect
              value={categoryValue}
              onValueChange={setCategoryValue}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="province">จังหวัด</FieldLabel>
            <ProvinceSelect value={provinceValue} onChange={setProvinceValue} />
          </Field>
          <Field>
            <FieldLabel htmlFor="tag-input">บรรยากาศ</FieldLabel>
            <AtmosphereMultiSelect
              value={atmosphereValue}
              onValueChange={setAtmosphereValue}
            />
          </Field>
          <Field>
            <FieldLabel>สถานะ</FieldLabel>
            <StatusRadioGroup
              value={statusValue}
              onValueChange={setStatusValue}
            />
          </Field>
          <Field>
            <RatingSlider value={ratingValue} setValue={setRatingValue} />
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
