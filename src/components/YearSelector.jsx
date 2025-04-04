import Button from './Button';

function YearSelector({ decade }) {
  const years = Array.from({ length: 10 }, (_, i) => decade + i);

  return (
    <div className="w-full overflow-x-hidden pb-6">
      <div className="relative flex justify-evenly items-center px-6 py-16 w-full">
        {/* Timeline line */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-400 transform" />

        {years.map((decade) => {
          return (
            <div key={decade} className="flex flex-col items-center">
              <div className="absolute top-1/2 transform -translate-y-1/2 w-0.5 h-4 bg-emeraldTimeline shadow" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YearSelector;
