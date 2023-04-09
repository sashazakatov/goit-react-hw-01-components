import PropTypes from "prop-types";
import Description from 'components/Description';
import Stats from 'components/Stats';
import StatsItem from 'components/StatsItem';
import css from './Profile.module.css'

const Profile = ({username, tag, location, avatar, stats}) =>{
    return (
        <div className={css.profile}>
          <Description avatar={avatar} username={username} tag={tag} location={location}/>
          <Stats>
            <StatsItem label={"Followers"} quantity={stats.followers}/>
            <StatsItem label={"Views"} quantity={stats.views}/>
            <StatsItem label={"Likes"} quantity={stats.likes}/>
          </Stats>
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