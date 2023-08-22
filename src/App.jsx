import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Header from './Body/Header';
import Chart from './Body/Chart';
import './App.scss';

function App() {
  return (
    <Container>
      <Navigation />
      <Header />
      <Chart />
      
    </Container>
  );
}

export default App;
