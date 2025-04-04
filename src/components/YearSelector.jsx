// components/YearSelector.jsx

const exampleEvents = {
  1969: [
    {
      title: 'Apollo 11 Moon Landing',
      type: 'video',
      src: 'https://www.youtube.com/embed/cwZb2mqId0A',
    },
    {
      title: 'Woodstock Music Festival',
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Woodstock_redmond_stage.JPG/800px-Woodstock_redmond_stage.JPG',
    },
  ],
  1963: [
    {
      title: 'March on Washington',
      type: 'video',
      src: 'https://www.youtube.com/embed/I47Y6VHc3Ms',
    },
  ],
};

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
                <button
                  key={idx}
                  onClick={() => onEventSelect(event)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                >
                  {event.title}
                </button>
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
