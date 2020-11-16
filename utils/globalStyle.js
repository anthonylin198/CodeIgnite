import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.bg} !important;

    color: ${({ theme }) => theme.colors.text} !important;
  }

  p, .p{
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 30px;
    margin-bottom: 0;
  }

  ul,.ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }



  a {
    color: ${({ theme }) => theme.colors.text} !important;
    transition: all 0.3s ease-out;
    &:hover, &:active, &:focus{
      color: ${({ theme }) => theme.colors.secondary} !important;
      text-decoration: none!important;
      outline: none !important;
    }
  }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    input[type="number"] {
      -moz-appearance: textfield; /* Firefox */
    }

  // ! Add in loading CSS here
  .sk-chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: sk-chase-dot 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: #5454d4;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}

`;

export default globalStyle;
