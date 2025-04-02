import Button from './Button';

function DecadeSelector({ onSelect }) {
  const decades = [
    1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020,
  ];

  return (
    <div className="w-full overflow-x-auto pb-6">
      <div className="relative flex items-center justify-between px-6 py-10 w-[2000px] max-w-none">
        {/* Timeline line */}
        <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-400 z-0" />

        {decades.map((decade) => (
          <div key={decade} className="relative flex flex-col items-center z-10">
            {/* Dot on timeline */}
            <div className="w-4 h-4 bg-emeraldTimeline rounded-full shadow mb-2" />
            <Button
              onClick={() => onSelect(decade)}
              variant="default"
              className="whitespace-nowrap text-xs"
            >
              {decade}s
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DecadeSelector;
