import './icons.css'

import React from 'react';
import github from './github.svg';
import twitter from './twitter.svg..webp';
import cricle from './cricle.svg';

function Icons() {
  return (
    <div className='icon'>
        <img className='icons' src={twitter} alt="twitter" />
        <img className='icons' src={github} alt="github" />
        <img className='icons' src={cricle} alt="cricle" />
    </div>
  );
}

export default Icons;
