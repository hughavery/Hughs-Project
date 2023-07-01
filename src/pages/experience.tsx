    import React from 'react';
    import orbViz from '../assets/orbviz.jpg';
    import BackButton from './backButton';
    
    function Experience() {

    return (
        
        <div className='flex justify-center items-center h-screen'>
            <BackButton />
        <a
            href="https://www.orbviz.com/" target="_blank"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:-translate-y-1"
        >
            <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={orbViz}
            alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Software engineer intern at OrbViz
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Over the summer, I had the privilege to work as a Software Engineer Intern at OrbViz in Christchurch, My main focus was on constructing a data detection algorithm that helps client's with setting up data and integrating my solution into their backend.
            </p>
            <div>
            <p className="inline-block border-2 border-blue-500 rounded-full p-1 text-blue-900 bg-blue-100 font-bold ml-4">Typescript</p>
            <p className="inline-block border-2 border-yellow-500 rounded-full p-1 text-yellow-900 bg-yellow-100 font-bold ml-1">Vue.js</p>
            <p className="inline-block border-2 border-red-500 rounded-full p-1 text-red-900 bg-red-100 font-bold ml-1">Python</p>              
            <p className="inline-block border-2 border-green-500 rounded-full p-1 text-green-900 bg-green-100 font-bold ml-1">Django</p>
            </div>
            </div>
        </a>
        </div>
    );
    }

    export default Experience;
