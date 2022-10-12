import React, { useState, useRef, useEffect } from 'react';
const { Countries } = require('../Utils/db_country_state.js');
import ActionButton from '../Elements/ActionButton';
import { moduleProps } from '../typings';
import './SelectModule.css';
import Arrow from '../assets/downarrow.svg';
import search from '../assets/search.svg';

const NestedSelect = ({
    buttonContent,
    selectedValue,
    showDefaultValue,
    selectLimit,
    callback,
    trailing,
    trailingIcon,
    leading,
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
    const [checkedValues, setcheckedValues] = useState<any>([]);
    const [selectItemLimit, setSelectItemLimit] = useState<number>(-1);
    const [disableSelectBox, setDisableSelectBox] = useState<boolean>(false);
    const [isLoading, setIsloading] = useState(false);
    const [isLeading, setLeading] = useState<boolean>(true);
    const [isTrealing, setIstrealing] = useState<boolean>(true);
    const [isExpand, setIsExpand] = useState<boolean>(false);

    var dataFor: any | undefined;
    const ref = useRef<null | any>(null);

    useEffect(() => {
        setSelectItemLimit(selectLimit ?? -1);
        setcheckedValues(selectedValue ??  []);
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
        if (leading !== undefined){
            setLeading(leading);
        }
        if (trailingIcon !== undefined){
            setIstrealing(trailingIcon)
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setopenDropDown(false);
                setIsloading(true);
                setIsExpand(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [openDropDown]);

    useEffect(() => {
        if(selectItemLimit && selectItemLimit > 0 ){
            if(selectItemLimit <= checkedValues.length){
                setDisableSelectBox(true);
            }
        }
    }, [checkedValues]);

    const openShow = (e: any, i: number) => {
        if (i === expandCountry)
            setExpandCountry(-1);
        else
            setExpandCountry(i);
    };

    const searchCountiresorState = (e: any) => {
        setsearchValue(e.target.value);
        setIsloading(false);
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
            if (checkedValues.length !== 0) {
                checkedValues?.forEach((element: any) => {
                    if (element.code === c_data.code) {
                        element.zones = [...c_data.zones]
                        array = [...checkedValues]
                    } else {
                        const option = {
                            name: c_data.name,
                            code: c_data.code,
                            zones: c_data.zones,
                            count:  c_data.zones?.length,
                            ...c_data
                        }
                        array = [...checkedValues, option]
                    }
                });
            } else {
                const option = {
                    name: c_data.name,
                    code: c_data.code,
                    zones: c_data.zones,
                    count:  c_data.zones?.length,
                    ...c_data
                }
                array = [...checkedValues, option]
            }
        } else {
            array = checkedValues.filter((item: any) => item.code !== c_data.code)
        }
        setcheckedValues(array);
        dataFor = array;
    }

    const selecttheState = (e: any, c_data: any, s_state: any, n: number, m: number) => {
        var array: any | undefined = [];
        if (checkedValues.length === 0) {
            const option = {
                ...c_data,
                name: c_data.name,
                code: c_data.code,
                count:  c_data.zones?.length,
                zones: [s_state],
            }
            array = [...checkedValues, option]
        } else {
            var count=0;
            checkedValues?.forEach((element: any, sd: number) => {
                if(element.code === c_data.code) {
                    var finalResult;
                    var counrtyFilter;
                    var state_present = element.zones.some((item: any) => item.code === s_state.code);
                    if (state_present) {
                        finalResult = element.zones.filter((ele: any) => ele.code !== s_state.code);
                        element.zones = finalResult;
                        if(!(finalResult?.length > 0))
                            counrtyFilter = checkedValues.filter((d: any) => element?.code !== d.code);
                        
                    } else {
                        element.zones = [...element.zones, s_state]
                    }
                    array = counrtyFilter?.length > 0 ? [...counrtyFilter] : [...checkedValues];
                    // array = [...checkedValues];
                }
                else{                   
                    if(count === 0){
                        const option = {
                            ...c_data,
                            name: c_data.name,
                            code: c_data.code,
                            count:  c_data.zones?.length,
                            zones: [s_state]
                        }
                        array = [...checkedValues, option];
                        count = count+1;

                    }
                }
            })
        }
        // var finalArr = array.filter((it :any) => {
        //     return it.count !== 0 && it.zones?.length !== 0
        // });
        // setcheckedValues([...finalArr]);
        setcheckedValues([...array]);
        dataFor = array;
    }

    const findInselectedarray = (country_code: string, state_code: string) => {
        let result = checkedValues.some((element: any) => {
            if (element.code === country_code) {
                return element.zones.some((e: any) => e.code === state_code);
            }
        });
        return result;
    };

    const findInselected = (country_data: any) => {
        var result = false;
        checkedValues.forEach((element: any) => {
            if (element.code === country_data.code) {
                result = element.zones.length === country_data.zones.length;
            }
        })
        return result
    }

    const selectedCount = (code: string) => {
        var result = 0;
        checkedValues.forEach((ele: any) => {
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

    const getValue = () => {
        var strings : string = "";
        checkedValues?.map((d: any) => {
            var s : string = d.zones.length > 0 ? `(${d.count} of ${d.zones.length} ${d?.provinceKey?.toLowerCase()}),` : ","
            strings = `${strings} ${d?.name}${s}`
        });
        return strings;
   }

    return (
        <div className='NSI-main-wrapper' ref={ref} style={{ width: width }} onChange={() => onChangeComp()}>
            <input
                type="text"
                value={isLoading ? getValue() : searchValue }
                placeholder='Select Area'
                className={`${inputClass} NSI-input-box`}
                onFocus={(e: any) => {
                    setIsExpand(true);
                    setopenDropDown(true);
                    setIsloading(false);
                }}
                style={isLeading ? { 
                   paddingLeft: 30,
                  }: {paddingLeft: 5, paddingRight: 30}
                }
                onChange={(e: any) => searchCountiresorState(e)}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props}
            />
            {isLeading && <img src={search} alt="" className='NSI-select-input-leading' />}
            {isTrealing && <img src={Arrow} alt="" className={isExpand ? 'NSI-select-input-trailing' : 'NSI-select-input-trailing-180'} onClick={() => {
                setIsExpand(!isExpand);
                setopenDropDown(true);
            }}/>}
            {openDropDown &&
                <div className={`${dropDownClass} NSI-select-drop-down-menu-wrapper`} >
                    <div className='NSI-select-drop-down-menu-itembox' id="NSI-select-drop-down-menu-itembox">
                        {Countries(showDefaultValue, selectedValue).map((conti_data: any, index: number) =>
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
                                                {showTrailing && <span className='NSI-select-menuitem-trailing-text'>{selectedCount(c_data.code)} of {c_data?.zones?.length} {c_data?.provinceKey?.toLowerCase()}</span>}
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
                                                            onChange={(e: any) => selecttheState(e, c_data, item, k, i)}
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
                            value={checkedValues}
                            setIsLoading={setIsloading}
                            setIsExpand= {setIsExpand}
                            isExpand ={isExpand}
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