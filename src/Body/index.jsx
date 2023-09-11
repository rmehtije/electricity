import Header from "./Header";
import Chart from "./Chart";
import DataTable from './DataTable';
import { CHART } from '../constants';
import { useSelector } from 'react-redux';
import './body.scss';

function Body() {
    const dataType = useSelector((state) => state.dataType);

    return (
        <>
            <Header />
            {dataType === CHART ? <Chart /> : <DataTable />}
        </>
    );
}

export default Body;
