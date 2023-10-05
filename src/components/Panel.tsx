import { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;
}

function Panel({ children }: Props) {
    const [elements, setElements] = useState<ReactNode[]>([children]);

    function handleClick() {
        const newElement = <div key={elements.length}>{children}</div>;
        const newElements = [...elements, newElement];
        setElements(newElements);
    }

    function handleRemove() {
        const newElements = elements.slice(0, -1);
        setElements(newElements);
    }

    return (
        <div style={{ margin: 'auto', marginTop: '20px', minHeight: '100vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ margin: '5px' }} onClick={handleClick}>Add Value</button>
                <button style={{ margin: '5px' }} onClick={handleRemove}>Remove Value</button>
            </div>
            <div>
                {elements.map((value, index) => (
                    <div key={index}>{value}</div>
                ))}
            </div>
        </div>
    );
}

export default Panel;