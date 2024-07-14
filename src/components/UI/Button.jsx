import { styled } from "@mui/material";

const Button = ({ children, onClick }) => {
  return (
    <StyledBtn onClick={onClick}>{children}</StyledBtn>
  );
};

export default Button;

const StyledBtn = styled("button")`
  background-color: #247bc2;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 18px;
`;
