export const ShellSort = () => {
  const array = [10, 7, 2, 1, 7, 6, 9, 8, 3, 4, 5, 2, 3, 4, 5];

  const valorH = (vetor: number[]) => {
    // Passo 1
    // "h" representa a distância inicial entre os itens comparados
    // existe um valor ideal para a distância inicial representada por "h"
    // o modelo da função para encontrar "h" encontra-se na pasta "facul -> shell-sort"
    // o primeiro passo para saber qual é o valor de "h" é encontrar o valor da potência "k" que eleva o número "3"
    let k = Math.log(vetor.length + 1) / Math.log(3);
    k = Math.floor(k+0.5);

    // Passo 2
    // Utilizar o valor de k para encontrar o valor de h
    const h = (Math.pow(3, k) -1) / 2;

    return(h);
  };

  const sheelSort = (vetor: number[], distanciaEntrecomparacao: number) => {
    let h = distanciaEntrecomparacao;
    let i = 0;
    let j = 0;
    let aux = 0;

    let comparacoes = 0;
    let trocas = 0;
    
    while(h > 0){
      for(i = 0; i < vetor.length - h; i++){
        // comparacoes++;
        if(vetor[i] > vetor[i+h]){
          // trocas++;
          aux = vetor[i+h];
          vetor[i+h] = vetor[i];
          vetor[i] = aux;

          j = i - h;
          while(j >= 0){
            // comparacoes++;
            if(aux < vetor[j]){
              // trocas++;
              vetor[j+h] = vetor[j];
              vetor[j] = aux;
            }else{break};

            j = j - h;
          };
        };
      };

      h = (h - 1) / 3;
    }; // console.log(`FIM ----------------- comparações: ${comparacoes}, trocas: ${trocas}`);
  };

  sheelSort(array, valorH(array));

  return(<></>);
};