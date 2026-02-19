import { Label } from "../ui/label";
import { Slider } from "../ui/slider";

type RatingSliderProps = {
  value: number[];
  setValue: (value: number[]) => void
}

export default function RatingSlider({ value, setValue }: RatingSliderProps) {
  return (
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
        name="rating"
        min={0}
        max={5}
        step={0.5}
      />
    </div>
  );
}
