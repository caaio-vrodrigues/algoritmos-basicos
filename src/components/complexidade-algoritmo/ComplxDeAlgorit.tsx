// Constantes
// O(1) "Constante, deve ser ignorado"
// "Comparações são constantes"

export const ComplexDeAlgorit = () => {
  const array = [1,2,11,3,101];
  const number = 1;

  const algoritmComplex = (vetor: number[], num: number) => {
    let i = 0;
    let j = 0;
    let k = 0;
    let result = 0;

    for(i; i < vetor.length; i++){ // O(n)
      if(vetor[i] === num){ // O(1)
        result++;
      };

      for(j; j < vetor.length; j++){ // O(n)
        if(vetor[j] === num + 10){ // O(1)
          result++;
        };

        for(k; k < vetor.length; k++){ // O(n)
          if(vetor[k] === num + 100){ // O(1)
            result++;
          };
        };
      };
    };

    console.log(result);
  };
  // Complexidade: O(n) * O(n) * O(n) = O(n^3)

  algoritmComplex(array, number);

  return(<></>);
};