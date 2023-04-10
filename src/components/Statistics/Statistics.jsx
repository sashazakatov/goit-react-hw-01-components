import PropTypes from "prop-types";
import css from './Statistics.module.css'
import StatisticsList from 'components/StatisticsList'

const Statistics = ({title, stats}) =>{
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}
            <StatisticsList stats={stats}/>
        </section>
    );
}

Statistics.propTypes = {
  title: PropTypes.any.isRequired,
  stats: PropTypes.array.isRequired,
}
export default Statistics;