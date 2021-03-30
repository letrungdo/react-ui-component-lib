import styled from "@emotion/styled";
import React from "react";

enum FontType {
    RobotoRegular = "RobotoRegular",
    RobotoMedium = "RobotoMedium",
    RobotoBold = "RobotoBold",
}

interface Props {
    className?: string;
    fontFamily?: FontType;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    defaultValue?: string;
}

class LabelComponent extends React.PureComponent<Props> {
    render() {
        const { className, children, onClick, defaultValue } = this.props;

        return (
            <p className={`label ${className}`} onClick={onClick}>
                {children ? children : defaultValue}
            </p>
        );
    }
}

const Label = styled(LabelComponent)`
    align-items: center;
    display: inline-flex;
    justify-content: center;
    white-space: nowrap;
    width: auto;
    font-family: ${(props: Props) => props.fontFamily};
    &.inactive {
        opacity: 0.5;
    }
    &.text {
        white-space: pre-wrap;
        word-break: break-word;
    }
`;

Label.defaultProps = {
    className: "",
    fontFamily: FontType.RobotoRegular,
    defaultValue: "-",
};

export { Label, FontType };
