import { useQuery } from "@tanstack/react-query";
import api from "../axios/Axios";
import { Categorie } from "../../interface";
import CategoryCard from "../../Components/ui/CategoryCard";

export const fetchData = async (): Promise<Categorie[]> => {
  const response = await api.get("/api/v1/categories");
  return response.data.data;
};



export const Categories = () => {
  const { isLoading, isError, error, data = [] } = useQuery<Categorie[], Error>({
    queryKey: ["repoData"],
    queryFn: fetchData,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-48">
        <p>Loading...</p> {/* Replace with a spinner */}
      </div>
    );

  if (isError)
    return (
      <div className="text-center">
        <p className="text-red-600">An error has occurred: {error.message}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Retry
        </button>
      </div>
    );

  // Example of filtering specific categories
  // const specificCategories = data.filter((categorie) => categorie.id === 1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map((category,index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  );
};
