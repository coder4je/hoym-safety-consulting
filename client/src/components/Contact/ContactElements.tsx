import styled from "styled-components";

export const ContactContainer = styled.div``;

export const Form = styled.form`
  width: 100%;
  height: 70vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1rem 3rem;
`;

export const ContactTitle = styled.h1`
  color: #464d5c;
  margin: 2rem;
`;

export const ContactLabel = styled.label`
  color: #464d5c;

  font-weight: 700;
  font-size: clamp(1rem, 4vw, 1.5rem);
  display: flex;
  flex-direction: column;
`;

export const ContactInput = styled.input`
  width: 30rem;
  height: 2.5rem;
  margin: 1rem;
  background: #f9f9f9;
  border: 0.1rem solid #dfdfdf;
`;

export const ContactMessage = styled.textarea`
  width: 30rem;
  height: 5rem;
  margin: 1rem;
  background: #f9f9f9;
  border: 0.1rem solid #dfdfdf;
`;

export const ContactBg = styled.img`
  margin-bottom: -5px;
  width: 100%;
  height: 30vh;
  object-fit: cover;
`;
