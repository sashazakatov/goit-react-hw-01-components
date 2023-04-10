import PropTypes from "prop-types";
import Stats from 'components/Stats';
import StatsItem from 'components/StatsItem';
import css from './Profile.module.css'

const Profile = ({username, tag, location, avatar, stats}) =>{
    return (
        <div className={css.profile}>
          <div className={css.description}>
            <img className={css.avatar} src={avatar} alt={username} />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{`@${tag}`}</p>
            <p className={css.location}>{location}</p>
          </div>
          <Stats/>
        </div>
    );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}
export default Profile;