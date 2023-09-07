import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import './app.scss';
import Footer from './Footer';
import ErrorModal from './ErrorModal';

function App() {
  return (
    <Container>
      <Navigation />
      <Body />
      <Footer />
      <ErrorModal />
    </Container>
  );
}

export default App;
