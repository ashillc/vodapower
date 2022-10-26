import React from "react";
import { TouchableOpacity, View, StyleSteet } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

const BoxContainer = styled.TouchableOpacity`
border-color: #C4C4C4;
width: 20px;
height: 20px;
border-width: 1px;
border-radius: 2px;
`;
const Box = styled.View`
background-color: ${props => props.disabled ? '#C4C4C4' : '#FFFFFF'};
align-items: center;
width: null;
height:null;
flex: 1px;
`;

export const CheckBox = () => {
    return (
        <BoxContainer>
            <Box>
            <Ionicons
            name={'md-checkmark'}
            size={20}
            color={'#08081B'}
            />
            </Box>
        </BoxContainer>
    );
};

export default CheckBox;