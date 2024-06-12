
export const ComplxDeAlgorit4 = () => {
  const array = [1,2,11,3,101];
  const array2 = [1,2,11,3,101];
  const number = 1;

  const algoritmComplex = (vetor: number[], vetor2: number[], num: number) => {
    let i = 0;
    let j = 0;
    let result = 0;

    for(i; i < vetor.length; i++){ // O(n)
      if(vetor[i] === num){ // O(1)
        result++;
      };

      for(j; j < vetor2.length; j++){ // O(m)
        if(vetor2[j] === num + 10){ // O(1)
          result++;
        };
      };
    };

    console.log(result);
  };
  // Complexidade: O(n) * O(m) 
  // Neste caso, temos apenas um termo: O(n) * O(m)
  // Há mais de um termo apenas quando existe a separação pelo sinal de +

  algoritmComplex(array, array2, number);

  return(<></>);
};