import { useState } from "react";

export const Inventory = () => {
  const [inv,setInv] = useState({
    books: 15,
    notebooks: 18,
    pens: 30,
  });

  const Add = (e) => {
    setInv({...inv,[e] : inv[e] + 1});
  }

  const Sub = (e) => {
    if(inv[e]<=0){
      return;
    }
    setInv({...inv,[e] : inv[e] - 1});
  }
  

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => Add('books')}>+</button>
        <button className="circlularButton" onClick={() => Sub('books')}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => Add('notebooks')}>+</button>
        <button className="circlularButton" onClick={() => Sub('notebooks')}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pens: </span>
        <button className="circlularButton" onClick={() => Add('pens')}>+</button>
        <button className="circlularButton" onClick={() => Sub('pens')}>-</button>
        <span>{inv.pens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens}
    </div>
  );
};