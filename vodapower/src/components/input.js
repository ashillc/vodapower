import React from 'react';
import styled from 'styled-components/native';

const InputContainer = styled.TextInput`
  height: 50px;  
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 5px 12px;
  margin: 20px;
  width: 350px;
 `;

const InputBox = (props) => {
  return (
      <InputContainer
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#696969"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
        name={props.name}
      />
  );
};
 
export default InputBox;

