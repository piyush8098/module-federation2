import React from "react";
import ReactDOM from "react-dom";
import Component1 from 'remoteComponent/Component1';
import "./index.css";

const App = () => (
    <div>
        <Component1/>
        In component 2, the content from component1 above
    </div>);

ReactDOM.render(<App/>, document.getElementById("app"));
