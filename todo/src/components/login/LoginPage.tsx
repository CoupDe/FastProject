import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  FormHelperText,
  Input,
  InputLabel,
  Link,
  Paper,
  Stack,
} from "@mui/material";

import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../api/authApi";
import {
  authErrorHandler,
  isFetchBaseQueryError,
} from "../../services/errorHandlers/authErrors";
// import { AuthErrorData } from "../../services/errorHandlers/authErrors";
import { useDispatch, useSelector } from "react-redux";
import {
  IAuthFormValuesByToken,
  IError,
  IStatusAuthInfo,
} from "../../typeinterfaces/types";
import { signInSchema } from "../../validation/signInFormValidation";
import {
  StyledFieldBox,
  StyledFormControl,
  StyledGitHubIcon,
  StyledInstagramIcon,
} from "./styledAuthForm";

import { getStatus } from "../../services/errorHandlers/statusBarAuth";
import { statusAuth } from "../../slices/authSlice";
import { RootState } from "../../slices/store";
import StatusAuthBar from "./StatusAuthBar";
import { redirect } from "react-router";

const initialValuesToken: IAuthFormValuesByToken = {
  login_field: "",
  password: "",
};

let statusInfo: IStatusAuthInfo = {
  authLogInfo: { status: "default", payloadInfo: "" },
};
//Скорее всего  кривое решение, поизучать и исправить!
//Функция возвращает компонент с иконкой в поле ввода логина
const IconLoginField = ({ val }: { val: string }): JSX.Element => {
  let icon: JSX.Element;
  if (val.includes("@")) {
    icon = <EmailIcon fontSize="large" sx={{ mx: 0.3 }} />;
  } else {
    icon = <PersonIcon fontSize="large" sx={{ mx: 0.3 }} />;
  }
  return <>{icon}</>;
};

const LoginPage = () => {
  const [tokenAuth, { data, error: authError, isSuccess, isError, isLoading }] =
    useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state: RootState) => state.authSlice);
  // Выглядит нагроможденно, вероятно надо переписать
  // Сам эффект выполняет роль диспатча обработанных данных через 'хелпер' getStatus
  // Обработка заключается в приведении в более читаемый формат
  useEffect(() => {
    let errorMessage: IError = { detail: "", status: "" };

    if (authError) {
      if (isFetchBaseQueryError(authError)) {
        errorMessage = authErrorHandler(authError);
      }
    }

    const first_name = data?.userinfo.first_name || "";
    dispatch(
      statusAuth(
        getStatus({
          isError,
          errorMessage,
          isSuccess,
          first_name,
          isLoading,
        })
      )
    );
    if (isAuth) {
      setTimeout(() => {
        navigate("/todo");
      }, 500);
    }
  }, [
    data,
    authError,
    isError,
    isSuccess,
    isLoading,
    dispatch,
    isAuth,
    navigate,
  ]);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        height: "600px",
        opacity: "0.8",
        justifyContent: "space-between",
      }}
      elevation={18}
    >
      {isSuccess ? (
        <LockOpenIcon
          color="success"
          sx={{ fontSize: "70px", margin: "30px auto 0 auto" }}
        />
      ) : (
        <LockIcon
          color={authError ? "error" : "action"}
          sx={{ fontSize: "70px", margin: "30px auto 0 auto" }}
        />
      )}
      <Box sx={{ margin: "0 auto", height: "15px" }}>
        <StatusAuthBar {...statusInfo} />
      </Box>
      <Formik
        initialValues={initialValuesToken}
        onSubmit={(values) => tokenAuth(values)}
        validationSchema={signInSchema}
      >
        {(formik) => (
          <Stack
            onSubmit={formik.handleSubmit}
            component="form"
            sx={{ mb: 2 }}
            spacing={2}
          >
            <StyledFieldBox>
              <IconLoginField val={formik.values.login_field} />
              <StyledFormControl
                error={
                  formik.touched.login_field && !!formik.errors.login_field
                }
                variant="standard"
                sx={{ width: "100%", mr: 1 }}
                $isError={
                  !!formik.touched.login_field && !!formik.errors.login_field
                }
              >
                <InputLabel htmlFor="login_field ">Логин или email</InputLabel>
                <Input
                  {...formik.getFieldProps("login_field")}
                  type="login_field"
                  id="login_field"
                />

                <FormHelperText>
                  {!!formik.errors.login_field && formik.values.login_field
                    ? formik.errors.login_field
                    : " "}
                </FormHelperText>
              </StyledFormControl>
            </StyledFieldBox>

            <StyledFieldBox>
              <KeyIcon fontSize="large" sx={{ mx: 0.3 }} />
              <StyledFormControl
                error={formik.touched.password && !!formik.errors.password}
                variant="standard"
                sx={{ width: "100%", mr: 1 }}
                $isError={!!formik.touched.password && !!formik.errors.password}
              >
                <InputLabel htmlFor="password ">Пароль</InputLabel>
                <Input
                  {...formik.getFieldProps("password")}
                  type="password"
                  id="password"
                />

                <FormHelperText>
                  {!!formik.errors.password && formik.values.password
                    ? formik.errors.password
                    : " "}
                </FormHelperText>
              </StyledFormControl>
            </StyledFieldBox>

            <Button
              disabled={
                !(formik.isValid && formik.dirty && !formik.isSubmitting)
              }
              type="submit"
              size="large"
            >
              Войти
            </Button>
            <Button size="large">Регистрация</Button>
          </Stack>
        )}
      </Formik>
      <Box
        aria-label="social"
        sx={{
          display: "flex",
          marginX: 0.5,
          mb: 2,
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="end">
          <StyledGitHubIcon />
          <StyledInstagramIcon />
        </Stack>
        <Stack>
          <Link variant="caption" underline="none" href="#" color="inherit">
            Забыл пароль?
          </Link>
        </Stack>
      </Box>
    </Paper>
  );
};

export default LoginPage;
