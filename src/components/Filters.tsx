import { Slider } from './Slider';

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
  onCapacityChange 
}: FiltersProps) {
  const boatTypes = ['Motor', 'Velero', 'Catamarán'];

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
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  onTypeChange(isChecked ? [type] : []);
                }}
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
          max={1000}
          step={50}
          defaultValue={[0, 1000]}
          onChange={(value) => onPriceChange(value as [number, number])}
        />
      </div>

      <div>
        <h3 className="text-white font-semibold mb-3">Número de personas</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min="1"
            max="12"
            className="w-16 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-white"
            onChange={(e) => onCapacityChange([parseInt(e.target.value), parseInt(e.target.value)])}
          />
          <span className="text-gray-400">personas</span>
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-3">Largo del barco</h3>
        <div className="flex items-center space-x-2">
          <input
            type="range"
            min="5"
            max="50"
            className="w-full"
            onChange={(e) => onLengthChange(parseInt(e.target.value))}
          />
          <span className="text-gray-400 w-12">m</span>
        </div>
      </div>
    </div>
  );
}