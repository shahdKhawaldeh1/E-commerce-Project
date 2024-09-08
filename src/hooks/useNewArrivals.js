import { useQuery } from "react-query";
import { apiAxios } from "../api/axiosConfig";
const useNewArrivals = () => {
const { data: newArrivalsData } = useQuery({
    queryKey: ["NewArrival"],
    queryFn: () => apiAxios.get('/products/newArrivals').then(res => res.data),
});

  return {
    newArrivalsData,
  };
}
export default useNewArrivals;