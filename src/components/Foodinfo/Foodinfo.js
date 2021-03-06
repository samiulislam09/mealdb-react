import React from 'react'
import { Link } from 'react-router-dom';

function Foodinfo(props) {
    const { strMeal, strMealThumb, strInstructions } = props.food;

    const seeMoreHandler = () => {
        console.log(strMeal);
    }
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={strMealThumb} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{strMeal }</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{strInstructions.slice(0, 100)}</p>
                <button onClick={seeMoreHandler} to='/details'><p className='flex justify-center align-middle text-white'>
                    read more
                    <svg className="ml-2 -mr-1 w-4 h-4 mt-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </p></button>
            </div>
        </div>
    )
}

export default Foodinfo