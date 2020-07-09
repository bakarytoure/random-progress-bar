import React from "react";

function Carre() {
  const [myinput, setImput] = React.useState(0);
  const carreofAra = (c) => {
    //c.preventDefault();
    const result = c * c;
    return result;
  };
  const handleChange = (e) => e.preventDefault();
  return (
    <div>
      <form
        className=" container w-50 mx-auto bg-warning"
        onClick={handleChange}
      >
        <label className=" container mx-auto">Choisisser votre nombre</label>
        <br />
        <input
          className=" container w-50 mx-auto"
          type="number"
          value={myinput}
          onChange={(e) => setImput(e.target.value)}
        />

        {/*<input type="submit" onClick={carreofAra(myinput)} />*/}
        <p>
          {myinput === ""
            ? `Choisi un nombre s'il te plait`
            : `Le carré de ${myinput} est ${carreofAra(myinput)}`}
        </p>
      </form>
    </div>
  );
}

export default Carre;
