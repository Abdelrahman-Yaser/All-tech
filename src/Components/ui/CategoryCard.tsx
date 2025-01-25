import { Categorie } from "../../interface";

const CategoryCard = ({ id, name, image, slug }: Categorie) => (
  <div
    className="w-60 bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transform transition duration-300"
    key={id}
  >
    <img
      src={image || "https://via.placeholder.com/150"} // Fallback if image is undefined
      alt={name ? `${name} image` : "Category image"} // Fallback alt text
      className="w-full h-36 object-cover rounded-t-lg" // Adjusted height for a 60 width parent
    />
    <div className="p-4 text-center">
      <h2 className="text-lg font-semibold text-gray-800">
        {name || "Unnamed Category"}
      </h2>
      <p className="text-sm text-gray-500">{slug || "No description"}</p>
    </div>
  </div>
);

export default CategoryCard;
