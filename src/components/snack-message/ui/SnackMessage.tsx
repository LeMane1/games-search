import {Snackbar} from "@mui/material";

export default function SnackMessage() {
  return (
    <Snackbar
      // open={state.open}
      // onClose={handleClose}
      // slots={{ transition: state.Transition }}
      message="I love snacks"
      // key={state.Transition.name}
      autoHideDuration={1200}
    />
  )
}