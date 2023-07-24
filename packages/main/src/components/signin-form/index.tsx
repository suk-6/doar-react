import { FormGroup, Label, Input, Anchor, Button } from "@doar/components";
import { useForm, SubmitHandler } from "react-hook-form";
import { hasKey } from "@doar/shared/methods";
import {
    StyledWrap,
    StyledTitle,
    StyledDesc,
    StyledLabelWrap,
    StyledDivider,
    StyledBottomText,
} from "./style";

interface IFormValues {
    email: string;
    password: string;
}

const SigninForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        alert(JSON.stringify(data, null));
    };

    return (
        <StyledWrap>
            <StyledTitle>로그인</StyledTitle>
            <StyledDesc style={{ fontSize: 14 }}>
                지오글에 오신 것을 환영합니다. 사용자를 확인합니다.
            </StyledDesc>
            <form action="#" onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormGroup mb="20px">
                    <Label display="block" mb="5px" htmlFor="email">
                        로그인 계정
                    </Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="전자메일 주소를 입력하세요."
                        feedbackText={errors?.email?.message}
                        state={hasKey(errors, "email") ? "error" : "success"}
                        showState={!!hasKey(errors, "email")}
                        {...register("email", {
                            required: "전자메일 주소를 입력해야 합니다.",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "전자메일 주소가 비어있습니다.",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup mb="20px">
                    <StyledLabelWrap>
                        <Label display="block" mb="5px" htmlFor="password">
                            비밀번호
                        </Label>
                        <Anchor path="/forgot-password" fontSize="13px">
                            비밀번호를 잊으셨습니까?
                        </Anchor>
                    </StyledLabelWrap>
                    <Input
                        id="password"
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        feedbackText={errors?.password?.message}
                        state={hasKey(errors, "password") ? "error" : "success"}
                        showState={!!hasKey(errors, "password")}
                        {...register("password", {
                            required: "비밀번호를 입력해야 합니다.",
                            minLength: {
                                value: 6,
                                message: "비밀번호는 6자리 이상입니다.",
                            },
                            maxLength: {
                                value: 32,
                                message:
                                    "비밀번호는 32자리를 초과할 수 없습니다.",
                            },
                        })}
                    />
                </FormGroup>
                <Button type="submit" color="brand2" fullwidth>
                    로그인
                </Button>
                <StyledDivider>or</StyledDivider>
                <Button color="success" mt="0.5rem" fullwidth>
                    Naver 계정으로 로그인
                </Button>
                <Button color="warning" mt="0.5rem" fullwidth>
                    카카오 계정으로 로그인
                </Button>
                <Button color="info" mt="0.5rem" fullwidth>
                    Google 계정으로 로그인
                </Button>
                <Button color="secondary" mt="0.5rem" fullwidth>
                    Apple 계정으로 로그인
                </Button>
                <StyledBottomText>
                    계정이 없으십니까?{" "}
                    <Anchor path="/signup">무료 회원가입</Anchor>
                </StyledBottomText>
            </form>
        </StyledWrap>
    );
};

export default SigninForm;
