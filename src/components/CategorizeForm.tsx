import React from 'react'



const CategorizeForm: React.FC<{aqi: number}> = ({aqi}) => {
  
  const categorize = () => {
    if (aqi < 50) {
      return <p className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">🥳</p>
    }
    else if (aqi > 50 && aqi < 100) {
      return <p className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">😒</p>
    }
    else if (aqi > 100 && aqi < 200) {
      return <p className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">😥</p>
    }
    else if (aqi > 200) {
      return <p className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">😰</p>
    }
  }

  return (
    <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
      <label className="block text-blue-300 py-2 font-bold mb-2">
        Data from within 1 hour:
              </label>
      <p className="leading-normal text-blue-300 md:text-2xl mb-8 text-center md:text-left">
        {aqi}
      </p>
      {categorize()}
    </form>
  );
}

export default CategorizeForm;