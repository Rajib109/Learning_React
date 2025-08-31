import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();
    return (
        <div className='flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md'>
            <img src={data.avatar_url} alt="image" className='w-24 h-24 rounded-full' />
            <h1 className='text-xl font-semibold'>{data.name}</h1>
            <p className='text-gray-600'>{data.bio}</p>
        </div>
    );
}

export default Github;

export const githubdataloader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
};
