import { useEffect } from 'react';
import Header from "./Header";
import Chart from "./Chart";
import DataTable from './DataTable';
import { getElectricityPrice, getGasPrice, getCurrentGasPrice } from '../services/apiService';
import { CHART } from '../constants';
import { setElectricityPrice, setGasPrice, setGasCurrentPrice, setErrorMessage } from '../services/stateService';
import { useDispatch, useSelector } from 'react-redux';
import './body.scss';

function Body() {
    const dispatch = useDispatch();
    const dataType = useSelector((state) => state.dataType);
    const selectedPeriod = useSelector((state) => state.selectedPeriod);

    useEffect(() => {
        getElectricityPrice({ selectedPeriod }).then(data => {
            // console.log('ele', data);
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setElectricityPrice(data.data));
        })
            .catch((error) => dispatch(setErrorMessage(error)));

        getGasPrice({ selectedPeriod }).then(data => {
            // console.log('gas', data);
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setGasPrice(data.data));
        })
            .catch((error) => dispatch(setErrorMessage(error)));

    }, [dispatch, selectedPeriod]);

    useEffect(() => {
        getCurrentGasPrice().then(data => {
            // console.log('gas', data);
            if (!data.success) {
                throw data.messages[0];
            }
            dispatch(setGasCurrentPrice(data.data[0].price));
        }).catch((error) => dispatch(setErrorMessage(error)));
    }, [dispatch]);

    return (
        <>
            <Header />
            {dataType === CHART ? <Chart /> : <DataTable />}
        </>
    );
}

export default Body;
