import React from "react";

class App2 extends React.Component {
    constructor(props) {
        super(props);
    }

    changeName = function(event){
        this.setState({
            nome: event.target
        })
    }

    render() {
        return (
            <div className="box">
                <div id="title">{this.props.title}</div>
                <div id="text">{this.props.children}</div>
            </div>
        )
    }
}

export default App2;