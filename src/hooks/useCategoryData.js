import { useQuery } from "react-query";
import { apiAxios } from "../api/axiosConfig";

const useCategoryData = (id) => {
const { data: categoryData } = useQuery({
    queryKey: ["Category Data"],
    queryFn: () => apiAxios.get(`/products/itemByCategory?id=${id}`).then(res => res.data),
});
  return {
    categoryData,
  };
}
export default useCategoryData;