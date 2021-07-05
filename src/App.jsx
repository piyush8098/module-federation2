import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Child from "./Child";
import {ModuleServiceProvider, useModuleContext} from 'remoteComponent/ModuleContext';

const App = () => {
    const [showComponent, setShowComponent] = React.useState(false);
    return (
        <ModuleServiceProvider>
            <Child setShowComponent={setShowComponent} showComponent={showComponent}/>
        </ModuleServiceProvider>);
}

ReactDOM.render(<App/>, document.getElementById("app"));
