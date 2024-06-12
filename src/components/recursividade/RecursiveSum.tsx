// Uma função recursiva trabalha dividindo um problema complexo em diversas camadas de soluções
// O processo acontece por debaixo dos panos
// Os resultados das soluções vão sendo transportados para os próximos níveis, depois retornam pelo mesmo caminho, trazendo o resultado final

export const RecursiveSum = () => {
  const recursiveSumFunc = (n: number): number => {
    if(n <= 1){
      return 1;
    };

    return n + recursiveSumFunc(n - 1);
  };

  console.log(recursiveSumFunc(5));

  return(<></>);
};