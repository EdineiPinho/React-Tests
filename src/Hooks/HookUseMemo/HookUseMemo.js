import React from 'react';
function operacaoLenta() {
  let c;
  for (let i = 0; i < 10000000; i++) {
    c = i + i / 10;
  }
  return c;
}
const HookUseMemo = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);
  return (
    <>
      <button onClick={() => setContar(contar + 1)}>Contador= {contar}</button>
    </>
  );
}
export default HookUseMemo;