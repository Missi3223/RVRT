import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button,  Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Activities from "../layout/Activities";
import Campgrounds from "../layout/Campgrounds";
import RepairShops from "../layout/RepairShops";
import DIYs from "../layout/DIYs";
import Maps from "../layout/Maps"


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <Button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </Button>
          </div>
        </div>


      <Row>
      <Col md={4}> <Campgrounds /> </Col>
      <Col md={{ span:4, offset: 4 }}><RepairShops /></Col>
      </Row>
      <Row>
      <Col md={{ span:6, offset: 6 }}><Maps /></Col>
      </Row>
        <Row>
        <Col md={4} ><Activities /></Col>
        <Col md={{ span:4, offset: 4 }}><DIYs /></Col>
      </Row>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);