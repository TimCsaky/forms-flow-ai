import React from 'react';
import { connect } from 'react-redux';
import { saveForm, selectForm, FormEdit, Errors, selectError } from 'react-formio';
import {push} from "connected-react-router";

const Edit = props => (
  <div>
    <h2>Edit {props.form.title} Form</h2>
    <hr />
    <Errors errors={props.errors} />
    <FormEdit {...props} />
  </div>
)

const mapStateToProps = (state) => {
  return {
    form: selectForm('form', state),
    saveText: 'Save Form',
    errors: selectError('form', state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: (form) => dispatch(saveForm('form', form, (err, form) => {

      if (!err) {
        // TODO: Display a save success message here.
        dispatch(push(`/`));
      }
    }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
