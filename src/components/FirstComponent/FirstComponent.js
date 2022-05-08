import React from 'react';
import FirstComponentChild from './FirstComponentChild/FirstComponentChild';

const FirstComponent = () => {
    return (
        <div className='bg-fuchsia-300 p-20 my-10'>
            <div className='flex justify-between items-center bg-blue-300 p-20 rounded-xl my-10'>
                <h3 className='text-4xl font-bold font-mono'>First Component</h3>
                <div className='text-xl font-bold flex gap-4'>
                    <button className='bg-white px-2 rounded-[50%]' title='increase count'>+</button>
                    <p>Count: </p>
                    <button className='bg-white px-2 rounded-[50%]' title='decrease count'>-</button>
                </div>

            </div>
            <FirstComponentChild />
        </div>
    );
};

export default FirstComponent;