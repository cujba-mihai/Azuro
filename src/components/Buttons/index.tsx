import { Link } from "expo-router";
import { StyleProp, TextStyle } from "react-native";
import styled, { css } from "styled-components/native";

const ButtonLink = styled(Link)`
    ${({ theme }) => css`
    
    border-radius: ${theme.borderRadius.md}px;
    border: 1px solid ${theme.colors.accent};
    background-color: ${theme.colors.accent};

    display: flex;
    padding: 10px 14px;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accentContent};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    
    text-align: center;
`}
`;

const GhostButtonLink = styled(Link)`
${({ theme }) => css`

    border-radius: ${theme.borderRadius.md}px;
    border: ${theme.border.none};
    background-color: ${theme.colors.transparent};

    padding: 10px 14px;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.neutralFocus};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    
    text-align: right;
`}
`;

export const ButtonLinkComponent = ({ to, children, ghost = false, }: { ghost?: boolean; to: string; } & React.PropsWithChildren) => {

    if (ghost) return <GhostButtonLink href={to}>{children}</ GhostButtonLink>

    return <ButtonLink href={to}>{children}</ButtonLink>

};
