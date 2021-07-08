import React from "react";

class App4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
					nome: undefined, 
					txtNome: ''}}

    changeTxtNome = (event)=>{
        this.setState({
            txtNome: event.target.value
        })}

    persistNome = ()=>{
        this.setState({
            nome: this.state.txtNome
        })}

    render(){

        const renderForm = () => {
            return (
            <>
            Nome: <input type="text" onChange={this.changeTxtNome}></input>
            <button onClick={this.persistNome} >Salvar</button>
            </>
        );
        }

        const renderTxt = () => <><p>Olá {this.state.nome}</p></>;

        return !this.state.nome ? renderForm() : renderTxt();

    }
}
export default App4