import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from "formik";


const FormField = props => {
  const { id, name, label } = props;
  const type = props.type || "text";
  return (
    <div className="inputContainer inlineContainer">
      <Field className="inputField" id={ id } name={ name } type={ type } required/>
      <label className="label" htmlFor={ id }>{ label }</label>
      <ErrorMessage name={ name }>
        { msg => <div className='messageError'>{ msg }</div> }
      </ErrorMessage>
    </div>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;