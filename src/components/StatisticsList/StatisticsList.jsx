import PropTypes from "prop-types";
import css from './StatisticsList.module.css'
import StatisticsItem from 'components/StatisticsItem'

const StatisticsList = ({stats}) =>{
    return(
        <ul className={css.statisticsList}>
            {stats.map((elem)=><StatisticsItem key={elem.id} label={elem.label} percentage={elem.percentage}/>)}
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