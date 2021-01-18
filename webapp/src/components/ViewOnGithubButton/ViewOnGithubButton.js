import React from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const ViewOnGithubButton = () => (
  // <br></br>
  <a
    style={{ textDecoration: 'none' }}
    href="https://github.com/neu-mis-info6150-fall-2020/final-project-group-8.git"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
      inverted
    >
      <Icon style={{ marginRight: '1rem' }} icon="logo-github" />
      View on GitHub
    </Button>
  </a>
);

export default ViewOnGithubButton;
