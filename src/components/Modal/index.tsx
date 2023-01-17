import { AiOutlineClose } from 'react-icons/ai';
import styles from './Modal.module.scss';
import classNames from 'classnames';
import Button from '../Button';

type Modal = {
  isOpenModal: boolean;
  setOpenModal: () => void;
};

const Modal: React.FC<Modal> = ({ isOpenModal, setOpenModal }) => {
  return (
    <>
      <div
        className={classNames(styles.wrapper, {
          [styles.showModal]: isOpenModal,
        })}
      >
        <div className={classNames(styles.container)}>
          <AiOutlineClose className={styles.closes} onClick={setOpenModal} />
          <h3 className={styles.title}>Начни прямо сейчас!</h3>
          <p className={styles.text}>
            Получи все нужные навыки для заработка на NFT всего за 28 дней!
          </p>
          <input className={styles.input} type="text" placeholder="Ваш email" />
          <Button title="Оплатить" disabled={false} onClick={() => {}} className={styles} />
        </div>
      </div>
    </>
  );
};

export default Modal;
