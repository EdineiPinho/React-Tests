import React from "react";

class Produtos extends React.Component {
  constructor(props) {
    super(props)
    this.teste = 'Teste';
    this.state = {
      contar: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((state) => ({ contar: state.contar + 1 }))
  }

  componentDidMount() {
    // Ideal para fazer fetch
    console.log('Componente foi montado.');
  }

  componentDidUpdate() {
    console.log('Compoente foi atualizado.')
    document.title = this.state.contar;
  }

  componentWillUnmount() {
    console.log('Componente foi desmomentado')
  }

  render() {
    return (
      <div>
        <h1>Meus Produtos</h1>
        <p>{this.props.titulo}</p>
        <p>{this.teste}</p>
        <h2>{this.state.contar}</h2>
        <button onClick={() =>
          this.setState((state) => ({ contar: state.contar + 1 }))
        }>Somar +1</button>
        <button onClick={this.handleClick}>Handle Somar + 1</button>
      </div >)
  }
}

export default Produtos