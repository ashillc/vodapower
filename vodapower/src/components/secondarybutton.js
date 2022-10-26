import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  background-color: #FCFCFC;
  width: 20%;
  height: 50px;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 10px;
`;

const StyledText = styled.Text`
font-weight: 600;
font-size: 14px;
text-align: center;
color: ${props => props.enabled ? '#333333' : '#C4C4C4'};
`;

export const SecondaryButton = (props) => {

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


export default SecondaryButton;
