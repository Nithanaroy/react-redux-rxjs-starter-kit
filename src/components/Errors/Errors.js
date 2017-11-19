import React from "react";
import PropTypes from "prop-types";

const Errors = ({ errors = [] }) =>
  errors.length > 0 && <div className="alert alert-danger alert-dismissible" role="alert">
    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Error!</strong> {errors.join( ", " )}
  </div>;

Errors.propTypes = { "errors": PropTypes.array };

export default Errors;