import { ReactNode, useState, useRef } from 'react';
import Message, { MessageProps } from './Message';

interface Props{
    OnRemove: () => void;
    OnAdd: () => void;
}

function Panel({OnRemove, OnAdd}: Props): JSX.Element {
    const [elements, setElements] = useState<MessageProps[]>([]);

    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    function handleAdd() {
        const newElement = { message: inputValue };
        const newElements = [...elements, newElement];
        setElements(newElements);
        setInputValue('');
        OnAdd();
        inputRef.current?.focus();
    }

    function handleRemove() {
        const newElements = elements.slice(0, -1);
        setElements(newElements);
        OnRemove();
        inputRef.current?.focus();
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return (
        <div style={{ margin: 'auto', marginTop: '20px', minHeight: '100vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input style={{ margin: '5px' }} type="text" value={inputValue} onChange={handleInputChange} ref={inputRef} />
                <button style={{ margin: '5px' }} onClick={handleAdd} disabled={inputValue.length === 0}>Add Value</button>
                <button style={{ margin: '5px' }} onClick={handleRemove} disabled={elements.length === 0}>Remove Value</button>
            </div>
            <div>
                {elements.map((prop, index) => 
                    <div key={"div" + index}>
                        <Message key={index} message={prop.message} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Panel;