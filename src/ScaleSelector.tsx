import React, { useState } from "react";

interface Props {
  setSelectedNote: (note: string) => void;
}

const ScaleSelector: React.FC<Props> = ({ setSelectedNote }) => {
  const [selectedNote, setNote] = useState<string | null>(null);
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNote(event.target.value);
    setSelectedNote(event.target.value);
  };

  return (
    <div>
      <label>Select Root Note:</label>
      <select value={selectedNote} onChange={handleChange}>
        <option value="" disabled>
          --Select--
        </option>
        {notes.map((note, index) => (
          <option key={index} value={note}>
            {note}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ScaleSelector;
