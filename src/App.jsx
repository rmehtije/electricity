import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import './app.scss';
import Footer from './Footer';
import { CHART, PERIODS, ELE } from './constants';

function App() {
  const [activeEnergy, setActiveEnergy] = useState(ELE);
  const [dataType, setDataType] = useState(CHART);
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0].value);

  return (
    <Container>
      <Navigation />
      <Body
        dataType={dataType}
        selectedPeriod={selectedPeriod}
        activeEnergy={activeEnergy}
        setActiveEnergy={setActiveEnergy}
      />
      <Footer
        dataType={dataType}
        setDataType={setDataType}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        activeEnergy={activeEnergy}
      />
    </Container>
  );
}

export default App;
