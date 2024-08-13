'use client'
import Image from "next/image"
import { useState } from "react"
const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 2,
        url: "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
]

const ProductImages = () => {

    const [index, setIndex] = useState(0)


    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src={images[index].url}
                    alt=''
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4">
                {images.map((image,index) => (
                    <div className="w-1/4 h-24   relative gap-4 mt-8" key={image.id} onClick={()=>setIndex(index)}>
                        <Image
                            src={image.url}
                            alt=''
                            fill
                            sizes="30vw"
                            className="object-cover  rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages