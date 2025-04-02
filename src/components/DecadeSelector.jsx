const decades = [
  1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020,
];

function DecadeSelector({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {decades.map((decade) => (
        <button
          key={decade}
          onClick={() => onSelect(decade)}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          {decade}s
        </button>
      ))}
    </div>
  );
}

export default DecadeSelector;
