import React from 'react'

const productc = () => {
  return (
    <div>
    <img src="/images/pastafront.jpeg" alt="pasta" />
    <div className="text-center">
    <h2 className="text-lg font-bold py-2">Alfredo pasta</h2>
    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Pasta</span>
    </div>
    <div className="flex justify-between items-center mt-4">
        <span> Rs 200</span>
        <button className="px-4 py-1 rounded-full font-bold bg-yellow-500 ">ADD</button>
    </div>
</div>
  )
}

export default productc;
