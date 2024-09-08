import { useQuery } from "react-query";
import { apiAxios } from "../api/axiosConfig";
const useCategories = () => {
const { data: categoryData } = useQuery({
    queryKey: ["Category"],
    queryFn: () => apiAxios.get('/homePage').then(res => res.data),
});

  return {
    categoryData,
  };
}
export default useCategories;