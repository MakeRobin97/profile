import { createGlobalStyle } from 'styled-components'
import PretendardBold from './Pretendard-Bold.woff'
import Pretendard from './Pretendard-Regular.woff'
import PretendardLight from './Pretendard-Light.woff'

export default createGlobalStyle`
  @font-face {
    font-family: "PretendardBold";
    src: url(${PretendardBold}) format("woff"),
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${Pretendard}) format("woff"),
  }
  @font-face {
    font-family: "PretendardLight";
    src: url(${PretendardLight}) format("woff"),
  }

`