// Neste exemplo encontraremos o fatorial de 5, simbolizado por: "5!";
  // 5! = 5 * 4 * 3 * 2 * 1 = 120 mesmo que ->
  // 5! = 5 * 4! = 120 mesmo que ->
  // 5! = 5 * 4 * 3! = 120 mesmo que...

export const Fatorial = () => {
  const fatorial = (n: number) => {
    let i = 2;
    let result = 1;

    if(n <= 1){
      console.log(1);
      return;
    };

    for(i; i <= n; i++){
      // console.log(i);
      console.log(`${i} X ${result} = ${result = i * result}`);
      console.log(result);
    };
  };

  fatorial(5);

  return(<></>);
};