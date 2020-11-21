import { Accordion } from 'react-bootstrap';
import AxiosService from '../api/AxiosService';

const getCatAndSubCat = () => {
    return AxiosService.login.get('/inventory/getAllCatAndSubCat');
};

const getProducts = (query) => {
    return AxiosService.login.get('/inventory/itemsList?' + query);
}

export {
    getCatAndSubCat,
    getProducts,
};