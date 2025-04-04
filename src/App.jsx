import './App.css';
import { useState } from 'react';
import DecadeSelector from './components/DecadeSelector';
import YearSelector from './components/YearSelector';
import EventViewer from './components/EventViewer';
import Button from './components/Button';

function App() {
  const [selectedDecade, setSelectedDecade] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
        <DecadeSelector onSelect={setSelectedDecade} />
      ) : !selectedEvent ? (
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-redTimeline">Viewing: {selectedDecade}s</h2>
          <YearSelector decade={selectedDecade} onEventSelect={setSelectedEvent} />
          <Button onClick={() => setSelectedDecade(null)}>⬅ Back to Decades</Button>
        </div>
      ) : (
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-redTimeline">{selectedEvent.title}</h2>
          <EventViewer event={selectedEvent} />
          <div className="space-x-2">
            <Button onClick={() => setSelectedEvent(null)}>⬅ Back to Events</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
