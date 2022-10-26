import React from 'react';
import styled from 'styled-components/native';

const TextContainer = styled.Text`
    color:#ffffff;
    font-size: 14px;
    font-weight: 600;
`;
 
const StyledText = (props) => {
  return <TextContainer>{props.text}</TextContainer>;
};
 
export default StyledText;