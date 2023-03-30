import React from 'react';

const set1 = new Set();
const set2 = new Set();

const Product = () => {
  const func1 = () => {
    console.log('Test');
  };
  const func2 = React.useCallback(() => {
    console.log('Test');
  }, []);

  set1.add(func1);
  set1.add(func2);
  console.log("set1: ", set1);
  console.log("set2: ", set2);

  return (
    <>
      <p onClick={func1}>Product 1</p>
      <p onClick={func2}>Product 2</p>
    </>
  )
}

const HookUseCallbackSample2 = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Product />
      <button onClick={() => setContar(contar + 1)}>Contador: {contar}</button>
    </ div>
  );
}

export default HookUseCallbackSample2;