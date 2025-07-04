import React, { useState } from 'react';

/*
 results: array of pulled items (length 1 for single, 10 for multi)
 setShowApp: fn to switch screens (passed down from Index / App)
*/
export default function Gacha({ results = [], setShowApp }) {
  // ────────────────────────────────
  // local state to drive the flow
  // ────────────────────────────────
  const [index, setIndex] = useState(0); // which item we’re showing
  const [showSummary, setShowSummary] = useState(false); // true after last item

  const isSinglePull = results.length === 1;
  const currentItem = results[index];

  // ────────────────────────────────
  // continue‑button handler
  // ────────────────────────────────
  const handleContinue = () => {
    if (isSinglePull) {
      // single‑pull → straight back home
      setShowApp('home');
      return;
    }

    // multi‑pull (10)
    if (!showSummary) {
      if (index < results.length - 1) {
        // still more items to reveal
        setIndex(index + 1);
      } else {
        // last item just shown → switch to summary grid
        setShowSummary(true);
      }
    } else {
      // summary grid already shown → back home
      setShowApp('home');
    }
  };

  // ────────────────────────────────
  // render helpers
  // ────────────────────────────────
  const renderItemCard = (item) => (
    <div
      key={item.id}
      className={`p-4 border rounded text-center w-48 mx-auto mb-4
        ${item.rarity === 5 ? 'bg-yellow-200'
          : item.rarity === 4 ? 'bg-purple-200'
          : 'bg-gray-100'}`}
    >
      <p className="text-lg font-semibold">{item.name}</p>
      <p className="text-sm">{item.rarity}★</p>
    </div>
  );

  const renderSummaryGrid = () => (
    <div className="grid grid-cols-5 gap-4 my-4">
      {results.map(renderItemCard)}
    </div>
  );

  // ────────────────────────────────
  // JSX
  // ────────────────────────────────
  return (
    <div className="gacha-container" style={{ textAlign: 'center' }}>
      {results.length === 0 ? (
        <p>No pulls yet.</p>
      ) : showSummary ? (
        <>
          <h2>10‑Pull Summary</h2>
          {renderSummaryGrid()}
        </>
      ) : (
        <h2>{renderItemCard(currentItem)}</h2>
      )}

      <button
        className="mt-4 px-4 py-2 border rounded"
        onClick={handleContinue}
      >
        Continue
      </button>
      {results.length === 10 && !showSummary && (
        <button
            className="mt-2 ml-2 px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => setShowSummary(true)}
        >
            Skip
        </button>
        )}

    </div>
  );
}