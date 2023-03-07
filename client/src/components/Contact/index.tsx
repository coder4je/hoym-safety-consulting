import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Form,
  ContactContainer,
  ContactBg,
  ContactTitle,
  ContactLabel,
  ContactInput,
  ContactMessage,
  ContactCompanyInfo,
  BtnContainer,
  ContactDesc,
  ContactDescSub,
  ContactInfo,
  ContactInfoDetail,
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
    <>
      <ContactBg src={contact} alt="contact" />
      <ContactContainer>
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
            Email:
            <ContactInput
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            Phone Number:
            <ContactInput
              type="tel"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            Message:
            <ContactMessage
              name="message"
              value={values.message}
              onChange={handleChange}
            />
          </ContactLabel>
          <BtnContainer>
            <Button
              type="submit"
              primary={true}
              big={true}
              dark={true}
              fontBig={true}>
              Submit
            </Button>
          </BtnContainer>
        </Form>
        <ContactCompanyInfo>
          <ContactTitle>hoym safety consulting</ContactTitle>
          <br />
          <ContactInfo>
            <ContactDesc className="material-symbols-outlined">
              phone_iphone
            </ContactDesc>
            <ContactInfoDetail> (917)776-9631</ContactInfoDetail>
          </ContactInfo>
          <ContactInfo>
            <ContactDesc className="material-symbols-outlined">
              mail
            </ContactDesc>
            <ContactInfoDetail>hoymconsulting@gmail.com</ContactInfoDetail>
          </ContactInfo>
          <ContactInfo>
            <ContactDescSub>Business Hours</ContactDescSub>
            <span className="hr">Mon - Fri: </span>
            <span className="hr">8am to 5pm EST </span>
            <br />
            <br />
            <span className="hr">Sat - Sun:</span>
            <span className="hr">On Call</span>
          </ContactInfo>
        </ContactCompanyInfo>
      </ContactContainer>
    </>
  );
};

export default Contact;
