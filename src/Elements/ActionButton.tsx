import React, { useEffect, useState } from 'react';
import { ActionButtonProps } from '../typings';
import './ActionButton.css';

function ActionButton({ 
  value,
  disable,
  chipCount,
  isExpand,
  buttonClass,
  buttonContent,
  chipExpandView,
  callback,
  setIsExpand,
  setIsLoading,
  closeDropDown,
  setChipNoCount,
}: ActionButtonProps) {

  const [isLoading, setIsloadingButton] = useState<boolean>(false);

  useEffect(() => {
    if (disable && disable == true) {
        setIsloadingButton(true);
    } else {
      setIsloadingButton(false);
    }
  }, [value]);

  const onTrigerSave = () => {
    if (value?.length == 0 ||
      value == null ||
      value == undefined) {
      setIsloadingButton(true);
      console.log("Nested select :- Please select some value");
    } else {
      setIsloadingButton(true);
      if(callback){
        callback(value);
        if(setIsLoading){
          setIsLoading(true);
        }
        if(setIsExpand && isExpand){
          setIsExpand(!isExpand);
        }
        if(chipExpandView){
          if(chipCount){
              setChipNoCount(chipCount);
          }
      }
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