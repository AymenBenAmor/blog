import * as React from 'react';

export const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
  if (email && !re.test(String(email).toLowerCase())) {
    return 'Invalid email';
  }
};

const encode = data => {
  return Object.keys(data)
    .map(
      key => encodeURIComponent(key) + '=' + encodeURIComponent(`${data[key]}`)
    )
    .join('&');
};

export const required = (value, key, label) => {
  if (!value || value === '' || value.trim() === '') {
    return `${label ? label : key} field is required`;
  }
};

export function displayErrorMessage(errors, label, meta, submitted) {
  const error = errors[label];
  if (error) {
    return (
      (meta[label] || submitted) && (
        <span className="error-message">
          {error.map((err, index) => (
            <span key={index} style={{ display: 'block', color: 'red' }}>
              {err}
            </span>
          ))}
        </span>
      )
    );
  }
}

export function validateForm(formValues, validationConfig) {
  const err = {};
  validationConfig.forEach(item => {
    const requiredValidation = required(
      formValues[item.key],
      item.key,
      item.label
    );
    err[item.key] = requiredValidation ? [requiredValidation] : null;
  });
  if (formValues.email) {
    const emailValidation = validateEmail(formValues.email);
    if (emailValidation) {
      if (!err.email) {
        err.email = [emailValidation];
      }
    }
  }
  return err;
}

export const useForm = (initialForm, formName, validationObject, postUrl) => {
  const [success, setSuccess] = React.useState(false);
  const [saveError, setSaveError] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [form, setForm] = React.useState(initialForm);
  const [submitted, setSubmitted] = React.useState(false);
  const [meta, setMeta] = React.useState({});
  const errors = validateForm(form, validationObject);

  const handleChangeField = e => {
    setMeta({
      ...meta,
      [e.target?.name]: 'touched',
    });
    setForm({
      ...form,
      [e.target?.name]: e.target?.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (saving) {
      return;
    }
    setSubmitted(true);
    setSaving(true);
    if (Object.keys(errors).filter(key => errors[key]).length === 0) {
      const body = new FormData();
      Object.keys(form).forEach(key => {
        body.append(key.toUpperCase(), `${form[key]}`);
      });
      fetch(postUrl ? postUrl : '/?no-cache=1', {
        method: 'POST',
        headers: postUrl
          ? undefined
          : { 'Content-Type': 'application/x-www-form-urlencoded' },
        mode: postUrl ? 'no-cors' : undefined,
        body: postUrl
          ? body
          : encode({
              'form-name': formName,
              ...form,
            }),
      })
        .then(() => setSuccess(true))
        .catch(() => setSaveError(true))
        .finally(() => setSaving(false));
    }
  };

  return {
    handleChangeField,
    handleSubmit,
    success,
    submitted,
    saveError,
    meta,
    errors,
    saving,
  };
};
