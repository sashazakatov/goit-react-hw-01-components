import PropTypes from "prop-types";
import css from './StatisticsList.module.css'
import getRandomColor from './getRandomColor'

const StatisticsList = ({stats}) =>{
    return(
        <ul className={css.statisticsList}>
            {stats.map((stat)=>{
                return(
                    <li key={stat.id} className={css.item} style={{backgroundColor: getRandomColor()}}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{`${stat.percentage}%`}</span>
                    </li>
                );
            })}
        </ul>
    );
}

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired, 
        label: PropTypes.string.isRequired, 
        percentage: PropTypes.number.isRequired, 
    }))
}
export default StatisticsList;