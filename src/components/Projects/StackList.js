import React from 'react'

const StackList = ({ stack }) => {
    return (
        <div className='mb-20'>
            <p className='font-bold text-xl text-mantis-100 mb-2'>Tools:</p>
            <ul className='list-disc'>
                {stack.map((stack, idx) => (
                    <li key={idx}>{stack.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default StackList