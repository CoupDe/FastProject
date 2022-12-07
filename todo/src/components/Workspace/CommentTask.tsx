import {
  DialogContentText,
  Divider, Paper,
  Typography
} from "@mui/material";
import React, { useState } from "react";
interface IProps {
  comment: boolean;
}
const CommentTask: React.FC<IProps> = ({ comment }) => {
  const [showInput, setShowInput] = useState(false);
  console.log(comment);

  return (
    <>
      <Paper
        sx={{
          borderRadius: "12px",
          p: "2px",
          border: "3px solid grey",
        }}
      >
        <Typography variant="subtitle2" align="right">
          <em>Employye Comment</em>
        </Typography>
        <Divider />
        <DialogContentText
          variant="body1"
          id="scroll-dialog-description"
          tabIndex={-1}
        >
          {"\u00A0"} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Officiis, fugiat nam? Quidem voluptatem ipsum reiciendis corporis
          adipisci odio ipsa delectus optio molestias officia, molestiae aperiam
          eos, eligendi itaque, dolores doloremque.
        </DialogContentText>
      </Paper>
    </>
  );
};

export default CommentTask;
