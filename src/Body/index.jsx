import { useState, useEffect } from 'react';
import Header from "./Header";
import Chart from "./Chart";
import DataTable from './DataTable';
import ErrorModal from './ErrorModal';
import { getElectricityPrice, getGasPrice } from '../services/apiService';
import { CHART } from '../constants';
import './body.scss';

function Body({ dataType, selectedPeriod, activeEnergy, setActiveEnergy }) {
    const [electricityPrice, setElectricityPrice] = useState(null);
    const [gasPrice, setGasPrice] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        getElectricityPrice(selectedPeriod).then(data => {
            console.log('ele', data);
            if (!data.success) {
                throw data.messages[0];
            }
            setElectricityPrice(data.data);
        })
            .catch(setErrorMessage);

        getGasPrice(selectedPeriod).then(data => {
            console.log('gas', data);
            if (!data.success) {
                throw data.messages[0];
            }
            setGasPrice(data.data);
        })
            .catch(setErrorMessage);

    }, [selectedPeriod]);

    return (
        <>
            <Header
                activeEnergy={activeEnergy}
                setActiveEnergy={setActiveEnergy}
                electricityPrice={electricityPrice}
            />
            {dataType === CHART ?
                <Chart
                    activeEnergy={activeEnergy}
                    electricityPrice={electricityPrice}
                    gasPrice={gasPrice}
                />
                : <DataTable
                    electricityPrice={electricityPrice}
                    gasPrice={gasPrice}
                    activeEnergy={activeEnergy}
                />}
            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
        </>
    );
}

export default Body;
