import PropTypes from "prop-types";
import css from './StatsItem.module.css'
const StatsItem = ({label, quantity}) =>{
    return(
        <li className={css.statsItem}>
            <span className={css.label}>{label}</span>
            <span className={css.quantity}>{quantity}</span>
        </li>
    );
}
StatsItem.propTypes = {
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}
export default StatsItem