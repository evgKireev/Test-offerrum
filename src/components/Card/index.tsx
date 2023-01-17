import styles from './Card.module.scss';

type CardType = {
  images: string;
  text: string;
};

const Card: React.FC<CardType> = ({ images, text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <img src={images} alt="" />
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.bgCard}></div>
    </div>
  );
};

export default Card;
