import React from "react";
import MultiSelect from 'react-native-multiple-select';

const InputSelect = (props) => {
  // onSelectedItemsChange = selectedItems => {
  //   // this.setState({ selectedItems });
  //   props.input.onChange(selectedItems);
  // };
  return (
    <MultiSelect
      items={props.items}
      uniqueKey="id"
      onSelectedItemsChange={props.onSelectedItemsChange}
      selectedItems={props.selectedItems}
      selectText="Pick Items"
      searchInputPlaceholderText="Search Items..."
      altFontFamily="ProximaNova-Light"
      tagRemoveIconColor="#CCC"
      tagBorderColor="#CCC"
      tagTextColor="#CCC"
      itemTextColor="#000"
      searchInputStyle={{ color: '#CCC' }}
      submitButtonColor="#CCC"
      single={false}
    />
  )
}

export { InputSelect };
