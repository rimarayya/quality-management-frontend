import { useState } from "react";

import "./modules/common/styles/material-ui.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useCounterStore } from "./modules/common/stores/counter.store";
import { Snackbar } from "@mui/material";

function TemporaryDrawer() {
  const { increase } = useCounterStore();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    if (newOpen) increase();

    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <CounterIncreaser />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

function CounterIncreaser() {
  const increase = useCounterStore((state) => state.increase);

  return <Button onClick={increase}>Increase</Button>;
}

function App() {
  const counter = useCounterStore((state) => state.count);

  return (
    <>
      <TemporaryDrawer />
      <Box sx={{ width: 500 }}>
        <Snackbar
          open={true} // Always open
          message={counter} // Text inside the Snackbar
          autoHideDuration={null} // Prevent auto-hide
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // Position at bottom right
        />
      </Box>
    </>
  );
}

export default App;
