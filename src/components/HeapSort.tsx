export const HeapSort = () => {
  const array = [23, 67, 4, -8, 90, 54, 21, 85, 3, -1, 22, 4];

  const heapSort = (vetor: number[], leng: number) => {
    let i = 0;
    let aux = 0;

    const createHeap = (vetor: number[], i: number, f: number) => {
      let aux = vetor[i];
      let j = i * 2 + 1;

      while(j <= f){
        if(j < f){
          if(vetor[j] < vetor[j + 1]){
            j = j + 1;
          };
        };

        if(aux < vetor[j]){
          vetor[i] = vetor[j];
          i = j;
          j = 2 * i + 1;
        }else{
          j = f + 1;
        };
      };

      vetor[i] = aux;
    };

    for(i = Math.round((leng - 1) / 2); i >= 0; i--){
      createHeap(vetor, i, leng - 1);
      console.log(vetor);
    };

    for(i = leng - 1; i >= 1; i--){
      aux = vetor[0];
      vetor[0] = vetor[i];
      vetor[i] = aux;

      createHeap(vetor, 0, i - 1);
      console.log(vetor);
    };
  };
  
  heapSort(array, array.length);

  return(<></>);
};