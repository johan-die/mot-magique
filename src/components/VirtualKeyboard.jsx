import React from 'react';
import { Delete, Space } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function VirtualKeyboard({ onKeyPress, onBackspace, onDelete, onSpace, uppercase = true }) {
  const rows = [
    ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'],
    ['w', 'x', 'c', 'v', 'b', 'n', 'é', 'è', 'à', 'ç']
  ];

  const handleBackspaceAction = onBackspace || onDelete || (() => {});

  const handleKey = (char) => {
    soundManager.playTile();
    onKeyPress(uppercase ? char.toUpperCase() : char.toLowerCase());
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-2 p-1.5 min-[380px]:p-2 sm:p-3 bg-amber-100/95 border-2 border-amber-300 rounded-2xl sm:rounded-3xl shadow-md box-border">
      <div className="flex flex-col gap-1.5 sm:gap-2">
        {rows.map((row, rIdx) => (
          <div key={rIdx} className="flex justify-center gap-0.5 min-[360px]:gap-1 sm:gap-1.5 w-full">
            {row.map((char) => {
              const displayChar = uppercase ? char.toUpperCase() : char.toLowerCase();
              return (
                <button
                  key={char}
                  type="button"
                  onClick={() => handleKey(char)}
                  className="flex-1 min-w-0 max-w-[36px] min-[360px]:max-w-[40px] sm:max-w-[52px] h-9 min-[380px]:h-10 sm:h-12 bg-white hover:bg-amber-50 active:bg-amber-200 border sm:border-2 border-amber-400 text-amber-900 font-extrabold rounded-lg sm:rounded-xl text-xs min-[360px]:text-sm sm:text-xl shadow-[0_2px_0_#d97706] sm:shadow-[0_3px_0_#d97706] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center cursor-pointer select-none px-0 touch-manipulation"
                >
                  {displayChar}
                </button>
              );
            })}
          </div>
        ))}

        {/* Bottom row: Space & Backspace */}
        <div className="flex justify-center gap-1.5 sm:gap-3 mt-0.5 sm:mt-1 w-full">
          {onSpace && (
            <button
              type="button"
              onClick={() => {
                soundManager.playPop();
                onSpace();
              }}
              className="flex-1 max-w-[180px] sm:max-w-xs h-9 min-[380px]:h-10 sm:h-12 bg-white hover:bg-amber-50 active:bg-amber-200 border sm:border-2 border-amber-400 text-amber-900 font-bold rounded-lg sm:rounded-xl text-xs sm:text-base shadow-[0_2px_0_#d97706] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer px-2 select-none touch-manipulation"
            >
              <Space className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
              <span>ESPACE</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              handleBackspaceAction();
            }}
            className="px-3 sm:px-6 h-9 min-[380px]:h-10 sm:h-12 bg-rose-100 hover:bg-rose-200 border sm:border-2 border-rose-400 text-rose-800 font-bold rounded-lg sm:rounded-xl text-xs sm:text-base shadow-[0_2px_0_#f43f5e] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1 cursor-pointer shrink-0 select-none touch-manipulation"
          >
            <Delete className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>EFFACER</span>
          </button>
        </div>
      </div>
    </div>
  );
}
