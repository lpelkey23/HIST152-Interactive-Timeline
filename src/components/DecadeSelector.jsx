import Button from './Button';

function DecadeSelector({ onSelect }) {
  const decades = [
    1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020,
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {decades.map((decade) => (
        <Button key={decade} onClick={() => onSelect(decade)} variant="default">
          {decade}s
        </Button>
      ))}
    </div>
  );
}

export default DecadeSelector;
