import { ReactNode, useState, useRef, ButtonHTMLAttributes } from 'react';
import Message, { MessageProps } from './Message';
import {useForm} from "react-hook-form";

interface PanelProps{
    OnRemove: () => void;
    OnAdd: () => void;
}

function Panel({OnRemove, OnAdd}: PanelProps): JSX.Element {
    const [elements, setElements] = useState<MessageProps[]>([]);
    const {register, handleSubmit, setFocus, setValue} = useForm();

    function handleAdd(data: any) {
        const newElement = { message: data.name };
        const newElements = [...elements, newElement];
        setElements(newElements);
        setValue('name', '');
        setFocus('name');
        OnAdd();
    }

    function handleRemove() {
        const newElements = elements.slice(0, -1);
        setElements(newElements);
        setFocus('name');
        OnRemove();
    }

    return (
        <div style={{ margin: 'auto', marginTop: '20px', minHeight: '100vh', overflow: 'auto' }}>
             <form onSubmit={handleSubmit(handleAdd)}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type="text" style={{ margin: '5px' }} {...register('name', { required: true })}/>
                    <button style={{ margin: '5px' }} type="submit">Add Value</button>
                    <button style={{ margin: '5px' }} type="button" onClick={handleRemove} disabled={elements.length === 0}>Remove Value</button>
                </div>
            </form>
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