import { Heart } from "react-feather";
import {
    StyledFooter,
    StyledFooterLeft,
    StyledFooterRight,
    StyledFooterNav,
    StyledFotterNavLink,
} from "./style";

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterRight>
                <StyledFooterNav>
                    <StyledFotterNavLink path="https://themeforest.net/licenses/standard">
                        라이센스
                    </StyledFotterNavLink>
                    <StyledFotterNavLink path="/">
                        버전 History
                    </StyledFotterNavLink>
                    <StyledFotterNavLink path="https://hasthemes.com/contact-us/">
                        도움말
                    </StyledFotterNavLink>
                </StyledFooterNav>
            </StyledFooterRight>
            <StyledFooterLeft>
                <span>&copy; ZIOGLE {new Date().getFullYear()} </span>
                <span className="copright-link">
                    CREATED <Heart size="24" /> BY{"  "}
                    <a
                        href="https://www.zioyou.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ZIOGLE
                    </a>
                </span>
            </StyledFooterLeft>
        </StyledFooter>
    );
};

export default Footer;
