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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map((product: Product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          imageCover={product.imageCover}
          price={product.price}
          description={product.description}
          category={product.category}
        />
      ))}
    </div>
  );
};
