import css from './Stats.module.css'

const Stats = ({children}) =>{
    return (
        <ul className={css.stats}>
            {children}
        </ul>
    );
}
export default Stats;