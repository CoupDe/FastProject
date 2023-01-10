import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { newTaskSchema, TNewTask } from "../../validation/newTaskValidation";
import { useAppSelector } from "../../hook/hook";

const initialValueInput: TNewTask = {
  short_description: "",
  creator: "",
  description: "",
  importance_task: "",
};

const NewTask = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();
  const creator = useAppSelector((state) => state.authSlice.userinfo);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Formik
        initialValues={initialValueInput}
        validationSchema={newTaskSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(formik) => (
          <Dialog
            open={isOpen}
            fullScreen={fullScreen}
            fullWidth
            maxWidth="md"
            scroll={"paper"}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <form id="submitForm" onSubmit={formik.handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <DialogTitle
                  component={TextField}
                  sx={{ display: "inline" }}
                  id="scroll-dialog-title"
                  placeholder="Короткое описание"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    mr: 3,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ display: "inline" }}
                    id="scroll-dialog-title"
                  >
                    Data
                  </Typography>
                  <Typography
                    align="center"
                    variant="subtitle1"
                    sx={{ display: "inline" }}
                    id="scroll-dialog-title"
                  >
                    {creator.first_name}
                  </Typography>
                </Box>
              </Box>
              <DialogContent dividers={true} sx={{ overflowX: "hidden" }}>
                <Typography variant="subtitle2">Описание:</Typography>

                <Typography variant="body1">Input task descript</Typography>
              </DialogContent>
              <DialogActions
                sx={{ flexDirection: "column", alignItems: "flex-end" }}
              >
                <Box>
                  <Button onClick={() => navigate(-1)}>Cancel</Button>
                  <Button type="submit">Submit</Button>
                </Box>
                {/* <Button onClick={handleClose}>Subscribe</Button> */}
              </DialogActions>
            </form>
          </Dialog>
        )}
      </Formik>
    </>
  );
};

export default NewTask;
