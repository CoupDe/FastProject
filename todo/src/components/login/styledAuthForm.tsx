import { Box } from "@mui/material";
import styled from "styled-components";

interface FieldProps {
  isError?: boolean;
}
export const StyledFieldBox = styled(Box)<FieldProps>`
  display: flex;
  align-items: ${(props: FieldProps) =>
    props.isError ? "flex-end" : "center"};
`;
