import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  body: {
    marginTop: 60,
    marginLeft: 100,
    marginRight: 100
  },
  profileImage: {
    display: "inline-block",
    margin: 30,
    marginTop: 40,
    width: 200,
    height: 200
  },
  basicInfo: {
    display: "inline-block",
    margin: 30,
    verticalAlign: "top"
  },
  name: {
    margin: 10,
    fontFamily: "Helvetica Neue",
    fontSize: 48,
    marginBottom: 20
  },
  secondaryInfo: {
    margin: 10,
    fontFamily: "Helvetica Neue",
    fontSize: 18
  }
};

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div className={this.props.classes.body}>
        <img className={this.props.classes.profileImage} src={this.props.url} />
        <div className={this.props.classes.basicInfo}>
          <div className={this.props.classes.name}>{this.props.name}</div>
          <div className={this.props.classes.secondaryInfo}>{this.props.description}</div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(UserProfile);
