export const useSayHello = () => {
  const sayHello = () => {
    console.log("say Hello From sayHello composable");
  };
 
  return {
    sayHello,
  };
};

