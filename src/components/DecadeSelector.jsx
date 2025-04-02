function DecadeSelector({ onSelect }) {
  const decades = [
    1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020,
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {decades.map((decade) => (
        <button
          key={decade}
          onClick={() => onSelect(decade)}
          className={`px-6 py-3 bg-amazonTimeline text-whiteTimeline border border-blackTimeline rounded-xl shadow-md hover:bg-blackTimeline hover:border-amazonTimeline hover:text-white transition-all transform hover:scale-150 active:scale-100`}
        >
          {decade}s
        </button>
      ))}
    </div>
  );
}

export default DecadeSelector;
