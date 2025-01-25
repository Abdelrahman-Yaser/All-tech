import { Product } from "../../interface"


export const ProductCard = ({ id, title, slug, description ,quantity,price,imageCover,category}: Product) => {

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden"  key={id}>
            <img src={imageCover} alt={title} className="w-full h-56 object-cover object-center"/>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-2">${price}</p>
                <p className="text-gray-600 mt-2">{description}</p>
                <p className="text-gray-600 mt-2">{slug}</p>
                <p className="text-gray-600 mt-2">{quantity}</p>
                <div className="" key={category.id}>
                <p className="text-gray-600 mt-2">{category.name}</p>
                <p className="text-gray-600 mt-2">{category.image}</p>
                <p className="text-gray-600 mt-2">{category.slug}</p>
                </div>
            </div>
        </div>
    )
}