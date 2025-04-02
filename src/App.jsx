import './App.css';
import { useState } from 'react';
import DecadeSelector from './components/DecadeSelector';

function App() {
  const [selectedDecade, setSelectedDecade] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 drop-shadow">
          HIST152 Interactive Timeline
        </h1>
        <p className="text-lg text-gray-700 mb-10 italic">
          Explore key events from 1877 to the present — decade by decade.
        </p>

        {!selectedDecade ? (
          <>
            <DecadeSelector onSelect={setSelectedDecade} />
          </>
        ) : (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Viewing: {selectedDecade}s</h2>
            <button
              className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => setSelectedDecade(null)}
            >
              ⬅ Back to Decades
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
