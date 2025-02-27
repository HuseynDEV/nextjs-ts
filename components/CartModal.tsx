import Image from "next/image"

const CartModal = () => {
    const cartItems = true
    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!cartItems ? (
                <div className="">Cart is Empty</div>
            ) : (
                <>
                <h2 className="text-xl">Shopping Cart</h2>
                    <div className="flex flex-col ga-8">
                        <div className="flex gap-4">
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                                alt=""
                                width={72}
                                height={96}
                                className="object-cover rounded-sm"
                            />
                            <div className="flex flex-col justify-between w-full">
                                <div className="">
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="p-1 bg-gray-50">$49</div>
                                    </div>
                                    <div className="-mt-2 text-sm text-gray-500">
                                        available
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-between text-sm">
                                    <span className="text-gray-500">Qty. 2</span>
                                    <span className="text-green-500">Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="">Subtotal</span>
                            <span className="">$49</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                        <div className="flex justify-between text-sm">
                            <button className=" rounded-sm py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                            <button className=" rounded-sm py-3 px-4 bg-black text-white">Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartModal