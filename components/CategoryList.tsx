import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
    return (
        <div className="px-4 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 md:gap-8">
                {Array(10).fill().map((_, index) => (
                    <Link
                        href='/test'
                        className="flex-shrink-0 w-64 sm:w-1/2 lg:w-1/4 xl:w-1/6"
                        key={index}
                    >
                        <div className="relative bg-slate-100 w-full h-96">
                            <Image
                                src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Category"
                                fill
                                sizes="20vw"
                                className="object-cover"
                            />
                        </div>
                        <h1 className="mt-8 font-light text-xl tracking-wide">
                            Category Name
                        </h1>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
