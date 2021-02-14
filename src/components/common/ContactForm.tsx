import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core';
import useTranslation from '../../hooks/useTranslation';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    borderRadius: '.5rem',
    padding: '3rem 1rem 1.5rem 1rem',
  },
  input: {
    width: '100%',
    margin: '1.5rem 0',

    '& input, textarea': {
      fontSize: '1.5rem',
    },
  },
  button: {
    marginTop: '2rem',
    padding: '1rem 3rem',
    fontSize: '1.5rem',
  },
});

type initialValueType = {
  name?: string;
  mobile?: string;
  email?: string;
  description?: string;
};

interface ContactFormProps {
  initialValues?: initialValueType;
}

const ContactForm = ({ initialValues }: ContactFormProps): JSX.Element => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { handleSubmit, register } = useForm({
    defaultValues: initialValues,
  });

  const handleSave = async (data) => {
    console.log('data', data);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const resolvedResponse = await response.json();
    console.log(resolvedResponse);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSave)}>
      <TextField
        inputRef={register}
        className={styles.input}
        color="primary"
        name="name"
        id="name"
        type="text"
        required
        label={t('common')['name']}
        variant="outlined"
      />
      <TextField
        inputRef={register}
        className={styles.input}
        color="primary"
        name="mobile"
        id="mobile"
        type="text"
        required
        label={t('common')['mobileNumber']}
        variant="outlined"
      />
      <TextField
        inputRef={register}
        className={styles.input}
        color="primary"
        name="email"
        id="email"
        type="email"
        label={t('common')['email']}
        variant="outlined"
      />
      <TextField
        inputRef={register}
        className={styles.input}
        color="primary"
        multiline
        rows={4}
        name="description"
        id="description"
        label={t('common')['message']}
        variant="outlined"
      />
      <Button
        className={styles.button}
        variant="contained"
        color="secondary"
        type="submit"
      >
        {t('common')['send']}
      </Button>
    </form>
  );
};

export default ContactForm;
