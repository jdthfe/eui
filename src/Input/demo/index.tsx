import React from 'react';
import { Input, WingBlank, Icon } from '@src/index';

const { useInput } = Input;

const nameValidationRules = [
    {
        reg: /.+/,
        message: 'name is not empty',
        validated: true,
    },
    {
        reg: /.*/,
        message: 'name is empty',
        validated: false,
    },
];

const passwordValidationRules = [
    {
        reg: /^.{0,5}$/,
        message: 'Min. 6 characters',
        validated: false,
    },
    {
        reg: /^.{21,}$/,
        message: 'Max. 20 characters',
        validated: false,
    },
    {
        reg: /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/,
        message: 'validated!',
        validated: true,
    },
    {
        reg: /.*/,
        message: 'contain at least one number & one letter',
        validated: false,
    },
];

const Demo = () => {
    const { bind: nameBind, value: nameValue, message: nameMessage, validated: nameValidated } = useInput({
        validationRules: nameValidationRules,
    });
    const {
        bind: passwordBind,
        value: passwordValue,
        message: passwordMessage,
        validated: passwordValidated,
    } = useInput({ validationRules: passwordValidationRules });
    const { bind: phoneBind } = useInput();
    return (
        <div className="Input">
            <Input placeholder="Your name" tag={'Name'} {...nameBind} />
            <Input
                autoComplete="password"
                type="password"
                placeholder="Your Password"
                tag={'Password'}
                {...passwordBind}
            />
            <WingBlank>
                <p>
                    Name-value: {nameValue}
                    <br />
                    Name-message: {nameMessage}
                    <br />
                    Name-validated: {nameValidated ? 'True' : 'False'}
                </p>
            </WingBlank>
            <WingBlank>
                <p>
                    Password: {passwordValue}
                    <br />
                    Password-message: {passwordMessage}
                    <br />
                    Password-validated: {passwordValidated ? 'True' : 'False'}
                </p>
            </WingBlank>
            <Input beforeInput={'Tag：'} placeholder={'Tag before input'} {...phoneBind} />
            <Input
                tag={'Phone with arrow Icon'}
                type="tel"
                maxLength={11}
                afterInput={<Icon size="s" value="arrow" />}
                placeholder="Your phone"
                {...phoneBind}
            />
            <Input tag={'Disable'} placeholder="Can't input value" disabled {...phoneBind} />
        </div>
    );
};

export default Demo;
