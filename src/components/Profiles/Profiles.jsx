import css from "../Profiles/Profiles.module.css"


export const Profiles = props => (
    
    <div className={css.profile}>
  <div className={css.description}>
    <img
      src={props.avatar}
                alt={props.username}
                width="320"
                height="240"
      className={css.avatar}
    />
    <p className={css.name}>{props.username}</p>
            <p className={ css.tag}>{ props.tag}</p>
    <p className={css.location}>{ props.location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.items}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{props.followers}</span>
    </li>
   <li className={css.items}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{props.views}</span>
    </li>
    <li className={css.items}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{props.likes}</span>
    </li>
  </ul>
    </div>
    
)

