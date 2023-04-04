import React from 'react'
import './Produto.css'

const Produto = () => {
  const [ativar, setAtivar] = React.useState(true);

  function geradorDeUltimaPosicao(item) {
    const tamanho = item.length;
    return tamanho - 1;
  }

  function handleClick({ target }) {
    const button = target.id;
    const posicao = geradorDeUltimaPosicao(button);
    const numeroPosicao = button[posicao];
    const div = document.querySelectorAll('div');
    if (ativar) {
      div[numeroPosicao].style.display = "block";
      setAtivar(!ativar);
    } else {
      div[numeroPosicao].style.display = "none";
      setAtivar(!ativar);
    }
  }

  return (
    <>
      <button id='button1' onClick={handleClick}>Ativar</button>
      <div id='produto1' className='animeLeft' style={{ display: 'none' }}>
        <h2>Produto 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illo corporis perferendis quis temporibus laboriosam quisquam dolore at deserunt quos quae debitis ipsum molestias quia, voluptatem dignissimos distinctio. Vitae, tempora!</p>
      </div>
      <br />
      <button id='button2' onClick={handleClick}>Ativar</button>
      <div id='produto2' className='animeDown' style={{ display: 'none' }}>
        <h2>Produto 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illo corporis perferendis quis temporibus laboriosam quisquam dolore at deserunt quos quae debitis ipsum molestias quia, voluptatem dignissimos distinctio. Vitae, tempora!</p>
      </div>
      <br />
      <button id='button3' onClick={handleClick}>Ativar</button>
      <div id='produto3' className='animeScale' style={{ display: 'none' }}>
        <h2>Produto 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illo corporis perferendis quis temporibus laboriosam quisquam dolore at deserunt quos quae debitis ipsum molestias quia, voluptatem dignissimos distinctio. Vitae, tempora!</p>
      </div>
    </>
  )
}

export default Produto