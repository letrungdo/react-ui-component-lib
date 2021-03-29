import styled from "@emotion/styled";
import React from "react";
import { FontType } from "../Label";

interface Props {
    onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    fontFamily?: FontType;
    disabled?: boolean;
    btnRef?: string | ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null;
    children?: React.ReactNode;
}

const Button = ({ onClick, className, disabled, btnRef, children, fontFamily }: Props) => (
    <ButtonStyle
        fontFamily={fontFamily}
        disabled={disabled}
        type="button"
        className={`btn ${className}`}
        onClick={onClick}
        ref={btnRef}
    >
        {children}
    </ButtonStyle>
);

Button.defaultProps = {
    className: "",
    fontFamily: FontType.RobotoRegular,
};

const ButtonStyle = styled.button`
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    font-family: ${(props: Props) => props.fontFamily};
    &:active {
        opacity: 0.7;
    }
    &:disabled {
        cursor: unset;
        &:active {
            opacity: 1;
        }
    }
`;

export { Button };
