import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/reducers/modal';
import styles from './ItemCard.module.scss';

interface ItemCardProps {
    image: string;
    name: string;
    price: number;
    idItem: number;
    idStore: number;
}

export default function ItemCard ({ image, name, price, idItem, idStore}: ItemCardProps) {
    const dispatch = useDispatch();

    return (
        <div className={classNames(styles.container, styles.grow)} onClick={() => dispatch(openModal({idItem, idStore}))}>
            <div className={styles.image}>
                <img src={image} alt={name}/>
            </div>
            <div className={styles.title}>
                {name}
            </div>
            <div className={styles.price}>
                R$ {price.toFixed(2)}
            </div>
        </div>
    )
}