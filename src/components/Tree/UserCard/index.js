import React from 'react';
import { getContent } from '../../../locale';
import { WithLang, WithUser } from '../../HOCs';
import styles from './UserCard.module.scss';



const UserCard = (props) => {
  const { user, locale } = props;
  return (
    <div className={styles.container}>
      <h2>{getContent(locale, 'UserCard')}</h2>
      <p>{user.fname} {user.sname}</p>
      <img src={user.imgSrc} className={styles.img} alt={`${user.sname} ${user.fname}`} />
    </div>
  );;

}

const UserCardWithUser = WithUser(UserCard);
const UserCardWithLang = WithLang(UserCardWithUser);

export default UserCardWithLang;