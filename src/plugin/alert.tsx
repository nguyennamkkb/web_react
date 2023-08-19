import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

const Notification = (props: any) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    return (
      <div className={`notification ${show ? 'show' : 'hide'}`}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    );
};

export default Notification;