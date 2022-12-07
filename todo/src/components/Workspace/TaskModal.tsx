import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";

import { Box } from "@mui/system";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { ITask } from "../../typeinterfaces/types";
import CommentInput from "./CommentInput";
import CommentTask from "./CommentTask";

const TaskModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [comment, setComment] = useState(false);


  const location = useLocation();
  const task = location.state as ITask;

  const navigate = useNavigate();
  // const task = useAppSelector((state) =>
  //   state.viewTaskSlice.taskList.find((task) => task.id === +taskId!)
  // );

  const isSuccess = true;
  // const { data, isSuccess } = useFetchTaskQuery(+taskId! ?? skipToken);
  // const { data } = useFetchTaskQuery(+taskId);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleopenTask = () => {};
  const handleCloseDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        fullScreen={fullScreen}
        fullWidth
        maxWidth="md"
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {isSuccess ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <DialogTitle sx={{ display: "inline" }} id="scroll-dialog-title">
                <em>{task.short_description}</em>
              </DialogTitle>
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
                  {task.created_at}
                </Typography>
                <Typography
                  align="center"
                  variant="subtitle1"
                  sx={{ display: "inline" }}
                  id="scroll-dialog-title"
                >
                  {task.creator}
                </Typography>
              </Box>
            </Box>
            <DialogContent dividers={true}>
              <Typography variant="subtitle2">Описание:</Typography>
              <Typography variant="body1">{task.short_description}</Typography>
              {/* Comment Component */}
              <CommentTask comment={comment} />
              <CommentInput />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => navigate(-1)}>Cancel</Button>
              <Button onClick={() => navigate(-1)}>Submit</Button>
              {/* <Button onClick={handleClose}>Subscribe</Button> */}
            </DialogActions>
          </>
        ) : (
          <Box sx={{ height: "50px" }}>
            <SyncLoader />
          </Box>
        )}
      </Dialog>
    </>
  );
};

export default TaskModal;
