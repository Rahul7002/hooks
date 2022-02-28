import React, { useState } from "react";

const ArrayMap = () => {
  const [items, setItem] = useState([]);
  let fruit=['apple','banana','orange']
  console.log('fruit',Array.isArray( fruit))
  const addItem = () => {
    setItem([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div className="ArrayMap">
      <h1>ArrayMap</h1>
      <button onClick={addItem}>Add item</button>
      <ul>
          {
              items.map(item=>(
                  <li key={item.id}> {item.value}</li>
              ))

          }
          {
            fruit.map(fruit=>(
                <h1 style={{color:'green'}}>{fruit}</h1>
                ))
          }
      </ul>
    </div>
  );
};

export default ArrayMap;
