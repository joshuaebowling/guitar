import React from "react";

interface Props {
  note: string;
  intervals: { [key: string]: string };
  selectedNote: string | null;
}

const Fret: React.FC<Props> = ({ note, intervals, selectedNote }) => {
  return (
    <div className="fret">
      {note}
      {selectedNote && intervals[note]}
    </div>
  );
};

export default Fret;
