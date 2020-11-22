import React from 'react';

import { MAX_ITEMS } from '../../helpers/constants.js'

import './Loader.scss';

const Loader = (props) => {
  const toggleLoader = (images) => {
    const classes = ['loader'];
    if (images.length === MAX_ITEMS) {
      classes.push('loader_disable')
    }
    return classes.join(' ');
  }

  return (
    <div className={toggleLoader(props.images)}>
      <div className="loader__circle"></div>
    </div>
  )
}

export default Loader;