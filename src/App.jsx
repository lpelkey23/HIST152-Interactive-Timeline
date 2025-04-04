import './App.css';
import { useState } from 'react';
import DecadeSelector from './components/DecadeSelector';
import Button from './components/Button';
import YearSelector from './components/YearSelector';

function App() {
  const [selectedDecade, setSelectedDecade] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6">
      {/* Centered heading and intro text */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-emeraldTimeline mb-4 drop-shadow">
          HIST152 Interactive Timeline
        </h1>
        <p className="text-lg text-blackTimeline mb-10 italic">
          Explore key events from 1877 to the present — decade by decade.
        </p>
      </div>

      {!selectedDecade ? (
        <div className="w-full">
          <DecadeSelector onSelect={setSelectedDecade} />
        </div>
      ) : (
        <div className="w-full mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-redTimeline">Viewing: {selectedDecade}s</h2>

          <YearSelector decade={selectedDecade} />

          <Button variant="default" onClick={() => setSelectedDecade(null)}>
            ⬅ Back to Decades
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
