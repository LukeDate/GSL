import styled from 'styled-components';

//style variables
const gray = '#9b9b9b';
const primaryLight = '#11998e';
const secondaryLight = '#38ef7d';
const primaryDark = '#991111';
const secondaryDark = '#ef3838';
const white = '#fff';

//styled themes
export const lightTheme = {
    light: 'light',
    body: '#E2E2E2',
    invertbody: '#363537',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: `linear-gradient(to right, ${primaryLight},${secondaryLight})`,
    focus: `${primaryLight}`
  }
  
  export const darkTheme = {
    dark: 'dark',
    body: '#363537',
    invertbody: '#E2E2E2',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: `linear-gradient(to right, ${primaryDark},${secondaryDark})`,
    focus: `${primaryDark}`
  }

//styled components
export const PageWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    min-width: 500px;
    // justify-content: center;
    // align-items: center;
    overflow: scroll;
    max-height: ${({ savedArticles }) => savedArticles && '75%'};
`;

export const StyledNav = styled('nav')`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  height: 50px;
  > a {
      text-decoration: none;
      color: ${({ theme }) => theme.invertbody};
      margin: 0 50px;
  }
`;

export const FormGroup = styled('div')`
    position: relative;
    padding: 15px 0 0;
    margin: 150px 0 50px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const StyledList = styled('ul')`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 500px;
    > li {
        padding: 5px 0;
        border-bottom: 1px solid #ccc;
        height: 30px;
        overflow: hidden;
        transition: font-size 0.3s ease, background-color 0.3s ease, height 0.3s ease;
    }
    > li:last-child {
        border: none;
      }
    > li a {
        text-decoration: none;
        display: block;
        width: 100%;
        text-align: left;
        color: ${({ theme }) => theme.text};
      }
    > li:hover {
        height: auto;
    }
    > li p {
        text-align: left;
        >span {
            color: #ff6961;
        }
    }
}
`;

export const StyledInput = styled('input')`
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${gray};
    outline: 0;
    font-size: 1.3rem;
    // color: ${white};
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    &::placeholder {
        color: transparent;
      }
    &:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }
    &:focus {
        ~ .form__label {
          position: absolute;
          top: 0;
          display: block;
          transition: 0.2s;
          font-size: 1rem;
          color: ${({ theme }) => theme.focus};
          font-weight:700;    
        }
        padding-bottom: 6px;  
        font-weight: 700;
        border-width: 3px;
        border-image: ${({ theme }) => theme.gradient};
        border-image-slice: 1;
      }
`;

export const StyledLabel = styled('label')`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${gray};
`;

export const StyledButton = styled('button')`
    @keyframes fadeOut {
        99% {
        visibility: visible;
        }
        100% {
        visibility: hidden;
        }
    }
    
    animation: ${({ save, remove }) => (save && !remove) && '0.5s fadeOut ease'};
    animation-fill-mode: ${({ save, remove }) => (save && !remove) && 'forwards'};
    visibility: ${({ save, remove }) => (save && !remove) && 'hidden'};
    
    width: 95px;
    border: 1px solid ${({ theme }) => theme.invertbody};
    outline: none;
    background: ${({ theme }) => theme.invertbody};
    color: ${({ theme }) => theme.body};
    cursor: pointer;
    z-index: 0;
    border-radius: 10px;
    &:hover {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.invertbody};
    }
    &:active {
        background: ${({ theme }) => theme.invertbody};
        color: ${({ theme }) => theme.body};
    }
    &:disabled {
        opacity: 0.5;
    }

`;

export const ThemeButton = styled('button')`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    width: 4rem;
    height: 2rem;
    &:focus {
        outline:0;
    }
    > svg {
        height: auto;
        width: 2.5rem;
        transition: all 0.3s linear;
        
        // sun icon
        &:first-child {
          transform: ${({ theme }) => theme.light ? 'translateY(0)' : 'translateY(100px)'};
        }
        
        // moon icon
        &:nth-child(2) {
          transform: ${({ theme }) => theme.light ? 'translateY(-100px)' : 'translateY(0)'};
        }
      }
`;

export const RandomPage = styled('button')`
    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }
    position: absolute;
    bottom: 5%;
    left: 10px;
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.invertbody};
    cursor: pointer;
    z-index: 0;
    border-radius: 10px;
    &:before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }
    &:active {
        color: ${({ theme }) => theme.body};
    }
    &:active:after {
        background: transparent;
    }
    &:hover:before {
        opacity: 1;
    }
    &:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.invertbody};
        left: 0;
        top: 0;
        border-radius: 10px;
    }
    > a {
        text-decoration: none;
        color: ${({ theme }) => theme.body};
        font-size: 20px;
        width: 220px;
        height: 50px;
    }
`;

//loading spinner 

export const LoadingSpinner = styled('h3')`
    @keyframes ellipsis {
        to {
        width: 1.25em;    
        }
    }
    
    @-webkit-keyframes ellipsis {
        to {
        width: 1.25em;    
        }
    }
    font-size: 30px;
    width: 500px !important;
    margin: 1px;
    padding: 1px;
    &:after {
      overflow: hidden;
      display: inline-block;
      vertical-align: bottom;
      -webkit-animation: ellipsis steps(4,end) 900ms infinite;      
      animation: ellipsis steps(4,end) 900ms infinite;
      content: "\2026";
      width: 0px;
    }
`;


  
  