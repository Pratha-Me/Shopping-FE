import AxiosService from '../api/AxiosService';

const getCatAndSubCat = () => {
    return AxiosService.login.get('/inventory/getAllCatAndSubCat');
};

export {
    getCatAndSubCat,
};