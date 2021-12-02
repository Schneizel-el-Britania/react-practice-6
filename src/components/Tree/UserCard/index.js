import React from 'react';
import { WithUser } from '../../HOCs';
import styles from './UserCard.module.scss';



const UserCard = (props) => {
  const { user } = props;
  return (
    <div className={styles.container}>
      <h2>UserCard</h2>
      <p>{user.fname} {user.sname}</p>
      <img src={user.imgSrc} className={styles.img} alt={`${user.sname} ${user.fname}`} />
    </div>
  );;

}

const UserCardWithUser = WithUser(UserCard);

export default UserCardWithUser;