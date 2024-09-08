import { useLocation, useNavigate } from 'react-router-dom';

export const useSearch = (value) => {
    const navigate = useNavigate()
    let searchParams = new URLSearchParams(useLocation().search);

    const handleProductsPage = () => {

        if (searchParams.has('search')) {

            searchParams.set('search', value);
        } else {

            searchParams.append('search', value);
        }


        navigate(`products?${searchParams.toString()}`);
    };

    return { handleProductsPage }
}
