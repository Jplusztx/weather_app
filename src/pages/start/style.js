import styled from 'styled-components'

const StartStyled = styled.div`
  position: relative;
  height: 100%;
  .start{
    position: absolute;
    display: inline-block;
    width: 180px;
    height: 60px;
    background: url(${require('../../assets/img/Entry.png').default}) ;
    background-position: center center;
    background-size: 200%
  }
`

export default StartStyled;