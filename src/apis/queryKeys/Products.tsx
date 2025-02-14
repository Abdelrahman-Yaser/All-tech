import { useQuery } from "@tanstack/react-query";
import { Product } from "../../interface"; // Use the Product type here
import api from "../axios/Axios";
import { ProductCard } from "../../Components/ui/ProductCard";

export const fetchData = async (): Promise<Product[]> => {
  const response = await api.get("/api/v1/products");
  const products = response.data.data.map((product: any) => ({
    ...product,
    id: product._id, // Map _id to id
  }));
  return products;
};

export const Products = () => {
  const { isLoading, isError, error, data = [] } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center">
        <p className="text-red-600">An error has occurred: {error?.message}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 md:px-8 lg:px-12 py-6">
  {data.map((product: Product) => (
    
    <div className="relative">
      {/* Favorite Icon (SVG) */}
      <button className="absolute top-4 left-4 z-40 text-gray-500 hover:text-red-500 transition duration-200" title=" Add to Wishlist">
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M12 21C12 21 5 14.5 5 9.5C5 6.42 7.42 4 10.5 4C11.74 4 13 4.81 13 5.5C13 5.5 14 4 15 4C18.08 4 20.5 6.42 20.5 9.5C20.5 14.5 12 21 12 21Z"
  />
</svg>

      </button>

      {/* Product Card */}
      <ProductCard
        key={product.id}
        id={product.id}
        title={product.title}
        imageCover={product.imageCover}
        price={product.price}
        description={product.description}
        category={product.category}
      />
    </div>
  ))}
</div>

  );
};
