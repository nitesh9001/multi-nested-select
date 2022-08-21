export type moduleProps = {
    buttonContent?: string
    selectedValue?: any
    selectLimit?: undefined | number
    state?: boolean
    continent?: boolean
    callback?: (value: any) => void | undefined
    trailing: boolean
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
    callback: (value: any) => void | undefined
    buttonClass?: string
    closeDropDown: (value: any) => void | undefined
  };