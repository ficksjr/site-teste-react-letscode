import React from "react";

const api = ('1', '2', '3', '4', '5', '6');
const getListaCompras = () => ([api]) 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaCompras: []
    }
  }
  
  componentDidMount() {
  /*
   * Vamos supor que api é global e
   * o método abaixo retorna a lista de
   * compras em forma de array
   */
    const lista = api.getListaCompras(); 
    this.setState({ lista });
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.listaCompras.map(compra => <li>{compra.nome}</li>)}
        </ul>
      </div>
    )
    
  }
}

export default App