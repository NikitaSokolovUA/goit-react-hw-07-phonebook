import styled from "@emotion/styled";


export const ListContact = styled.ul`
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
`

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    :not(:last-child){
        margin-bottom: 10px;
    }
`
export const Contact =styled.p`
    font-size: 20px;
    letter-spacing: 0.03em;
    color: #778899;
`
export const ContactNumber = styled.span`
    margin-left: 20px;
    color: #2F4F4F;
`

export const DeleteBtn =styled.button`
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    letter-spacing: 0.03em;
    cursor: pointer;
    transition: background-color  250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: color  250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus{
        background-color: #2196F3;
        color: white;
    }
`
