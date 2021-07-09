import React from "react";

class App extends React.Component {
    render() {
        return (
            <div>
                <p>
                    primeiro parágrafo
                </p>
                <p>
                    segundo parágrafo
                </p>
                <p>
                    {new Date().toLocaleDateString("pt-br")}
                </p>
            </div>
        )
    }
}

export default App