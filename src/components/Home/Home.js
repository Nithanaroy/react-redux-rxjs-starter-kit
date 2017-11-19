/*eslint camelcase: off, no-return-assign: off */

import React from "react";
import PropTypes from "prop-types";


const Home = ({ person = {}, onNewPerson = f=>f, onPersonPropChange = ( p, v )=>v }) => {
  let { id, displayName, email } = { ...person };

  function updatePersonProp ( prop, newValue ) {
    onPersonPropChange( prop, newValue );
  }
  function savePerson ( e ) {
    e.preventDefault();
    onNewPerson( person );
  }

  return (
    <div className="home">
      <header className="page-header no-border-bottom no-padding-bottom">
        <h3 className="uk-heading-primary">Save Employee</h3>
      </header>
      <div className="margin10">
        <form className="uk-form-horizontal uk-margin-large">

          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-horizontal-text">ID</label>
            <div className="uk-form-controls">
              <input className="uk-input" value={id} type="text" disabled
                placeholder="ID of the person will appear here on save" />
            </div>
          </div>

          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-horizontal-text">Name</label>
            <div className="uk-form-controls">
              <input className="uk-input" value={displayName} type="text"
                onChange={e => updatePersonProp( "displayName", e.target.value )} placeholder="Fullname of the person" />
            </div>
          </div>

          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-horizontal-text">Email</label>
            <div className="uk-form-controls">
              <input className="uk-input" value={email} type="text"
                onChange={e => updatePersonProp( "email", e.target.value )} placeholder="email address of the person" />
            </div>
          </div>

        </form>
        <button type="button" className="uk-button uk-button-primary" onClick={savePerson}>Save</button>
      </div>
    </div>
  );
};

Home.propTypes = {
  "person": PropTypes.object,
  "onNewPerson": PropTypes.func,
  "onPersonPropChange": PropTypes.func
};

export default Home;