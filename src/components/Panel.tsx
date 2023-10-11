import { ReactNode, useState, useRef, ButtonHTMLAttributes } from 'react';
import Message, { MessageProps } from './Message';

interface PanelProps{
    OnRemove: () => void;
    OnAdd: () => void;
}

function Panel({OnRemove, OnAdd}: PanelProps): JSX.Element {
    const [elements, setElements] = useState<MessageProps[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const addRef = useRef<HTMLButtonElement>(null);
    updateDisableAdd();

    function handleAdd() {
        const newElement = { message: inputRef.current?.value??"" };
        const newElements = [...elements, newElement];
        setElements(newElements);
        OnAdd();
        inputRef.current?.focus();
        inputRef.current!.value = "";
    }

    function handleRemove() {
        const newElements = elements.slice(0, -1);
        setElements(newElements);
        OnRemove();
        inputRef.current?.focus();
    }

    function updateDisableAdd() { 
        addRef.current!.disabled = inputRef.current?.value === "";
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        updateDisableAdd();
    }

    return (
        <div style={{ margin: 'auto', marginTop: '20px', minHeight: '100vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input style={{ margin: '5px' }} type="text" onChange={handleInputChange} ref={inputRef} />
                <button style={{ margin: '5px' }} onClick={handleAdd} ref={addRef}>Add Value</button>
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