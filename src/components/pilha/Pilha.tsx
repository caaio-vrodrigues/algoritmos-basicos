import { useState } from "react";

// LIFO 
// Last In, First Out
export const Pilha = () => {
  const [arrayPilha, setArrayPilha] = useState<number[] | []>([54, 8, 23]);

  const insertItem = (pilha: number[], item: number) => {
    let i = pilha.length - 1;
    let aux = 0;

    if(pilha.length === 0){
      pilha[0] = item;
    };

    if(pilha.length > 0){
      for(i; i >= 0; i--){
        aux = pilha[i];
        pilha[i + 1] = aux;
        pilha[i] = pilha[i - 1];
  
        if(i === 0){
          pilha[i] = item;
        };
      };
    };

    setArrayPilha(pilha);
    console.log(`Adicionou:`); console.log(arrayPilha)
  };

  const removePick = (pilha: number[]) => {
    let i = 0;
    const newPilha = [];

    for(i; i <= pilha.length - 2; i++){
      newPilha[i] = pilha[i+1];
    };

    setArrayPilha(newPilha);
  };

  console.log(arrayPilha);

  return(
  <div className={`flex p-4`}>
    <button onClick={() => insertItem(arrayPilha, arrayPilha.length + 4)}
      className={`bg-cyan-800 rounded-md p-1 mr-4`}>
    Add</button>
    <button onClick={() => removePick(arrayPilha)}
      className={`bg-cyan-800 rounded-md p-1`}>
    Remove/Pick</button>
  </div>);
};