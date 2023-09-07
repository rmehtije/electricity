import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorModal from '../Body/ErrorModal';
import { getElectricityPrice, getGasPrice } from '../services/apiService';
import { setElectricityPrice, setGasPrice } from '../services/stateService';
import { useDispatch } from 'react-redux';

function DateForm({
  hideSideBar,
}) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const from = event.target.from.value;
    const to = event.target.to.value;

    try {
      const [dataEle, dataGas] = await Promise.all([
        getElectricityPrice({ to, from }),
        getGasPrice({ to, from }),
      ]);

      if(![dataEle, dataGas].find(data => data.success)) {
        throw (dataEle || dataGas).messages[0];
      }

      dispatch(setElectricityPrice(dataEle.data));
      dispatch(setGasPrice(dataGas.data));
    } catch (error) {
      setErrorMessage(error);
    }

    console.log(from, to);

    hideSideBar();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>From</Form.Label>
          <Form.Control type="date" name="from" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>To</Form.Label>
          <Form.Control type="date" name="to" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
    </>
  );
}

export default DateForm;
