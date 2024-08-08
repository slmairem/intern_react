import React, { useLayoutEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transitionStyles.css'; 

const TransitionWrapper = ({ children, location }) => {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <div className="transition-container">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;
