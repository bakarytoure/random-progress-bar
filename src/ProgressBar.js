import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, title, color, greaterorless } = props;
  const containerStyles = {
    height: 19,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginTop: 10,
    //marginBottom: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    //padding: 5,
    paddingBottom: 2,
    color: "white",
    //fontWeight: "bold",
  };

  return (
    <div className="container mx-auto mt-5 pt-5">
      <h4 className="mb-0">
        {title} <span style={{ color }}> {`${completed}%`}</span>
        <strong>
          <span style={{ color }}>{greaterorless}</span>
        </strong>
      </h4>

      <div style={containerStyles}>
        <div style={fillerStyles}>
          {/* <span style={labelStyles}>{`${completed}%`}</span>*/}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
