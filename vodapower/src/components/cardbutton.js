import React from 'react';
import styled from 'styled-components/native';


const CardContainer = styled.TouchableOpacity`
background-color: #E60000;
border-radius: 10px;
width: 60px;
height: 60px;
`;

export const CardButton = () => {
      return (
        <CardContainer
        // onPress={props.customClick}
        >
          
        </CardContainer>
      );
};

export default CardButton;
