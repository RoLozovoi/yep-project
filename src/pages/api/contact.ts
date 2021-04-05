import type { NextApiRequest, NextApiResponse } from 'next';
import isEmail from 'validator/lib/isEmail';
import isMobile from 'validator/lib/isMobilePhone';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.CONTACT_MAIL,
    pass: process.env.MAIL_PASS,
  },
  debug: true,
  logger: true,
});

type ValidatorType = {
  isValid: boolean;
  errorText: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const { isValid, errorText }: ValidatorType = validate(req.body);
    if (!isValid) {
      res.status(400).send(errorText);
      return;
    }

    const mailOptions = {
      from: req.body.email,
      to: process.env.CONTACT_MAIL,
      subject: 'PODCAST AWARENESS',
      text: JSON.stringify(req.body),
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send(error.errorText);
        return;
      } else {
        console.info('Email sent: ', info.response);
        res.status(200).send('Success');
        return;
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
    return;
  }
};

function validate({ name, email, mobile }): ValidatorType {
  let isValid = true;
  let errorText = '';

  if (!name) {
    isValid = false;
    errorText = 'Name is required';
  }

  if (!isEmail(email)) {
    isValid = false;
    errorText = 'Correct email is required';
  }

  if (!isMobile(mobile)) {
    isValid = false;
    errorText = 'Correct mobile number is required';
  }

  return { isValid, errorText };
}
