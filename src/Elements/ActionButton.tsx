import React, { useEffect, useState } from 'react';
import { ActionButtonProps } from '../types';
import './ActionButton.css';

function ActionButton({ 
  value,
  callback,
  buttonContent,
  buttonClass,
  closeDropDown
}: ActionButtonProps) {

  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    if (value.length == 0 ||
      value == null ||
      value == undefined ||
      value === []) {
      setIsloading(true);
    } else {
      setIsloading(false);
    }
  }, [value]);

  const onTrigerSave = () => {
    if (value.length == 0 ||
      value == null ||
      value == undefined ||
      value == []) {
      setIsloading(true);
      console.log("Nested select :- Please select some value");
    } else {
      setIsloading(true);
      if(callback){
        callback(value);
      }
    }
     closeDropDown(false);
  };

  return (
    <div className='NSI-select-drop-down-menu-action'>
      <button className={`${buttonClass} NSI-select-drop-down-menu-button`}
        disabled={isLoading}
        onClick={() => onTrigerSave()}
      > {buttonContent ?? "Save Selected"}</button>
    </div>
  )
}

export default ActionButton