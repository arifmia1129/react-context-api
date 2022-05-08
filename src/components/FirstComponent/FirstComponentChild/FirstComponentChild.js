import React, { useContext } from 'react';
import { CountContext } from '../../../App';

const FirstComponentChild = () => {
    const [count, setCount] = useContext(CountContext);
    return (
        <div className='flex justify-between items-center bg-orange-300 p-20 rounded-xl my-10'>
            <h3 className='text-4xl font-bold font-mono'>Second Component</h3>
            <div className='text-xl font-bold flex gap-4'>
                <button onClick={() => setCount(count + 1)} className='bg-white px-2 rounded-[50%]' title='increase count'>+</button>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count - 1)} className='bg-white px-2 rounded-[50%]' title='decrease count'>-</button>
            </div>
        </div>
    );
};

export default FirstComponentChild;