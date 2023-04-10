import PropTypes from "prop-types";
import Transaction from "components/Transaction";
import css from './TransactionHistory.module.css'

const TransactionHistory = ({items}) =>{
    return(
        <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={css.transaction}>
            {items.map((item)=>
                <Transaction 
                    key={item.id} 
                    type={item.type} 
                    amount={item.amount} 
                    currency={item.currency}/>
                )}    
        </tbody>
      </table>   
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}
export default TransactionHistory; 