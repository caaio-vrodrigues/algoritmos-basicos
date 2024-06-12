

export const ComplxDeAlgorit3 = () => {
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

    for(i; i < vetor.length; i++){ // O(n)
      if(vetor[i] === num + 20){ // O(1)
        result++;
      };
    };

    i = 0;

    for(i; i < vetor.length; i++){ // O(n)
      if(vetor[i] === num + 200){ // O(1)
        result++;
      };
    };

    console.log(result + result);
  };
  // Complexidade: O(n) * O(n) + O(n) + O(n) = O(n^2) + 2*O(n)
  // Ignorar a constatnte 2 que multiplica O
  // Complexidade: O(n^2) + O(n)
  // Manter apenas o maior termo
  // Complexidade: O(n^2)

  algoritmComplex(array, number);
  return (<></>);
};