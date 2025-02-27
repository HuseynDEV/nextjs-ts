'use client'

import React, { useState } from 'react'

const Add = () => {


    const [quantity, setQuantity] = useState(1)
    const stock = 4

    const handleQuantity = (item: "i" | "d") => {
        console.log(item)
        if (item === 'd' && quantity > 1) {
            setQuantity(prev => prev - 1)
        }
        else if (item === 'i' && quantity < stock) {
            setQuantity(prev => prev + 1)
        }

    }

    return (
        <div className="flex flex-col gap-4 my-10">
            <h4 className="font-medium">Choose a Quantity</h4>
            <div className="flex flex-col gap-2 justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button
                            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                            onClick={() => handleQuantity('d')}
                        >
                            -
                        </button>
                        {quantity}
                        <button
                            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                            onClick={() => handleQuantity('i')}
                        >
                            +
                        </button>
                    </div>

                    <div className="text-xs">
                        Only <span className="text-orange-500"> items</span>{" "}
                        left!
                        <br /> {"Don't"} miss it
                    </div>
                </div>
                <button
                    className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Add