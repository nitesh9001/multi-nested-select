import React, { useState, useRef, useEffect } from 'react';
const { Countries } = require('../Utils/db_country_state.js');
import Arrow from '../Assets/down-arrow.svg';
import ActionButton from '../Elements/ActionButton';
import { moduleProps } from '../types';
import './SelectModule.css';

const NestedSelect = ({
    buttonContent,
    selectedValue,
    selectLimit,
    callback,
    trailing,
    state,
    continent,
    inputClass,
    dropDownClass,
    buttonClass,
    width,
    enableButton,
    onChange,
    onSearch,
    ...props
}: moduleProps) => {

    const [expandCountry, setExpandCountry] = useState<null | number>(null);
    const [openDropDown, setopenDropDown] = useState<boolean>(false);
    const [showTrailing, setShowTrailing] = useState<boolean>(true);
    const [showButtonComponent, setShowButtonComponent] = useState<boolean>(true);
    const [showState, setShowState] = useState<boolean>(true);
    const [showContinent, setShowContinent] = useState<boolean>(true);
    const [searchValue, setsearchValue] = useState<string>("");
    const [checkledValues, setcheckledValues] = useState<any>([]);
    const [selectItemLimit, setSelectItemLimit] = useState<number>(-1);
    const [disableSelectBox, setDisableSelectBox] = useState<boolean>(false);

    var dataFor: any | undefined;
    const ref = useRef<null | any>(null);

    useEffect(() => {
        setSelectItemLimit(selectLimit ?? -1);
        setcheckledValues(selectedValue ??  []);
    },[]);

    useEffect(() => {
        if (trailing !== undefined) {
            setShowTrailing(trailing);
        }
        if (enableButton !== undefined) {
            setShowButtonComponent(enableButton);
        }
        if (continent !== undefined) {
            setShowContinent(continent);
        }
        if (state !== undefined) {
            setShowState(state);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setopenDropDown(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [openDropDown]);

    useEffect(() => {
        if(selectItemLimit && selectItemLimit > 0 ){
            if(selectItemLimit <= checkledValues.length){
                setDisableSelectBox(true);
            }
        }
    }, [checkledValues]);

    const openShow = (e: any, i: number) => {
        if (i === expandCountry)
            setExpandCountry(-1);
        else
            setExpandCountry(i);
    };

    const searchCountiresorState = (e: any) => {
        setsearchValue(e.target.value);
        let val = e.target.value?.toLowerCase();
        function scrollIfNeeded(element:any, container:any) {
            if (element.offsetTop < container.scrollTop) {
              container.scrollTop = element.offsetTop;
            }
            else {
                const offsetBottom = element.offsetTop ;
                const scrollBottom = container.offsetHeight ;
                if (offsetBottom > scrollBottom) {
                  container.scrollTop = offsetBottom ;
                }
            }
          }
        document.querySelectorAll(".NSI-select-menuitem-list")
        .forEach((ef:any) => {
        if(ef.id?.includes(val)){
            var elementToScroll = document.getElementById(ef.id);
            var elementInScroll = document.getElementById('NSI-select-drop-down-menu-itembox');
            scrollIfNeeded(elementToScroll, elementInScroll);
        }
        });
        if (onSearch) {
            onSearch(e.target.value);
        }
    }

    const selecttheCountry = (e: any, c_data?: any) => {
        var array: any | undefined = [];
        if (e.target.checked) {
            if (checkledValues.length !== 0) {
                checkledValues?.forEach((element: any) => {
                    if (element.code === c_data.code) {
                        element.zones = [...c_data.zones]
                        array = [...checkledValues]
                    } else {
                        const option = {
                            name: c_data.name,
                            code: c_data.code,
                            zones: c_data.zones,
                            ...c_data
                        }
                        array = [...checkledValues, option]
                    }
                });
            } else {
                const option = {
                    name: c_data.name,
                    code: c_data.code,
                    zones: c_data.zones,
                    ...c_data
                }
                array = [...checkledValues, option]
            }
        } else {
            array = checkledValues.filter((item: any) => item.code !== c_data.code)
        }
        setcheckledValues(array);
        dataFor = array;
    }

    const selecttheState = (e: any, c_data: any, s_state: any) => {
        var array: any | undefined = [];
        if (checkledValues.length === 0) {
            const option = {
                ...c_data,
                name: c_data.name,
                code: c_data.code,
                zones: [s_state],
            }
            array = [...checkledValues, option]
        } else {
            checkledValues?.forEach((element: any) => {
                if (element.code === c_data.code) {
                    var finalResult;
                    var state_present = element.zones.some((item: any) => item.code === s_state.code);
                    if (state_present) {
                        finalResult = element.zones.filter((ele: any) => ele.code !== s_state.code);
                        element.zones = finalResult;
                    } else {
                        element.zones = [...element.zones, s_state]
                    }
                    array = [...checkledValues];
                } else {
                    const option = {
                        ...c_data,
                        name: c_data.name,
                        code: c_data.code,
                        zones: [s_state]
                    }
                    array = [...checkledValues, option]
                }
            })
        }
        setcheckledValues(array);
        dataFor = array;
    }

    const findInselectedarray = (country_code: string, state_code: string) => {
        let result = checkledValues.some((element: any) => {
            if (element.code === country_code) {
                return element.zones.some((e: any) => e.code === state_code);
            }
        });
        return result;
    };

    const findInselected = (country_data: any) => {
        var result = false;
        checkledValues.forEach((element: any) => {
            if (element.code === country_data.code) {
                result = element.zones.length === country_data.zones.length;
            }
        })
        return result
    }

    const selectedCount = (code: string) => {
        var result = 0;
        checkledValues.forEach((ele: any) => {
            if (ele.code === code) {
                result = ele.zones?.length
            }
        });
        return result
    }

    const onChangeComp = () => {
        if (onChange) {
            onChange(dataFor);
        }
    };

    return (
        <div className='NSI-main-wrapper' ref={ref} style={{ width: width }} onChange={() => onChangeComp}>
            <input
                type="text"
                value={searchValue}
                placeholder='Select Area'
                className={`${inputClass} NSI-input-box`}
                onFocus={(e: any) => {
                    setopenDropDown(true);
                }}
                onChange={(e: any) => searchCountiresorState(e)}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props}
            />
            {openDropDown &&
                <div className={`${dropDownClass} NSI-select-drop-down-menu-wrapper`} >
                    <div className='NSI-select-drop-down-menu-itembox' id="NSI-select-drop-down-menu-itembox">
                        {Countries.map((conti_data: any, index: number) =>
                            <div key={index}>
                                {showContinent && <div className='NSI-continent-listitem' id={conti_data.name?.toLowerCase()} key={index}>
                                    <li className='NSI-continent-text'>
                                        {conti_data?.name}
                                    </li>
                                </div>
                                }
                                {conti_data?.countries.map((c_data: any, i: number) =>
                                    <div key={i} className={expandCountry === i ? "NSI-select-drop-down-menu-expanded" : ""} data-id={i}>
                                        <li className='NSI-select-menuitem-list' id={c_data.name?.toLowerCase()}>
                                            <div className='NSI-select-menuitem-leading'>
                                                <input
                                                    type="checkbox"
                                                    className='NSI-select-menuitem-checkbox'
                                                    checked={findInselected(c_data)}
                                                    disabled={disableSelectBox}
                                                    onChange={(e: any) => selecttheCountry(e, c_data)}
                                                />
                                                <div>{c_data.name}</div>
                                            </div>
                                            {(c_data?.zones?.length > 0 && showState) && <div className='NSI-select-menuitem-trailing' onClick={(e: any) => openShow(e, i)} >
                                                {showTrailing && <span className='NSI-select-menuitem-trailing-text'>{selectedCount(c_data.code)} of {c_data?.zones?.length} Selected</span>}
                                                <img src={Arrow} className={expandCountry === i ? "NSI-select-arrow-collapse-svg" : "NSI-select-arrow-expand-svg"} />
                                            </div>
                                            }
                                        </li>
                                        {showState && expandCountry === i && c_data.zones.length > 0 &&
                                            c_data.zones.map((item: any, k: number) =>
                                                <li className='NSI-select-menuitem-list inner-list' key={k} id={item.name?.toLowerCase()} data-id={i}>
                                                    <div className='NSI-select-menuitem-leading'>
                                                        <input
                                                            type="checkbox"
                                                            onChange={(e: any) => selecttheState(e, c_data, item)}
                                                            checked={findInselectedarray(c_data.code, item.code)}
                                                            className='NSI-select-menuitem-checkbox'
                                                            // disabled={disableSelectBox}
                                                        /><div>{item.name}</div>
                                                    </div>
                                                    <div>
                                                    </div>
                                                </li>
                                            )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    {showButtonComponent && <>
                        <hr className='NSI-select-drop-down-menu-seperation' />
                        <ActionButton
                            value={checkledValues}
                            callback={callback ? callback : () => { }}
                            buttonContent={buttonContent}
                            buttonClass={buttonClass}
                            closeDropDown={(val: any) => {
                                setopenDropDown(val);
                                setsearchValue("");
                            }}
                        />
                    </>
                    }
                </div>
            }
        </div>
    )
}

export default NestedSelect