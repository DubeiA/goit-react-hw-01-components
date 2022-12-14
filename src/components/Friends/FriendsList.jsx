import css from "../Friends/Friends.module.css"
import PropTypes from 'prop-types';

export const FriendList = ({ friends}) => (
  <ul>
    {friends.map(friend => (
      <li className={css.item} key={friend.id}>
        {friend.isOnline === true ? <span className={css.statusGreen}></span> : <span className={css.statusRed}></span>}
        <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
        <p className={css.name}>{friend.name}</p>
    </li>
    ))}
  </ul>
);

FriendList.propTypes = {
friends: PropTypes.array.isRequired,
}