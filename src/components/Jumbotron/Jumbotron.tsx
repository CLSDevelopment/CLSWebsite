import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

import './Jumbotron.scss';

type JumbtronProps = {
  img?: string;
  children: any;
  component?: any;
  sideComponent?: boolean;
  left?: any;
  right?: any;
};

export const Jumbotron: React.FC<JumbtronProps> = ({
  img,
  children,
  component,
  sideComponent,
  left,
  right,
}) => {
  const sideClass = [
    'col-md-12',
    'col-lg-6',
    'jumbotrom-header',
    sideComponent === true && 'left-side',
  ];

  return (
    <div className="jumbotrom-component row">
      <div className={sideClass.join(' ')}>
        <Jump>
          {img && <img className="jumbotrom-image" src={img} alt="jumbotrom" />}
        </Jump>
        <Fade right>
        {component && component}
      
      </Fade>
      </div>
      <Pulse>
        <div className="col-md-12 col-lg-6 platform-body">{children}</div>
      </Pulse>
    </div>
  );
};
