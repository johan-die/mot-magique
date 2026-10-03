import React from 'react';
import { Delete, Space } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function VirtualKeyboard({ onKeyPress, onBackspace, onSpace, uppercase = true }) {
  const rows = [
    ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'],
    ['w', 'x', 'c', 'v', 'b', 'n', 'é', 'è', 'à']
  ];

  const handleKey = (char) => {
    soundManager.playTile();
    onKeyPress(uppercase ? char.toUpperCase() : char.toLowerCase());
  };

  return (
    <div className="bg-amber-100/90 border-2 border-amber-300 rounded-3xl p-3 sm:p-4 shadow-lg max-w-2xl mx-auto my-3">
      <div className="flex flex-col gap-2">
        {rows.map((row, rIdx) => (
          <div key={rIdx} className="flex justify-center gap-1 sm:gap-2">
            {row.map((char) => {
              const displayChar = uppercase ? char.toUpperCase() : char.toLowerCase();
              return (
                <button
                  key={char}
                  type="button"
                  onClick={() => handleKey(char)}
                  className="w-8 h-10 sm:w-12 sm:h-12 bg-white hover:bg-amber-50 active:bg-amber-200 border-2 border-amber-400 text-amber-900 font-bold rounded-xl text-lg sm:text-xl shadow-[0_3px_0_#d97706] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center cursor-pointer select-none"
                >
                  {displayChar}
                </button>
              );
            })}
          </div>
        ))}

        {/* Bottom row: Space & Backspace */}
        <div className="flex justify-center gap-3 mt-1">
          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              onSpace();
            }}
            className="flex-1 max-w-xs h-10 sm:h-12 bg-white hover:bg-amber-50 active:bg-amber-200 border-2 border-amber-400 text-amber-900 font-bold rounded-xl text-sm sm:text-base shadow-[0_3px_0_#d97706] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Space className="w-5 h-5 text-amber-600" />
            <span>ESPACE</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              onBackspace();
            }}
            className="px-4 sm:px-6 h-10 sm:h-12 bg-rose-100 hover:bg-rose-200 border-2 border-rose-400 text-rose-800 font-bold rounded-xl text-sm sm:text-base shadow-[0_3px_0_#f43f5e] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Delete className="w-5 h-5" />
            <span>EFFACER</span>
          </button>
        </div>
      </div>
    </div>
  );
}
