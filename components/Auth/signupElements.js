import styled from "styled-components";
import { Title, Button, Box, Input } from "../Core";
import { device } from "../../utils";

export const BoxStyled = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BoxInner = styled(Box)`
  margin-top: -65px;
  min-height: 100vh;
`;

export const FormStyled = styled.form`
  padding: 40px 30px;
  @media ${device.sm} {
    padding: 53px 58px 50px;
  }
  box-shadow: ${({ theme }) => `0 20px 61px ${theme.colors.shadow}`};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
`;

export const AForgot = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary} !important;
  text-decoration: none !important;
`;
