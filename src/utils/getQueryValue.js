export const getQueryValue = (queryString) => {

    let title
    const urlParams = new URLSearchParams(queryString);
    const categoryId = urlParams.get('categoryId');
    const searchValue = urlParams.get('search');
    const brandId = urlParams.get('brandId');
    const createdWithin = urlParams.get('createdWithin');

    if (createdWithin)  {
         title = 'New Arrival'
    }
    if (searchValue)  {
         title = 'Search Results'
    }

    if(categoryId) {
        switch (+categoryId) {
            case 1:
                title = "Handbags";
                break;
            case 2:
                title = "Watches";
                break;
            case 3:
                title = "Skincare";
                break;
            case 4:
                title = "Jewellery";
                break;
            case 5:
                title = "Apparels";
                break;
            case 6:
                title = "Personal Care";
                break;
            case 7:
                title = "Eye Wear";
                break;
            default:
                title = "Results";
        }
    }
    if(brandId) {
        switch (+brandId) {
            case 1:
                title = "Zara Products";
                break;
            case 2:
                title = "D&G Products";
                break;
            case 3:
                title = "H&M Products";
                break;
            case 4:
                title = "CHANEL Products";
                break;
            case 5:
                title = "PRADA Products";
                break;
            case 6:
                title = "BIBA Products";
                break;

            default:
                title = "Unknown Brand";
        }
    }

    return title
}


