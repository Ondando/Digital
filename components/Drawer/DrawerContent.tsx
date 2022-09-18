import React from 'react';

export default function DrawerContent() {
  return (
    <div className="flex flex-col gap-2 mt-4 w-52 ">
      <button type="button">
        <p>Video Games</p>
      </button>

      <button type="button">
        <p>Software</p>
      </button>

      <button type="button">
        <p>Gift</p>
      </button>
    </div>
  );
}
