import { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  defaultValue: [number, number];
  onChange: (value: [number, number]) => void;
}

export function Slider({ min, max, step, defaultValue, onChange }: SliderProps) {
  const [values, setValues] = useState<[number, number]>(defaultValue);

  const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(parseInt(e.target.value), values[1]); // Evitar que el mínimo sobrepase al máximo
    const updatedValues: [number, number] = [newValue, values[1]];
    setValues(updatedValues);
    onChange(updatedValues);
  };

  const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(parseInt(e.target.value), values[0]); // Evitar que el máximo sea menor que el mínimo
    const updatedValues: [number, number] = [values[0], newValue];
    setValues(updatedValues);
    onChange(updatedValues);
  };

  return (
    <div className="relative w-full">
      {/* Barra de fondo */}
      <div className="h-1 bg-gray-700 rounded-full relative">
        <div
          className="absolute h-1 bg-teal-500 rounded-full"
          style={{
            left: `${((values[0] - min) / (max - min)) * 100}%`,
            right: `${100 - ((values[1] - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>
      {/* Inputs de rango */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={values[0]}
        onChange={handleLeftChange}
        className="absolute w-full h-1 bg-transparent appearance-none cursor-pointer"
        style={{
          zIndex: values[0] <= values[1] ? 2 : 1,
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={values[1]}
        onChange={handleRightChange}
        className="absolute w-full h-1 bg-transparent appearance-none cursor-pointer"
        style={{
          zIndex: values[1] >= values[0] ? 2 : 1,
        }}
      />
      {/* Etiquetas de valores */}
      <div className="flex justify-between mt-4 text-sm text-gray-400">
        <span>{values[0]}€</span>
        <span>{values[1]}€</span>
      </div>
    </div>
  );
}
