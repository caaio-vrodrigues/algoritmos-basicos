import { useState } from "react";

// FIFO 
// First In, First Out
export const Fila = () => {
  const [arrayFila, setArrayFila] = useState<number[] | []>([48, 5, 9]);

  const insertItem = (fila: number[], item: number) => {
    fila[fila.length] = item;
    setArrayFila(fila);
    console.log(arrayFila);
  };

  const removeItem = (fila: number[]) => {
    let i = 1;
    const newFila: number[] = [];

    if(fila.length <= 1){
      setArrayFila([]);
    };

    if(fila.length > 1){
      for(i; i <= fila.length - 1; i++){
        newFila[newFila.length] = fila[i];
      };
      setArrayFila(newFila);
    };
  };

  console.log(arrayFila);

  return(<>
    <div className={`flex`}>
      <div className="p-4">
        <button onClick={() => insertItem(arrayFila, arrayFila.length + 4)}
          className={`bg-emerald-800 p-1 rounded-md mr-4`}>
        Add</button>
      </div>
      <div className="p-4">
        <button onClick={() => removeItem(arrayFila)}
          className={`bg-emerald-800 p-1 rounded-md`}>
        Remove/Pick</button>
      </div>
    </div>
  </>);
};