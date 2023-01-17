import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonType = {
  title: string;
  disabled: boolean;
  className?: string;
  onClick: () => void;
};

const Button: React.FC<ButtonType> = ({
  title,
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, className, {
        [styles.disabled]: disabled,
      })}
    >
      {title}
    </button>
  );
};

export default Button;
