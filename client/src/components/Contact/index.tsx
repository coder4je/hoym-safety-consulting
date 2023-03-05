import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  ContactContainer,
  Form,
  ContactBg,
  ContactTitle,
  ContactLabel,
  ContactInput,
  ContactMessage,
} from "./ContactElements";
import { Button } from "../ButtonElements";
import contact from "../../images/contact.jpg";

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

// type Props = {
//   onSubmit: (values: FormValues) => void;
// };

const Contact: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    // onSubmit(values);
  };
  return (
    <ContactContainer>
      <ContactBg src={contact} alt="contact" />
      <Form onSubmit={handleSubmit}>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactLabel>
          Name:
          <ContactInput
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </ContactLabel>
        <ContactLabel>
          Email:
          <ContactInput
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </ContactLabel>
        <ContactLabel>
          Phone Number:
          <ContactInput
            type="tel"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
          />
        </ContactLabel>
        <ContactLabel>
          Message:
          <ContactMessage
            name="message"
            value={values.message}
            onChange={handleChange}
          />
        </ContactLabel>
        <Button
          type="submit"
          primary={true}
          big={true}
          dark={true}
          fontBig={true}>
          Submit
        </Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
