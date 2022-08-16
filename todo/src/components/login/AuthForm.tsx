import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Link,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useRef } from "react";
import styled from "styled-components";
import { signInSchema } from "../../validation/signInFormValidation";
import {
  StyledFieldBox,
  StyledTextField,
  StyledGitHubIcon,
  StyledInstagramIcon,
} from "./styledAuthForm";

interface AuthFormValues {
  login: string;
  password: string;
}

const AuthForm = () => {
  const textHelperRef = useRef();
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
            <StyledFieldBox isError={!formik.errors.login}>
              <PersonIcon fontSize="large" sx={{ mr: 0.5 }} />

              <StyledTextField
                inputRef={textHelperRef}
                error={formik.touched.login && !!formik.errors.login}
                sx={{ width: "100%", mr: 1 }}
                id="login"
                label="Логин"
                variant="standard"
                {...formik.getFieldProps("login")}
                name="login"
                helperText={
                  formik.values.login &&
                  !!formik.errors.login &&
                  formik.errors.login
                }
                $isError={!!formik.touched.login && !!formik.errors.login}
              />
            </StyledFieldBox>
            <StyledFieldBox isError={!formik.errors.password}>
              <FormControl
                error={formik.touched.password && !!formik.errors.password}
                variant="standard"
                sx={{ width: "100%", mr: 1 }}
              >
                <KeyIcon fontSize="large" sx={{ mx: 0.3 }} />
                <InputLabel htmlFor="password ">Пароль</InputLabel>
                <Input
                  {...formik.getFieldProps("password")}
                  type="password"
                  id="password"
                ></Input>
                <FormHelperText></FormHelperText>
              </FormControl>
            </StyledFieldBox>
            <StyledFieldBox isError={!formik.errors.password}>
              <KeyIcon fontSize="large" sx={{ mx: 0.3 }} />
              {/*Добавить иконку просмотра пароля*/}
              <StyledTextField
                aria-label="password"
                sx={{ width: "100%", mr: 1 }}
                error={formik.touched.password && !!formik.errors.password}
                helperText={
                  formik.values.password &&
                  !!formik.errors.password &&
                  formik.errors.password
                }
                type="password"
                id="password"
                label="Пароль"
                variant="standard"
                $isError={!!formik.touched.password && !!formik.errors.password}
                {...formik.getFieldProps("password")}
              />
              <FormHelperText>asddsa</FormHelperText>
            </StyledFieldBox>

            <Button disabled={!formik.isValid} type="submit" size="large">
              Войти
            </Button>
            <Button
              onClick={() => console.log(textHelperRef.current)}
              size="large"
            >
              Регистрация
            </Button>
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
