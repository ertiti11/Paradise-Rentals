import { Slider } from "./Slider";
import { useState, useEffect } from "react";
import { getTiposBarcos } from "../utils/api";

interface FiltersProps {
  onPriceChange: (value: [number, number]) => void;
  onLengthChange: (value: number) => void;
  onTypeChange: (types: string[]) => void;
  onCapacityChange: (value: [number, number]) => void;
}

export default function Filters({
  onPriceChange,
  onLengthChange,
  onTypeChange,
  onCapacityChange,
}: FiltersProps) {
  const [boatTypes, setBoatTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [capacityRange, setCapacityRange] = useState<[number, number]>([1, 50]);

  useEffect(() => {
    getTiposBarcos().then((types) =>
      setBoatTypes(types.map((type) => type.tipo))
    );
  }, []);

  const handleTypeChange = (type: string, isChecked: boolean) => {
    const updatedTypes = isChecked
      ? [...selectedTypes, type]
      : selectedTypes.filter((t) => t !== type);
    setSelectedTypes(updatedTypes);
    onTypeChange(updatedTypes);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg space-y-6">
      <div>
        <h3 className="text-white font-semibold mb-3">Tipo de barco</h3>
        <div className="space-y-2">
          {boatTypes.map((type) => (
            <label key={type} className="flex items-center text-gray-300">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-teal-500 rounded border-gray-700 bg-gray-800"
                onChange={(e) => handleTypeChange(type, e.target.checked)}
              />
              <span className="ml-2">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-3">Precio por día</h3>
        <Slider
          min={0}
          max={2000}
          step={50}
          defaultValue={priceRange}
          onChange={(value) => {
            setPriceRange(value);
            onPriceChange(value);
          }}
        />
      </div>

      <div>
        <h3 className="text-white font-semibold mb-3">Número de personas</h3>
        <Slider
          min={1}
          max={50}
          step={1}
          defaultValue={capacityRange}
          onChange={(value) => {
            setCapacityRange(value);
            onCapacityChange(value);
          }}
        />
      </div>

      <div>
        <h3 className="text-white font-semibold mb-3">Largo del barco</h3>
        <Slider
          min={5}
          max={100}
          step={5}
          defaultValue={[5, 100]}
          onChange={(value) => onLengthChange(value[1])}
        />
      </div>
    </div>
  );
}
