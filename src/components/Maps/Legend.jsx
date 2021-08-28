import React from "react";

const Legend = ({ legendItems }) => {
  return (
    <div
      style={{
        display: "flex",
        alignment: "stretch",
      }}
    >
      {legendItems.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignItems: "center", //vertical
            justifyContent: "center", //horizontal
            color: item.textColor,
            height: "10vh",
            fontWeight: "bolder",
            fontSize: "1em",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
