
export type moduleProps = {
    buttonContent?: string
    selectedValue?: any
    showDefaultValue?: boolean
    selectLimit?: undefined | number
    state?: boolean
    continent?: boolean
    callback?: (value: any) => void | undefined
    trailing: boolean
    leading: boolean
    trailingIcon: boolean
    inputClass?: string
    dropDownClass?: string
    buttonClass?: string
    enableButton?: boolean
    onChange?: (value: any) => void | undefined
    width: string
    onSearch?: (value: string) => void | undefined
}

export type ActionButtonProps = {
    value: any
    buttonContent?: string
    setIsLoading: (value: any) => void | undefined
    callback: (value: any) => void | undefined
    buttonClass?: string
    closeDropDown: (value: any) => void | undefined
    setIsExpand: (value: any) => void | undefined
    isExpand: boolean
};