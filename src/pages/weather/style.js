import styled from 'styled-components'

export const WeatherPageStyled = styled.div`
    display: flex;
    justify-content:space-around;
    align-items:center;
    width: 500px;
    height: 380px;
    background: url(${require('../../assets/img/background.jpg').default});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    .arrow{
      width: 75px;
      height: 75px;
      margin: 0 20px;
      cursor: pointer;
    }
    .left{
      background: url(${require('../../assets/img/leftArrow.png').default});
      background-position: center center;
      background-size: 80%;
      background-repeat: no-repeat;
    }
    .weather{
      flex: 1;
      height: 100%;
    }
    .right{
      background: url(${require('../../assets/img/rightArrow.png').default});
      background-position: center center;
      background-size: 80%;
      background-repeat: no-repeat;
    }

`
export const WeatherStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  .cityname{
    letter-spacing:1px;
    padding: 50px 0 30px 0;
  }
  .show{
    width: 100%;
    height: 200px;
    .img{
      width: 100%;
      height: 100px;
      background: url(${require('../../assets/img/thunderStorm.png').default});
      background-position:center center;
      background-size: 40%;
      background-repeat: no-repeat;
    }
    .temperature{
      display: flex;
      margin: 20px 0;
      font-size: 20px;
      justify-content: space-around;
    }
  }
  .weathername{
    letter-spacing: 1px;
  }
`