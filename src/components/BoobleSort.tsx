
export const BoobleSort = () => {
  const array = [3, 1, 2, 4, 3];
  let i = 0;
  let j = 0;
  let aux = 0;

  const bubbleSort = (vetor: number[], leng: number) => {
    for(i; i < leng; i++){ // O(n)
      for(j; j < leng - i -1; j++){ // O(n)
        if(vetor[j] > vetor[j + 1]){ // O(1)
          aux = vetor[j + 1];
          vetor[j + 1] = vetor[j];
          vetor[j] = aux;
        };

        console.log(array);
      };
    };
  };
  // Complexidade: O(n) * O(n) = O(n^2)

  bubbleSort(array, array.length);

  return(<></>);
};