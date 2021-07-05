import React from 'react';
import { useModuleContext } from 'remoteComponent/ModuleContext';
const Component1 = React.lazy(() => import('remoteComponent/Component1'));

const Child = (props) => {
    let context = useModuleContext();
    return (
        <div>
            <button onClick={() => {
                context.setModuleInfo({title: 'New module2'});
                props.setShowComponent(!props.showComponent)
            }}>
                {context.title}
            </button>
            <React.Suspense fallback={'something'}>
                {props.showComponent ? <Component1/> : ''}
            </React.Suspense>
            <div>In component 2, the content from component1 above</div>
        </div>
    );
}

export default Child;
