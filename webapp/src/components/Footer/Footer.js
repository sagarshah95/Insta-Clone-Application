import React from 'react';

import TextButton from '../Button/TextButton/TextButton';
import Icon from '../Icon/Icon';

const Footer = () => (
  <footer className="footer">
    <div className="footer__right">
      <h4
        className="heading-4 color-grey font-bold"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        MADE WITH
        <Icon
          className="icon--small color-grey"
          icon="heart"
          style={{ display: 'inline-block', margin: '0 5px' }}
        />{' '}
        BY TEAM-8
      </h4>
    </div>
  </footer>
);

export default Footer;
