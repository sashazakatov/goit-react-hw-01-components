import PropTypes from "prop-types";
import css from './Description.module.css'

const Description = ({avatar, username, tag, location}) =>{
    return (
        <div className={css.description}>
            <img className={css.avatar} src={avatar} alt={username} />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{`@${tag}`}</p>
            <p className={css.location}>{location}</p>
        </div>
    );
}

Description.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
}

export default Description;