"use client";

import './globals.css'
import styled  from 'styled-components'
import { Container } from '../styles/bodystyle';

const TopBox = styled.div`
  display: flex;
  height: 60%;
  gap: 2%;
  .box1, .box2, .box3 {
    position: relative;
    bottom: 0;
  }
  .box1 {
    width: 20%;
    height: 383px;
    background: #F7B74B;
  }
  .box2 {
    width: 25%;
    height: 388px;
  }
  .box3{
    width: 43%;
    height: calc(100vh - 120px);
    background: #F7BB52;
    z-index: 100;
  }
`
const BottomBox = styled.div`
  height: 40%;
  background: #2A2A94;
  z-index: -1;
  .title {
    h2 {
      color: #FEFAEC;
      font-size: 7vw;
      font-weight: 800;
      padding: 2% 10%;
    }
  }
`
export default function Home() {
  return (
        <Container>
          <TopBox>
            <div className='box1'></div>
            <div className='box2'>
              <p>
                Hello. I am Heejin Lee,<br/> 
                A developer who love to learn.
              </p>
            </div>
            <div className='box3'></div>
          </TopBox>
          <BottomBox>
            <div className="title">
              <h2>PORTFOLIO</h2>
              <p>Hee Jin</p>
            </div>
          </BottomBox>
        </Container>
  )
}