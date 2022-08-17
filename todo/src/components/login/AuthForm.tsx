import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  FormHelperText,
  Input,
  InputLabel,
  Link,
  Paper,
  Stack
} from "@mui/material";
import { Formik } from "formik";
import { signInSchema } from "../../validation/signInFormValidation";
import {
  StyledFieldBox,
  StyledFormControl,
  StyledGitHubIcon,
  StyledInstagramIcon
} from "./styledAuthForm";

interface AuthFormValues {
  login: string;
  password: string;
}
interface NumberButtonProps {
  val: string;
}

export function IconChange({ val }: NumberButtonProps) {
  let icon: JSX.Element;
  if (val.includes("@")) {
    icon = <EmailIcon fontSize="large" sx={{ mx: 0.3 }} />;
  } else {
    icon = <PersonIcon fontSize="large" sx={{ mx: 0.3 }} />;
  }

  return <>{icon}</>;
}
const AuthForm = () => {
  const initialValues: AuthFormValues = {
    login: "",
    password: "",
  };

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
      <LockIcon
        color="action"
        sx={{ fontSize: "70px", margin: "30px auto 0 auto" }}
      />
      <Formik<AuthFormValues>
        initialValues={initialValues}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
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
              <IconChange val={formik.values.login} />
              <StyledFormControl
                error={formik.touched.login && !!formik.errors.login}
                variant="standard"
                sx={{ width: "100%", mr: 1 }}
                $isError={!!formik.touched.login && !!formik.errors.login}
              >
                <InputLabel htmlFor="login ">Логин или email</InputLabel>
                <Input
                  {...formik.getFieldProps("login")}
                  type="login"
                  id="login"
                />

                <FormHelperText>
                  {!!formik.errors.login && formik.values.login
                    ? formik.errors.login
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

            <Button disabled={!formik.isValid} type="submit" size="large">
              Войти
            </Button>
            <Button size="large">Регистрация</Button>
          </Stack>
        )}
      </Formik>
      <Box
        component="section"
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

export default AuthForm;
