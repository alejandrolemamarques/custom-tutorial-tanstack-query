import { Starship } from '../../types/starship';
import styles from './StarshipCard.module.css';

const StarshipCard = ({ starship }: { starship: Starship }) => {
    return (
        <div className={styles.container}>
            <h1>{starship.name}</h1>
        </div>
    );
};

export default StarshipCard;
