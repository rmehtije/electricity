import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import './app.scss';
import Footer from './Footer';
import Contact from './Contact';
import ErrorModal from './ErrorModal';
import { Route, Routes } from 'react-router-dom';
import useGetData from './effects/useGetData';
// Komponent eto funkcija kotoraja vozvrashajet odin element i tol'ko odin.
// Komponenty nazyvajutsa s bol'shoj bukvy dlja togo 4tob otlichit' ih ot elementov v JSX.
// JSX eto novyj sintex ot React kotoryj pozvoljajet pisat' nodeJs vnutri html.
function App() {

  useGetData();

  const mainPage = (
    <>
      <Body />
      <Footer />
    </>
  );

  // ssylki v react-router-dom u nas nazyvajutsa marshrut ili Route
  // u kazhdogo marshruta jest' svoj put' i element kotoryj dolzhen zapustitsa
  // Pri izmenenija ssylki komponent kotoryj byl otrisovan react-router-dom zapuskajet process unmount komponentu
  // i novomu komponentu zapuskajet protsess mount.
  // My mozhet peredat' ljubuju informaciju v komponent cherez ssylki, eto nazyvajetsa paramentry (search params).
  // v klasicheskom vide: http://neti.ee?dataType=ele
  // v react-router-dom my mozhem sozdat' krasivye ssylki i 4erez slesh peredat' nuzhnuju infu. ex: http://neti.ee/ele
  // znachenije ele zapishetsa v naznachenij nam param 4erez :{paramName}
  // v nashem slu4ii u nas novyj parametr s nazvanije dataType s znachenije 'ele'
  
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={mainPage} />
        <Route path="/gas" element={mainPage} />
        <Route path="/gas/:dataType" element={mainPage} />
        <Route path="/ele" element={mainPage} />
        <Route path="/ele/:dataType" element={mainPage} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ErrorModal />
    </Container>
  );
}

export default App;
