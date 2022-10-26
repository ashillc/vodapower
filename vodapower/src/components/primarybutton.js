import React from 'react';
import styled from 'styled-components/native';



const ButtonContainer = styled.TouchableOpacity`
  background-color: #C4C4C4;
  width: 100%;
  height: 50px;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 10px;
`;

const StyledText = styled.Text`
font-weight: 600;
font-size: 18px;
text-align: center;
color: #333333;
`;

export const PrimaryButton = (props) => {
      return (
        <ButtonContainer
        onPress={props.customClick}
        >
          <StyledText>
          {props.title}
              </StyledText>
        </ButtonContainer>
      );
};


export default PrimaryButton;
