import React, { useState } from "react";
export const Radius = () => {
  const [radius, setRadius] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <div className="input" style={{ justifyContent: "center" }}>
        <button onClick={() => setRadius(radius + 100)}>Radius+</button>
        <button onClick={() => setRadius(radius - 100)}>Radius-</button>
      </div>
      <br />
      <div className="output" style={{ borderRadius: radius }}>
        <br />

        <h3>Assignment-10</h3>
      </div>
    </div>
  );
};
