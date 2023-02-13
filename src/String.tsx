import React from "react";
import Fret from "./Fret";

interface Props {
  intervals: { [key: string]: string };
  selectedNote: string | null;
  stringNumber: number;
}

const String: React.FC<Props> = ({ intervals, selectedNote, stringNumber }) => {
  const notesByString = {
    1: ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
    2: ["A", "A#", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"],
    3: ["D", "D#", "F", "F#", "G", "G#", "A", "A#", "C", "C#", "D"],
    4: ["G", "G#", "A#", "B", "C", "C#", "D", "D#", "F", "F#", "G"],
    5: ["B", "C", "C#", "D#", "E", "F", "F#", "G#", "A", "A#", "B"],
    6: ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"]
  };
  const notes = notesByString[stringNumber];

  return (
    <div className="string">
      {notes.map((note, index) => (
        <Fret
          key={index}
          note={note}
          intervals={intervals}
          selectedNote={selectedNote}
        />
      ))}
    </div>
  );
};

export default String;
