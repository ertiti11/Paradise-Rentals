
interface SliderProps {
  min: number;
  max: number;
  step: number;
  defaultValue: [number, number];
  onChange: (value: [number, number]) => void;
}

export function Slider({ min, max, step, defaultValue, onChange }: SliderProps) {
  return (
    <div className="relative w-full h-1 bg-gray-700 rounded-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue[0]}
        onChange={(e) => onChange([parseInt(e.target.value), defaultValue[1]])}
        className="absolute w-full h-1 bg-transparent appearance-none cursor-pointer"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue[1]}
        onChange={(e) => onChange([defaultValue[0], parseInt(e.target.value)])}
        className="absolute w-full h-1 bg-transparent appearance-none cursor-pointer"
      />
      <div className="absolute top-4 w-full flex justify-between text-sm text-gray-400">
        <span>{min}€</span>
        <span>{max}€</span>
      </div>
    </div>
  );
}