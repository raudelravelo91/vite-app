import { ReactNode, useState } from 'react';
import Message from './Message';

function Panel() {
    const [elements, setElements] = useState<ReactNode[]>([]);

    const [inputValue, setInputValue] = useState('');

    function handleClick() {
        const newElement = <div key={elements.length}><Message message={inputValue} /></div>;
        const newElements = [...elements, newElement];
        setElements(newElements);
        setInputValue('');
    }

    function handleRemove() {
        const newElements = elements.slice(0, -1);
        setElements(newElements);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return (
        <div style={{ margin: 'auto', marginTop: '20px', minHeight: '100vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input style={{ margin: '5px' }} type="text" value={inputValue} onChange={handleInputChange} />
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