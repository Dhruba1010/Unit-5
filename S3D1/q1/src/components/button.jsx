import styled from 'styled-components';


const Button = styled.button`
    /* border: none; */
    border-radius: 4px;
    margin: 5px;
    text-align: center;
    cursor: pointer;
    justify-content: center;
    padding: 2px;
    font-family: Proxima Nova Regular;
    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    background-color: ${(s) => {return (
        (s.t === 'Primary Button' ? 'dodgerblue' : 'white')
    )}};
    color: ${(s) => {
        // (s.t === 'Primary Button' ? 'white' : 'Link Button' ? 'blue' : 'black')
        if(s.t==='Primary Button'){
            return 'white';
        }else if(s.t==='Link Button'){
            return 'blue';
        }else{
            return 'black';
        }
    }};
    border: ${(s)=> {
        if(s.t==='Default Button'){
            return '1px solid grey';
        }else if(s.t==='Dashed Button'){
            return '1px dashed grey';
        }else{
            return 'none';
        }
    }}
`

export {Button}