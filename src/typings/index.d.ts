
export type moduleProps = {
    buttonContent?: string
    selectedValue?: any
    showDefaultValue?: boolean
    selectLimit?: undefined | number
    state?: boolean
    continent?: boolean
    trailing: boolean
    height?: string
    placeholderCtx?: boolean
    chip?: boolean
    chipCount?: number
    leading: boolean
    trailingIcon: boolean
    inputClass?: string
    dropDownClass?: string
    buttonClass?: string
    enableButton?: boolean
    width?: string
    onChange?: (value: any) => void | undefined
    onChipDelete?: (value: any) => void | undefined
    onViewmore?: (value: any) => void | undefined
    callback?: (value: any) => void | undefined
    onSearch?: (value: string) => void | undefined
}

export type ActionButtonProps = {
    value: any
    buttonContent?: string
    isExpand: boolean
    buttonClass?: string
    setIsLoading: (value: any) => void | undefined
    callback: (value: any) => void | undefined
    closeDropDown: (value: any) => void | undefined
    setIsExpand: (value: any) => void | undefined
    
};