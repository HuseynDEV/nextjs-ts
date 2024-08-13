import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const SinglePage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 ">
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            <div className="w-full lg:w-1/2  flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className='text-gray-500'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam molestias quaerat quo perferendis consequatur aspernatur dignissimos, fugiat, soluta ipsam suscipit recusandae voluptas consectetur officiis, quibusdam officia iste? Ut, consectetur! Obcaecati, tenetur assumenda cum autem qui sequi eveniet eos? Nisi, repudiandae?
                </p>
                <div className="   bg-gray-100">
                    <div className="flex items-center gap-4">
                        <h3 className='text-xl h-[2px] text-gray-500 line-through mb-5'>$59</h3>
                        <h3 className='font-medium text-2xl'>$49</h3>
                    </div>
                    <div className=" ">
                        <CustomizeProducts />
                        <Add />
                        <div className=" bg-gray-100">
                            <div className="text-sm">
                                <h4 className='font-medium mb-4'>Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam error labore perferendis corporis iusto veritatis quae! Nulla voluptatum consectetur ab corporis dolore quibusdam ea doloribus nesciunt saepe harum numquam earum ad explicabo eum, quaerat perferendis quos incidunt exercitationem consequatur quod facere. Quo esse vero quae inventore velit asperiores! Consectetur.</p>
                            </div>
                            <div className="text-sm">
                                <h4 className='font-medium mb-4'>Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam error labore perferendis corporis iusto veritatis quae! Nulla voluptatum consectetur ab corporis dolore quibusdam ea doloribus nesciunt saepe harum numquam earum ad explicabo eum, quaerat perferendis quos incidunt exercitationem consequatur quod facere. Quo esse vero quae inventore velit asperiores! Consectetur.</p>
                            </div> <div className="text-sm">
                                <h4 className='font-medium mb-4'>Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam error labore perferendis corporis iusto veritatis quae! Nulla voluptatum consectetur ab corporis dolore quibusdam ea doloribus nesciunt saepe harum numquam earum ad explicabo eum, quaerat perferendis quos incidunt exercitationem consequatur quod facere. Quo esse vero quae inventore velit asperiores! Consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage