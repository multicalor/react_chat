import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Chip from "@material-ui/core/Chip";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {ctx} from '../../Store'

const styles = (theme) => ({
  root: {
    // ...theme.mixins.gutters(),
    margin: "50px",
    textAlign: "center",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

  flex: {
    display: "flex",
    maxWidth: "1024px",
    // alignItems: 'center',
  },

  topicsWindow: {
    // alignItem: "left",
    height: "300px",
    padding: "20px",
    borderRight: "1px solid grey",
  },

  chatWindow: {
    height: "300px",
    padding: "2%",
  },

  chatBox: {
    // height: '30px',
    width: "85%",
  },

  inputMessageText: {
    width: "80%",
    marginRight: "30%",
  },

  button: {
    marginRight: '2%',
    marginBottom: '0',
  },
});

function Dashboard(props) {
  const { classes } = props;

  // Context store
  const {allChats, sendChatAction, user } = useContext(ctx); // убрал i
  console.log(allChats)
  const topics = Object.keys(allChats)

  // Local state
  const [activeTopic, changeActiveTopic] = useState(topics[0])
  const [textValue, changeTextValue] = useState('');

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4" component="h4">
          Chat app
        </Typography>
        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {topics.map((topic) => (
                <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}></div>
          <List>
            {
            allChats[activeTopic].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} className={classes.chip} />
                <div>
                  <Typography variant="body1" gutterBottom >{chat.text}</Typography>
                  {/* <Typography variant="body1" gutterBottom >{i}</Typography> */}
                </div>
              </div>
            ))}
          </List>
        </div>
        <div className={classes.flex}>
          <TextField
            id="outlined-basic"
            label="Send a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
          />
          <Button 
          className = {classes.button} 
          variant="contained" 
          color="primary"
          onClick={() => {
            sendChatAction({from: user, text: textValue, topic: activeTopic});
            changeTextValue('');
          }}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
