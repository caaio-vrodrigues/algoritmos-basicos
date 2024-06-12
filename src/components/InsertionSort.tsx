
export const InsertionSort = () => {
  const array = [3, 1, 2, 1, 4, 1, 3];
  let i = 0;
  let j = 0;
  let aux = 0;

  

  const insertionSort = (vetor: number[], leng: number) => {
    for(i; i < leng - 1; i++){
      if(vetor[i] > vetor[i+1]){
        aux = vetor[i+1];
        vetor[i+1] = vetor[i];
        vetor[i] = aux;

        j = i - 1;
        while(j >= 0){
          if(aux < vetor[j]){
            vetor[j+1] = vetor[j];
            vetor[j] = aux;
          }else{
            break;
          };

          j = j - 1;
        };
      };
    };
    console.log(vetor);
  };

  insertionSort(array, array.length);

  return(<></>);
};