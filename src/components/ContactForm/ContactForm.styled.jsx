import styled from "@emotion/styled"

export const FormContainer = styled.div`
    width: 400px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const Label = styled.label`
     
    
    
`
export const LabelName = styled.span`
margin-left: 40px;
margin-bottom: 5px;
display: block;
    color: #757575;
    letter-spacing: 0.03em;
`

export const Input = styled.input`
   margin-left: 40px;
   padding-left: 20px;
    width: 80%;
    height: 40px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    font-size: 20px;
    letter-spacing: 0.06em;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :focus-within{
        border: 1px solid #2196F3;
    }
    :focus-visible{
        border: 1px solid #2196F3;
        outline: none;
    }

    :first-of-type{
        margin-bottom: 40px;
    }
`

export const SubmitButton = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;
    
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #2F4F4F;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus{
        background-color: #2196F3;
    }
`