import styled from "@emotion/styled";
import React from "react";

enum FontType {
    NotoSansJPRegular = "NotoSansJPRegular",
    NotoSansJPMedium = "NotoSansJPMedium",
    NotoSansJPBold = "NotoSansJPBold",
    RobotoRegular = "RobotoRegular",
    RobotoMedium = "RobotoMedium",
    RobotoBold = "RobotoBold",
}

interface Props {
    className?: string;
    text?: string | null;
    children?: React.ReactNode;
    fontFamily?: FontType;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    defaultValue?: string;
}

class LabelComponent extends React.PureComponent<Props> {
    render() {
        const { className, text, children, onClick, defaultValue } = this.props;

        return (
            <span className={`label ${className}`} onClick={onClick}>
                {text ? text : children ? children : defaultValue}
            </span>
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
    fontFamily: FontType.NotoSansJPRegular,
    defaultValue: "-",
};

export { Label, FontType };