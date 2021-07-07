import React from "react";

class App3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {nome: undefined}
    }

    changeName = function(event){
        this.setState({
            nome: event.target
        })
    }

    render(){
        return (
            <>
                Nome: <input type="text" value={this.state.nome}></input>
                <p> 
                    Olá {this.state.nome}
                </p>
            </>
        );
    };
};
export default App3