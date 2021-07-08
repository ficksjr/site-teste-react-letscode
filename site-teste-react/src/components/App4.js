import React from "react";

class App4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {nome: undefined, txtNome: ''};
    }

    changeName = (event)=>{
        this.setState({
            nome: event.target.value
        })
    }

    render(){
        if (!this.state.nome){return (<>Nome: <input type="text" value={this.state.nome} onChange={this.changeName}></input></>);}
        else {return (<><p> Olá {this.state.nome}</p></>);};};
};
export default App4