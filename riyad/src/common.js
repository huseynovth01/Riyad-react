import './common.css';
import React from 'react';
import Button from './components/button/button';
import Photo from './components/photo/photo';
import Text from './components/text/text';
import Icons from './components/icons/icons';

function Common() {
    return (
      <div className='Common'>
        <div className='alltext'>
          <div>
          <Text/>
          <Button/>
          </div>
          <div className='icons'>
            <Icons/>
          </div>
        </div>
        <div className='photo'>
          <Photo/>
        </div>

      </div>
      
    );
  }
  
  export default Common;


