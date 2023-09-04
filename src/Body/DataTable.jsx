import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import moment from 'moment';
import { NOW_TIMESTAMP, ELE, GAS } from '../constants';

function DataTable({ electricityPrice, activeEnergy, gasPrice }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (!electricityPrice || !gasPrice) return;

    const energy = {
      [ELE]: {
        data: electricityPrice,
        format: 'HH',
        main: 'ee',
      },
      [GAS]: {
        data: gasPrice,
        format: 'DD',
        main: 'common'
      },
    };

    const mainData = energy[activeEnergy].data;
    const main = energy[activeEnergy].main;
  
    const data = mainData[main]
      .map((_, index) => {
        return {
          ee: energy[activeEnergy].data.ee[index],
          lv: energy[activeEnergy].data.lv[index],
          fi: energy[activeEnergy].data.fi[index],
          lt: energy[activeEnergy].data.lt[index],
          date: mainData[main][index],
        };
      });

    setTableData(data);
  }, [electricityPrice, gasPrice, activeEnergy]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Estonia</th>
          <th>Finland</th>
          <th>Latvia</th>
          <th>Lituania</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(({ ee, lt, lv, fi, date }, index) => (
          <tr key={index} className={NOW_TIMESTAMP === ee?.timestamp ? "now" : ""}>
            <td>{index}</td>
            <td>{moment.unix(date.timestamp).format('DD.MM.YYYY HH:mm:ss')}</td>
            <td>{ee?.price}</td>
            <td>{fi?.price}</td>
            <td>{lv?.price}</td>
            <td>{lt?.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
