import { buttons } from './constants/buttons';

function App() {
  return (
    <div className="bg-slate-900 h-[100vh] flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto grid grid-cols-3 gap-x-8 h-[500px]">
        {/* Created Element */}
        <div className="col-span-2 border-2 border-dashed border-blue-500 rounded-xl">
          <div className="flex items-center justify-center h-full p-4">
            <p className="text-white font-medium animate-pulse">Create an element</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col col-span-1 gap-y-8">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              className="btn">
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
