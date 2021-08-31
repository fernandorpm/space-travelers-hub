import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserve } from '../../../redux/rockets/rocketsSlice';

import style from './rocket.module.scss';

const Rocket = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();

  const reservedSpan = <span>Reserved</span>;

  const [reservedTag, setReservedTag] = useState(null);
  const [reservedClass, setReservedClass] = useState(style.notReserved);

  const handleClick = (idRocket) => {
    dispatch(reserve(idRocket));
  };

  useEffect(() => {
    if (reserved) {
      setReservedTag(reservedSpan);
      setReservedClass(style.reserved);
    } else {
      setReservedTag(null);
      setReservedClass(style.notReserved);
    }
  }, [reserved]);

  return (
    <div className={style.container}>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>
          {reservedTag}
          {description}
        </p>
        <button
          type="button"
          className={reservedClass}
          onClick={() => handleClick(id)}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.string,
};

Rocket.defaultProps = {
  reserved: 'false',
};

export default Rocket;
