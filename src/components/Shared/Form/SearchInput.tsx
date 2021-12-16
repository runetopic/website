import styled from "@emotion/styled";
import theme from "../../../theme";

const StyledInput = styled.input`
    background: #1c2128;
    border: 1px solid #444c56;
    border-radius: 6px;
    min-height: 28px;
    padding-left: ${theme.spacing(1)};
    min-width: 250px;
`;

export const SearchInput = () => {
    return (
        <StyledInput type="search" placeholder="Search or jump to..." />
    )
};

export default SearchInput;