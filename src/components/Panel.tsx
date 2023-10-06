import { ReactNode, useState, useRef } from 'react';
import Message from './Message';

function Panel() {
    const [elements, setElements] = useState<ReactNode[]>([]);

    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        const newElement = <div key={elements.length}><Message message={inputValue} /></div>;
        const newElements = [...elements, newElement];
        setElements(newElements);
        setInputValue('');
        inputRef.current?.focus();
    }

    function handleRemove() {
        const newElements = elements.slice(0, -1);
        setElements(newElements);
        inputRef.current?.focus();
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return (
        <div style={{ margin: 'auto', marginTop: '20px', minHeight: '100vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input style={{ margin: '5px' }} type="text" value={inputValue} onChange={handleInputChange} ref={inputRef} />
                <button style={{ margin: '5px' }} onClick={handleClick} disabled={inputValue.length === 0}>Add Value</button>
                <button style={{ margin: '5px' }} onClick={handleRemove} disabled={elements.length === 0}>Remove Value</button>
            </div>
            <div>
                {elements.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
        </div>
    );
}

export default Panel;