import Button from './Button';

function DecadeSelector({ onSelect }) {
  const decades = [
    1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020,
  ];

  return (
    <div className="w-full overflow-x-hidden pb-6">
      <div className="relative flex justify-evenly items-center px-6 py-16 w-full">
        {/* Timeline line */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-400 transform" />

        {decades.map((decade, index) => {
          const isAbove = index % 2 === 0;
          return (
            <div key={decade} className="flex flex-col items-center">
              {/* Button above or below */}
              {isAbove && (
                <Button onClick={() => onSelect(decade)} variant="decade" className="mb-20">
                  {decade}s
                </Button>
              )}

              {/* Dot on the timeline */}
              <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-emeraldTimeline rounded-full shadow" />

              {/* Button below if not above */}
              {!isAbove && (
                <Button onClick={() => onSelect(decade)} variant="decade" className="mt-20">
                  {decade}s
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DecadeSelector;
