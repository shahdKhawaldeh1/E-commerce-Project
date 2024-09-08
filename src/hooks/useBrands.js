import { useQuery } from "react-query";
import { apiAxios } from "../api/axiosConfig";

const useBrands = (id) => {
const { data: brandData } = useQuery({
    queryKey: ["Brand"],
    queryFn: () => apiAxios.get(`/products/itemByBrand?id=${id}`).then(res => res.data),
});

  return {
    brandData,
  };
}
export default useBrands;