import { useState } from 'react';
import Block from './components/Block';
import Header from './components/Header';
import Menu from './components/Menu';
import Modal from './components/Modal';
import './scss/app.scss';

const App = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="container">
        <Header
          setOpenModal={() => setOpenModal(true)}
          setOpenMenu={() => setOpenMenu(true)}
        />
        <Block />
        <Modal
          isOpenModal={isOpenModal}
          setOpenModal={() => setOpenModal(false)}
        />
      </div>
      <Menu setOpenMenu={() => setOpenMenu(false)} isOpenMenu={isOpenMenu} />
    </>
  );
};

export default App;
