import React from 'react';

const SecondComponent = () => {
    return (
        <div className='flex justify-between items-center bg-slate-400 p-20 rounded-xl my-10'>
            <h3 className='text-4xl font-bold font-mono'>Second Component</h3>
            <div className='text-xl font-bold flex gap-4'>
                <button className='bg-white px-2 rounded-[50%]' title='increase count'>+</button>
                <p>Count: </p>
                <button className='bg-white px-2 rounded-[50%]' title='decrease count'>-</button>
            </div>
        </div>
    );
};

export default SecondComponent;