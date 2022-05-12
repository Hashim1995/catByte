import ItemList from "../Components/ItemList/ItemList";
import Button from "@mui/material/Button";
import React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <ItemList />
      <Button
        onClick={() => setOpen(true)}
        style={{ position: "fixed", left: "50%", bottom: 15, zIndex: 9999 }}
        variant="contained"
      >
        Add
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto
            fugiat, iure exercitationem cumque, ea temporibus ipsam, repudiandae
            consequuntur eum veritatis adipisci deserunt? Aliquam delectus fuga,
            hic debitis saepe maxime.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button>Add user</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
