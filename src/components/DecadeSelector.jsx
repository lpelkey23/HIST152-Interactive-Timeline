function DecadeSelector({ onSelect }) {
  const decades = [
    1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020,
  ];

  const delayClasses = [
    'delay-75',
    'delay-100',
    'delay-150',
    'delay-200',
    'delay-300',
    'delay-500',
    'delay-700',
    'delay-1000',
    'delay-[1200ms]',
    'delay-[1500ms]',
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {decades.map((decade, index) => (
        <button
          key={decade}
          onClick={() => onSelect(decade)}
          className={`px-6 py-3 bg-white text-blue-700 border border-blue-600 rounded-xl shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 animate-fade-in ${delayClasses[index % delayClasses.length]}`}
        >
          {decade}s
        </button>
      ))}
    </div>
  );
}

export default DecadeSelector;
