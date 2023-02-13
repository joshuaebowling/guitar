import React, { useState } from "react";
import String from "./String";
import ScaleSelector from "./ScaleSelector";

const Fretboard = () => {
  const [selectedScale, setSelectedScale] = useState("");
  const [intervals, setIntervals] = useState({});
  const majorScaleIntervals = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7"
  };
  const minorScaleIntervals = {
    1: "1",
    2: "2",
    3: "b3",
    4: "4",
    5: "5",
    6: "b6",
    7: "b7"
  };

  const setScale = (scale) => {
    setSelectedScale(scale);
    if (scale === "Major") {
      setIntervals(majorScaleIntervals);
    } else if (scale === "Minor") {
      setIntervals(minorScaleIntervals);
    }
  };

  return (
    <div className="fretboard">
      <ScaleSelector setScale={setScale} />
      <String
        stringNumber={1}
        intervals={intervals}
        selectedScale={selectedScale}
      />
      <String
        stringNumber={1}
        intervals={intervals}
        selectedScale={selectedScale}
      />
      {/* <String intervals={intervals} selectedScale={selectedScale} />
      <String intervals={intervals} selectedScale={selectedScale} />
      <String intervals={intervals} selectedScale={selectedScale} />
      <String intervals={intervals} selectedScale={selectedScale} /> */}
    </div>
  );
};

export default Fretboard;
