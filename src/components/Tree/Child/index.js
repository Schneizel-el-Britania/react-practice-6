import React from 'react';
import { getContent } from '../../../locale';
import { WithLang } from '../../HOCs';
import UserCard from '../UserCard';

const Child = (props) => {
  const { locale } = props;
  return (
    <div>
      <h2>{getContent(locale, 'Child')}</h2>
      <UserCard />
    </div>
  );
}

const ChildWithLang = WithLang(Child);

export default ChildWithLang;
