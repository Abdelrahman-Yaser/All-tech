import { useQuery } from "@tanstack/react-query";
import api from "../axios/Axios";
import { Categorie } from "../../interface";

export const fetchData = async (): Promise<Categorie[]> => {
  const response = await api.get("/api/v1/categories");
  return response.data.data;
};

export const Categories = () => {
  const { isLoading, isError, error, data = [] } = useQuery<Categorie[], Error>(
{  queryKey: ['repoData'],
    queryFn: fetchData
 }
  );

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred: {(error as Error).message}</p>;

//   specific Categories 
// const specificCategories=fetchData.fillter((categorie)=>{
//     return (
//         <>
//         {categorie.id}
//         </>
//     )
// })
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map(({ id, name, image, slug }: Categorie) => (
        <div
          key={id}
          className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transform transition duration-300"

        >
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">{slug}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
