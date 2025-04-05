// components/YearSelector.jsx

import Button from './Button';
import { exampleEvents } from './TimelineEvents';

export default function YearSelector({ decade, onEventSelect }) {
  const years = Array.from({ length: 10 }, (_, i) => decade + i);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col gap-6">
        {years.map((year) => (
          <div key={year} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{year}</h3>
            <div className="flex flex-wrap gap-3">
              {(exampleEvents[year] || []).map((event, idx) => (
                <Button key={idx} onClick={() => onEventSelect(event)} variant="default">
                  {event.title}
                </Button>
              ))}
              {!(exampleEvents[year]?.length > 0) && (
                <p className="text-gray-500 italic">No major events added yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
