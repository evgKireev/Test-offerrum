import classNames from 'classnames';
import BurgerCloses from '../../assets/BurgerCloses';
import styles from './Menu.module.scss';

type MenuType = {
  setOpenMenu: () => void;
  isOpenMenu: boolean;
};

const Menu: React.FC<MenuType> = ({ setOpenMenu, isOpenMenu }) => {
  const menu = ['Главная', 'Что даст обучение'];
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.wrapperActive]: isOpenMenu,
      })}
    >
      <div
        className={classNames(styles.innerMenu, {
          [styles.innerActive]: isOpenMenu,
        })}
      >
        <div className={styles.close} onClick={setOpenMenu}>
          <BurgerCloses />
        </div>

        <ul className={styles.headerMenu}>
          {menu.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <div
          className={classNames(styles.headerLk, { [styles.active]: false })}
        >
          Личный кабинет
        </div>
      </div>
    </div>
  );
};

export default Menu;
