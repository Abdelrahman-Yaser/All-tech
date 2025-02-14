import { Product } from "../../interface"


export const ProductCard = ({ id, title, slug, description ,price,imageCover,category}: Product) => {
    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
      };
    return (

<div 
  className="bg-white rounded-xl shadow-lg h-auto w-64 overflow-hidden hover:shadow-2xl transition duration-300" 
  key={id}
>
  {/* Product Image */}
  <div className="overflow-hidden">
    <img 
      src={imageCover} 
      alt={title}
      className="w-full h-48 object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
    />
  </div>

  {/* Card Content */}
  <div className="p-4">
    {/* Product Title */}
    <h3 className="text-lg font-semibold text-gray-800">
      {truncateText(title || "", 25)}
    </h3>

    {/* Price & Offer */}
    <div className="flex items-center justify-between mt-2">
      <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold text-lg drop-shadow-md">
        Limited Offer
      </span>
      <span className="text-green-500 font-extrabold text-xl">
        {`$${price}`}
      </span>
    </div>

    {/* Product Description */}
    <p className="text-gray-600 mt-2 text-sm leading-tight">
      {truncateText(description || "", 50)}
    </p>

    {/* Extra Info (Slug & Quantity) */}
    <div className="flex justify-between mt-2 text-gray-500 text-sm">
      <p>{slug}</p>

    </div>

    {/* Category Section */}
    <div className="flex items-center gap-2 mt-4" key={category._id}>
      <img 
        src={category.image} 
        alt={category.name}
        className="w-10 h-10 rounded-full border border-gray-300"
      />
      <p className="text-gray-700 font-medium">{category.name}</p>
    </div>
  </div>
</div>

    )
}