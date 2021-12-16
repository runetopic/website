import StyledAside from "./StyledAside";
import StyledDetails from "./StyledDetails";
import StyledProfileImage from "./StyledProfileImage";
import StyledSummary from "./StyledSummary";

export const Sidebar = () => {
    return (
        <StyledAside>
            <StyledDetails>
                <StyledSummary>
                    <StyledProfileImage
                        src="https://avatars.githubusercontent.com/u/11916106?s=40&amp;v=4"
                        alt="@tyler27"
                        height="20"
                        width="20"
                        data-view-component="true"
                    />
                    <span>tyler27</span>
                </StyledSummary>
            </StyledDetails>
        </StyledAside>
    );
}

export default Sidebar;