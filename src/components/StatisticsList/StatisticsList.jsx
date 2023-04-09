import css from './StatisticsList.module.css'
import StatisticsItem from 'components/StatisticsItem'

const StatisticsList = ({stats}) =>{
    return(
        <ul className={css.statisticsList}>
            {stats.map((elem)=><StatisticsItem key={elem.id} label={elem.label} percentage={elem.percentage}/>)}
        </ul>
    );
}

export default StatisticsList;