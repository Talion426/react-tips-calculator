import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
`;

export const Title = styled.h2`
    margin-bottom: 45px;

    font-size: 40px;
    font-weight: 400;
    text-align: center;
    letter-spacing: -0.3px;

    @media (max-width: 767px) {
        margin-bottom: 30px;

        font-size: 24px;
    }
`;
export const SubTitle = styled.p`
    margin-bottom: 45px;

    font-size: 32px;
    font-weight: 400;
    text-align: center;
    color: #756b6b;
    letter-spacing: -0.3px;

    @media (max-width: 767px) {
        margin-bottom: 30px;

        font-size: 24px;
    }
`;

export const Total = styled.p`
    margin-bottom: 30px;

    font-weight: 500;
    font-size: 24px;

    @media (max-width: 767px) {
        font-size: 18px;
    }
`;
