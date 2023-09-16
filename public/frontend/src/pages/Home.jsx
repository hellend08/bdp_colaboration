import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';

// import Container from 'react-bootstrap/Container';
import Header from '../components/commons/layouts/Header';

const Home = () => {
  return (
    <>
      <Header/>
      <Container maxWidth="sm">
      {/* <Container fluid> */}
        <Outlet />
      </Container>
    </>
  );
}

export default Home;