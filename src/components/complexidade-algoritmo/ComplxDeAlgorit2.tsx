
export const ComplxDeAlgorit2 = () => {
  const array = [1,0,11,0,21,0,201];
  const number = 1;

  const algoritmComplex = (vetor: number[], num: number) => {
    let i = 0;
    let j = 0;

    let a = 0;
    let b = 0;

    let result = 0;

    for(i; i < vetor.length; i++){ // O(n)
      if(vetor[i] === num){ // O(1)
        result++;
      };

      for(j; j < vetor.length; j++){ // O(n)
        if(vetor[j] === num + 10){ // O(1)
          result++;
        };
      };
    };

    i = 0;
    j = 0;

    for(i; i < vetor.length; i++){ // O(n)
      if(vetor[i] === num + 20){ // O(1)
        result++;
      };

      for(j; j < vetor.length; j++){ // O(n)
        if(vetor[j] === num + 200){ // O(1)
          result++;
        };
      };
    };

    console.log(result);
  };
  // Complexidade: O(n) * O(n) + O(n) * O(n) = O(n^2) + O(n^2)
  // Complexidade: O(n^2) + O(n^2) = 2*O(n^2)
  // Ignorar a constante 2 que multipla O
  // Complexidade: O(n^2)

  algoritmComplex(array, number);

  return(<></>);
};