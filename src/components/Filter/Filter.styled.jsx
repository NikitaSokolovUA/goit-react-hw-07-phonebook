import styled from "@emotion/styled";


export const SearchContainer = styled.div`
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
`

export const TextTitle = styled.span`
    display: block;
    margin-bottom: 10px;
    margin-left: 40px;
    color: #000;
    font-size: 20px;
    letter-spacing: 0.06em;
`

export const SearchInput = styled.input`
display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    width: 80%;
    height: 40px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 20px;
    letter-spacing: 0.06em;

    :focus-within{
        border: 1px solid #2196F3;
    }
    :focus-visible{
        border: 1px solid #2196F3;
        outline: none;
    }
`