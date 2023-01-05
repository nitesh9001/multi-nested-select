
export type moduleProps = {
    buttonContent?: string
    selectedValue?: any
    showCustomList?: any
    selectLimit?: undefined | number
    state?: boolean
    continent?: boolean
    trailing: boolean
    height?: string
    omitSelected?: boolean
    placeholderCtx?: boolean
    chip?: boolean
    chipCount?: number
    expandChip?: boolean
    leading: boolean
    trailingIcon: boolean
    inputClass?: string
    dropDownClass?: string
    buttonClass?: string
    enableButton?: boolean
    width?: string
    error?: boolean
    disable?: boolean
    helperText? : string
    selectAllOption?: boolean
    onChange?: (value: any) => void | undefined
    onChipDelete?: (value: any) => void | undefined
    onViewmore?: (value: any) => void | undefined
    callback?: (value: any) => void | undefined
    onSearch?: (value: string) => void | undefined
}

export type ActionButtonProps = {
    value: any
    chipExpandView?: boolean
    chipCount?: number
    buttonContent?: string
    isExpand: boolean
    buttonClass?: string
    disable?: boolean
    setChipNoCount: (value: any) => void | undefined
    setIsLoading: (value: any) => void | undefined
    callback: (value: any) => void | undefined
    closeDropDown: (value: any) => void | undefined
    setIsExpand: (value: any) => void | undefined
    
};