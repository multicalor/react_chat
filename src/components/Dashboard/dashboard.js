import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Chip from '@material-ui/core/Chip';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    margin: "50px",
    textAlign: "center",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

  flex: {
		display: "flex",
		alignItems: "center"
  },

  topicsWindow: {alignItem: "left",
		// alignItem: "left",
		padding: '20px',
  },

  chatBox: {
    width: "85%",
  },

  button: {
    width: "15%",
  },
});

function Dushboard(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4" component="h4">
          Chat app
        </Typography>
        <Typography variant="h5" component="h5">
          Topic placeholder
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {['TOPIC'].map((topic) => (
                <ListItem key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}></div>
					<List>
              {[{from: 'user', msg: 'hello'}].map((chat, i) => (
								<div className={classes.flex} key={i}>
									<Chip label={chat.from} className={classes.chip} />
									<div>
										<Typography variant='p'>{chat.msg}</Typography>
									</div>
								</div>
              ))}
            </List>
        </div>
        <div className={classes.flex}></div>
      </Paper>
    </div>
  );
}

Dushboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dushboard);
