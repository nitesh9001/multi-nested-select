export const defaultConfig = {
    buttonContent : "Save Selected",
    callback : (value) => {},
    trailing: true,
    leading: true,
    leading: true,
    trailingIcon: true,
    selectedValue: [],
    selectLimit: -1,
    inputClass: "NSI-input-box",
    dropDownClass: "NSI-select-drop-down-menu-wrapper",
    buttonClass: "NSI-select-drop-down-menu-button",
    width: 360,
    enableButton: true,
    onChange: (value) => {}, // only when enableButton : false
    onSearch: (s_sting) => {},
    disabled: false,
    state: true,
    continent: true,
    ...props
}