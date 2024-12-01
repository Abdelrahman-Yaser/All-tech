import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { Categories } from "./Categories";


export const queryKeys = () => {
  const queryClient= new QueryClient()
  return (
<>
<QueryClientProvider client={queryClient}>
<Categories/>
</QueryClientProvider>
</>
  )
}
