import loginImage from "@doar/shared/images/img15.png";
import SigninForm from "../../components/signin-form";
import {
    StyledMedia,
    StyledMediaBody,
    StyledImage,
    StyledSignin,
} from "./style";

const AuthContainer = () => {
    return (
        <StyledMedia>
            <StyledMediaBody>
                <StyledImage>
                    <img src={loginImage} alt="Login" />
                </StyledImage>
            </StyledMediaBody>
            <StyledSignin>
                <SigninForm />
            </StyledSignin>
        </StyledMedia>
    );
};

export default AuthContainer;
