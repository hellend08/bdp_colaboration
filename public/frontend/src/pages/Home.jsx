import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from '../components/commons/layouts/Header';

const Home = () => {
  return (
    <>
      <Header/>
      <br />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
}

export default Home;