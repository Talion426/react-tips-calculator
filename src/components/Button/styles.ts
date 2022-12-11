import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 13px 10px;

    font-size: 24px;
    font-weight: 400;
    color: #ffffff;

    background-color: #2ed2c9;
    border: none;

    &:hover:not(:disabled) {
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.5;
    }
`;
