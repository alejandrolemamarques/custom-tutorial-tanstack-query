import styles from './StarshipList.module.css';
import StarshipCard from './StarshipCard/StarshipCard';
import { Starship } from '../types/starship';

const StarshipList = ({ starships }: { starships: Starship[] }) => {
    return (
        <div className={styles.container}>
            {starships.map((starship) => (
                <StarshipCard key={starship.name} starship={starship} />
            ))}
        </div>
    );
};

export default StarshipList;
