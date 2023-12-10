import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
   padding: 10px 120px;
   background-color : #d70018;
   align-items :  center;
   gap : 16px;
   flex-wrap : nowrap;
`
export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    gap: 16px
    
`
export const WrapperHeaderAccout = styled.div`
    display : flex;
    align-items : center;
    color : #fff;
    gap : 10px;
    
`
export const WrapperTextHeaderSmall = styled.span`
    font-size : 12px;
    color : #fff;
    white-space : nowrap;
`

export const WrapperContentPopup = styled.p`
    cursor : pointer;
    &:hover {
        color: #d70018;
    }
`