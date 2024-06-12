
export const SelectionSort = () => {
  const array = [64, 25, 12, 22, 11];
  let i = 0;
  let j = 0;
  let aux = 0;

  let moves = 0;

  const selectionSort = (vetor: number[], leng: number) => {
    for(i; i < leng; i++){ // O(n)
      moves++;
      for(j = i + 1; j <= leng; j++){ // O(n)
        
        if(vetor[j] < vetor[i]){ // O(1)
          aux = vetor[j];
          vetor[j] = vetor[i];
          vetor[i] = aux;
        };
      };

      console.log(vetor);
      console.log(`Movimentações: ${moves}`)
    };
  }; 
  // Complexidade: O(n) * O(n) = O(n^2)

  selectionSort(array, array.length - 1);

  return(
    <div>
      Hello World!
    </div>
  );
};