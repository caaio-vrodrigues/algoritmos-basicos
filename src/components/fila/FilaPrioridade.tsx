import { useState } from "react";

export const FilaPrioridade = () => {
  const [arrayFila, setArrayFila] = useState<number[] | []>([60, 48, 5, 9]);

  const insertItem = (fila: number[], item: number) => {
    if(fila.length === 0 || item < 60){
      fila[fila.length] = item;
      setArrayFila(fila);

      console.log(arrayFila);
      return;
    };

    if(fila.length > 0 && item >= 60){
      let i = fila.length - 1;
      let aux = 0;

      for(i; i >= 0; i--){
        if(fila[i] < 60){
          aux = fila[i];
          fila[i+1] = aux;

          if(fila[i-1] >= 60 || i === 0){
            fila[i] = item;
            break;
          };
        };
        
        if(fila[i] >= 60){
          fila[i+1] = item;
        };
      };

      setArrayFila(fila);
      console.log(arrayFila);
    };
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
        <button onClick={() => insertItem(arrayFila, 80)}
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