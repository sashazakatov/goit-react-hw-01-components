import PropTypes from "prop-types";
import css from './FriendList.module.css'

const FriendList = ({friends}) =>{
    return (
        <ul className={css.friendList}>
            {friends.map((friend) =>{
                return (
                <li key={friend.id} className={css.item}>
                    <span className={css.status} data-status={friend.isOnline}></span>
                    <img className={css.avatar} src={friend.avatar} alt={friend.avatar} width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>);
            })}
        </ul>
    )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })).isRequired,
}
export default FriendList;