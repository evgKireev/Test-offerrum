import Card from '../Card';
import styles from './Block.module.scss';
import images1 from '../../assets/1.png';
import images2 from '../../assets/2.png';
import images3 from '../../assets/3.png';
import images4 from '../../assets/4.png';

const Block = () => {
  const dataCard = [
    {
      images: images1,
      text: 'Откроешь свой первый криптокошелек и научишься с ним работать',
    },
    {
      images: images2,
      text: 'Поймёшь, как выбирать правильные дропы',
    },
    {
      images: images3,
      text: 'Построишь план по быстрому приумножению заработанных средств',
    },
    {
      images: images4,
      text: 'Узнаешь кто такие холдеры и флипперы',
    },
  ];
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>Что даст тебе обучение?</h1>
      <div className={styles.cards}>
        {dataCard.map((value, index) => (
          <Card key={index} images={value.images} text={value.text} />
        ))}
      </div>
      <div className={styles.el1}></div>
      <div className={styles.el2}></div>
      <div className={styles.el3}></div>
      <div className={styles.el4}></div>
      <div className={styles.el5}></div>

    </div>
  );
};

export default Block;
