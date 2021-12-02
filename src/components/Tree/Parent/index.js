import React from 'react';
import { WithLang } from '../../HOCs';
import { getContent } from '../../../locale';
import Child from '../Child';

const Parent = (props) => {
  const { locale } = props;
  return (
    <div>
      <h2>{getContent(locale, 'Parent')}</h2>
      <Child />
    </div>
  );
}

const ParentWithLang = WithLang(Parent);

export default ParentWithLang;
