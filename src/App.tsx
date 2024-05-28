import { Fragment, ReactNode, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { buttons } from './constants/buttons';
import { ElementTypes } from './types/ElementTypes';

type StateType = { id: string; element: ReactNode }[];

const initialState: StateType = [];

const reducer = (state: StateType, action: { type: ElementTypes }) => {
  switch (action.type) {
    case 'img':
      return [
        ...state,
        {
          id: uuidv4(),
          element: (
            <img
              className="absolute w-full h-full object-cover rounded-xl"
              src="https://wallpaperwaifu.com/wp-content/uploads/2023/05/bmw-m4-in-the-winter-thumb.jpg"
              alt="Car"
            />
          ),
        },
      ];

    case 'video':
      return [
        ...state,
        {
          id: uuidv4(),
          element: (
            <video
              className="absolute w-full h-full object-cover rounded-xl"
              controls
              autoPlay>
              <source
                src="https://persian13.cdn.asset.aparat.com/aparat-video/b16e1a13f7e86e9d432b121bd34fcdfe58539397-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjVkZTc2OGFjZjEwM2NjYTJmZjUzYmE1OWExN2YxNjA3IiwiZXhwIjoxNzE2ODU0OTYxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.oU1YM8msfqfkmuvB6F-wJsFvg9o69mJKMkfdJrrNyUA"
                type="video/mp4"
              />
            </video>
          ),
        },
      ];

    case 'p':
      return [
        ...state,
        {
          id: uuidv4(),
          element: (
            <p className="absolute text-white font-medium text-3xl">
              Paragraph has been added
            </p>
          ),
        },
      ];

    default:
      return state;
  }
};

function App() {
  const [addedElements, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-slate-900 h-[100vh] flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto grid grid-cols-3 gap-x-8 h-[500px]">
        {/* Added Elements */}
        <div className="col-span-2 border-2 border-dashed border-blue-500 rounded-xl p-4">
          <div className="flex items-center justify-center h-full relative">
            {addedElements.length > 0 ? (
              addedElements.map(({ id, element }) => (
                <Fragment key={id}>{element}</Fragment>
              ))
            ) : (
              <p className="text-white font-medium animate-pulse">Add an element</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col col-span-1 gap-y-8">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => dispatch({ type: btn.type })}
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
