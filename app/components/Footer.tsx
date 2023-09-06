"use client" 

import styled from 'styled-components'

const FooterWrap = styled.footer`
    height: 40px;
    span {
        text-align: right;
        display: block;
    }
`

export default function Footer() {
    return(
        <FooterWrap>
            <span>Copyright 2023. leeheejin all rights reserved.</span>
        </FooterWrap>
    )
}