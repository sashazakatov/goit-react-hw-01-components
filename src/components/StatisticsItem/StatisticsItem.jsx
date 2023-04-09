import css from './StatisticsItem.module.css'
import getRandomColor from './getRandomColor'
const StatisticsItem = ({label, percentage}) =>{
    return(
        <li className={css.item} style={{backgroundColor: getRandomColor(),}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{`${percentage}%`}</span>
        </li>
    );
}

export default StatisticsItem;