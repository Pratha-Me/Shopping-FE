import AxiosService from '../api/AxiosService';

const payment = (data) => {
    return AxiosService.esewa.post(process.env.REACT_APP_ESEWA_PAYMENT, data);
};

const paymentVerification= () => {
    return AxiosService.esewa.get(process.env.REACT_APP_ESEWA_PAYMENT_VERIFICATION);
}

export default {
    payment,
    paymentVerification,
};