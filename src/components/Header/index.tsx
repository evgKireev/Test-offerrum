import Logo from '../../assets/Logo';
import styles from './Header.module.scss';
import images from '../../assets/man.png';
import classNames from 'classnames';
import Button from '../Button';
import { useState } from 'react';
import Burger from '../../assets/Burger';
type HeaderType = {
  setOpenModal: () => void;
  setOpenMenu: () => void;
};

const Header: React.FC<HeaderType> = ({ setOpenModal, setOpenMenu }) => {
  const menu = ['Главная', 'Что даст обучение'];
  const [valueMenu, setVAlueMenu] = useState(0);
  return (
    <header className={styles.wrapper}>
      <div className={styles.headerTop}>
        <div className={styles.headerLogo}>
          <div className={styles.logoInner}>
            <div className={styles.circle}></div>
            <Logo />
          </div>
        </div>
        <ul className={styles.headerMenu}>
          {menu.map((value, index) => (
            <li onClick={() => setVAlueMenu(index)} key={index}>
              {value}
            </li>
          ))}
        </ul>
        <div
          className={classNames(styles.headerLk, { [styles.active]: false })}
        >
          Личный кабинет
        </div>
        <div className={styles.burger} onClick={setOpenMenu}>
          <Burger />
        </div>
      </div>
      <div className={styles.header}>
        <div>
          <h1 className={styles.headerTitle}>
            Не упусти возможность войти в <span>прибыльную нишу</span>
            <div className={styles.elepsGreen}></div>
          </h1>
          <p className={styles.headerText}>
            Получи все нужные навыки для заработка на NFT всего за 28 дней!
          </p>
          <Button
            onClick={setOpenModal}
            title={'Начать зарабатывать на NFT'}
            disabled={false}
          />
        </div>
        <div className={styles.headerImages}>
          <img src={images} alt="" />
        </div>
      </div>
      <div className={styles.elips}></div>
    </header>
  );
};

export default Header;
