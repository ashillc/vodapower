import React from "react";
import styled from "styled-components/native";

const CustomContainer = styled.View``;

const ImageContainer = styled.Image`
    width:90px;
    height:90px;
`;

const ImageWithText = styled.Image`
    width:90px;
    height:90px;
`;

const Product = (props) => {
    return (
        <CustomContainer style={{flex:1}}>
            <CustomContainer style={{position: 'relative'}}>
                {props.isMobile ? (
                    <CustomContainer>
                        <ImageContainer
                         img_path={props?.itemImage}
                        />
                    </CustomContainer>
                ): (
                    <CustomContainer>
                        <ImageWithText/>
                    </CustomContainer>
                )}
            </CustomContainer>
            <CustomContainer style={{position: 'relative'}}>
                {props.isMobile && (
                    <CustomContainer style={{fontSize:16,color:'#333333', minHeight: props?.mobileLabelMinHeight}}>
                        {props.itemName}
                    </CustomContainer>
                )}

{!props.isMobile && props?.finalPriceReq && (
              <CustomContainer
                style={{marginTop:15,height:auto}}
              >
                {!props.showPriceInLine ? (
                  <>
                    {props?.isPrepaidOnly || isOnceOff ? (
                      <>
                        <CustomContainer
                        style={{fontSize:16,textAlign:'center',color:'#E6000'}}
                        >
                          {"now only R"}
                          {numberFormat(Math.round(props?.finalPrice))}
                        </CustomContainer>
                        <CustomContainer
                            style={{fontSize:15,color:'#333333'}}
                        >
                          {"was R"}
                          {numberFormat(Math.round(props.minimumPrice))}
                        </CustomContainer>
                      </>
                    ) : (
                      <CustomContainer
                      style={{fontSize:16,color:'#333333',marginTop:14,marginBottom:18,textAlign:'center'}}>
                        {"from R"}
                        {numberFormat(Math.round(props?.dealProductPrice))}
                        {" PM"}
                      </CustomContainer>
                    )}
                  </>
                ) : (
                  <CustomContainer
                  style={{textAlign:'center'}}>
                    {checked ? (
                      <span style={{color:'#E6000'}}>+</span>
                    ) : (
                      ""
                    )}
                    <span style={{fontSize:16,textAlign:'center',color:'#E6000'}}>
                      {"R" + numberFormat(Math.round(props?.finalPrice))}
                    </span>
                    <span style={{fontSize:14,textAlign:'center',color:'#333333'}}>
                      {" R" + numberFormat(Math.round(props.minimumPrice))}
                    </span>
                  </CustomContainer>
                )}
              </CustomContainer>
            )}

            </CustomContainer>
        </CustomContainer>
    );
};

export default Product;