import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useTranslation from '../../hooks/useTranslation';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core';

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
  alert: {
    fontSize: '1.3rem',
  },
});

type Severety = 'success' | 'error';

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
  const [submitResult, setSubmitResult] = useState<Severety | null>(null);
  const [alertOpen, setAlertOpen] = useState(true);
  const styles = useStyles();
  const { t } = useTranslation();
  const { handleSubmit, register, reset } = useForm({
    defaultValues: initialValues,
  });

  const hideAlert = () => setAlertOpen(false);

  const handleSave = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setSubmitResult('success');
        setAlertOpen(true);
        reset();
      } else {
        setSubmitResult('error');
      }
    } catch (err) {
      setSubmitResult('error');
    }
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
      {submitResult && (
        <Collapse in={alertOpen}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={hideAlert}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            className={styles.alert}
            severity={submitResult}
          >
            {t('common')[`${submitResult}Submit`]}
          </Alert>
        </Collapse>
      )}
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
