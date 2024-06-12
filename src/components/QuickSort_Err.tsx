export const QuickSort = () => {
  const array = [4, 2, 8, 7, 1, 5, 3, 6]; // Funciona apenas para essa sequência de números.

  const quickSort = (vetor: number[], startPos: number, endPos: number): any => {
    let pivot = vetor[startPos];
    let left = startPos;
    let right = endPos;
    let aux = 0;
    let first = true;

    while(left <= right){ // O(n)
      while(vetor[left] < pivot){ // O(n)
        left++;
      };
  
      while(vetor[right] >= pivot){ // O(n)
        right--;
      };

      if(left <= right){ // O(1)
        aux = vetor[right];
        vetor[right] = vetor[left];
        vetor[left] = aux;

        left++;
        right--;
      };
    };
  
    if(startPos < right && first){ // O(1)
      quickSort(vetor, startPos, right);

      if(right < left){ // O(1);
        first = false;
        right = vetor.length - 1;
      };
    };

    if(!first){ // O(1)
      quickSort(vetor, left + 1, right);
    };

    return vetor;
  };

  console.log(quickSort(array, 0, array.length - 1));

  return(<></>);
};