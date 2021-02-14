import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';
import ContactForm from './common/ContactForm';

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
  initialText: string;
  dialogTitle: string;
}

const useStyles = makeStyles({
  title: {
    paddingBottom: '0',

    '& h2': {
      fontSize: '3rem',
      fontWeight: 'bolder',
    },
  },
});

const ContactDialog = ({
  open,
  onClose,
  initialText,
  dialogTitle,
}: ContactDialogProps): JSX.Element => {
  const styles = useStyles();

  const initialValues = {
    description: initialText,
  };

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle className={styles.title} id="form-dialog-title">
        {dialogTitle}
      </DialogTitle>
      <DialogContent>
        <ContactForm initialValues={initialValues} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
