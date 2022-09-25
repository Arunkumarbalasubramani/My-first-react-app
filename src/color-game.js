import { useState } from "react";

function AddColor() {
  const [color, setColor] = useState("red");
  const [addColor, setNewColor] = useState("");
  const InitialColorList = ["red", "black", "green"];
  const [colorsList, setColorList] = useState(InitialColorList);
  const styles = {
    background: color,
  };
  return (
    <div>
      <input
        style={styles}
        placeholder="Enter any color"
        onChange={(event) => setColor(event.target.value)}
      />
      <button
        onClick={() => {
          setColorList([...colorsList, color]);
        }}
      >
        Add Color
      </button>

      <div className="colors-div">
        {colorsList.map((clr) => (
          <ColorBox color={clr} />
        ))}
      </div>
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    background: color,
    height: "50px",
    width: "250px",
    marginTop: "10px",
    border: "1px solid White",
  };
  return <div style={styles}> </div>;
}

export { AddColor, ColorBox };
