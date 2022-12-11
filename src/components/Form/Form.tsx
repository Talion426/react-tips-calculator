import { FormEvent, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/Select";
import { Input } from "../Input/Input";
import { InputGroup, StyledForm, SubTitle, Title, Total } from "./styles";

export const Form = () => {
    const [bill, setBill] = useState<number>(0);
    const [persons, setPersons] = useState<number>(0);
    const [tips, setTips] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    const [isDisabled, toogleDisabled] = useState<boolean>(true);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const commonTips = (bill * tips) / 100;
        const commonBill = bill + commonTips;
        setTotal(+(commonBill / persons).toFixed(2));
    };
    useEffect(
        () => (bill && persons && tips && bill > 0 && persons > 0 ? toogleDisabled(false) : toogleDisabled(true)),
        [bill, persons, tips]
    );

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Title>Welcome to App</Title>
            <SubTitle>Let’s go calculate your tips</SubTitle>
            <InputGroup>
                <Input placeholder="Enter bill" onChange={setBill} />
                <Input placeholder="Enter persons" onChange={setPersons} />
                <CustomSelect value={tips} setTips={setTips} />
            </InputGroup>
            <Total>Total: {total}$</Total>
            <Button isDisabled={isDisabled} />
        </StyledForm>
    );
};
