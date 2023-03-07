import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
`;

export const Form = styled.form`
  width: 50vw;
  height: 80vh;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
`;

export const ContactTitle = styled.h1`
  color: #febb26;
  margin: 2rem;
`;

export const ContactLabel = styled.label`
  color: #f5f5f5;
  height: 50vh;
  font-weight: 700;
  font-size: clamp(1rem, 4vw, 1.5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContactInput = styled.input`
  width: 30rem;
  height: 2.5rem;
  margin: 1rem;
  background: #f9f9f9;
  border: 0.1rem solid #dfdfdf;
  border-radius: 5px;
`;

export const ContactMessage = styled.textarea`
  width: 30rem;
  height: 10rem;
  margin: 1rem;
  background: #f9f9f9;
  border: 0.1rem solid #dfdfdf;
  border-radius: 5px;
`;

export const ContactBg = styled.img`
  margin-bottom: -5px;
  width: 100vw;
  height: 30vh;
  object-fit: cover;
`;

export const ContactCompanyInfo = styled.div`
  color: white;
  width: 50vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem;
`;

export const BtnContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const ContactDesc = styled.div`
  color: white;
  font-size: clamp(1rem, 4vw, 2rem);
  max-width: 100%;
  margin-right: 2rem;
`;
export const ContactDescSub = styled.h3`
  color: white;
  margin-bottom: 2rem;
`;

export const ContactInfo = styled.div`
  color: white;
  font-size: clamp(1rem, 4vw, 1.8rem);
  margin: 4rem 0;

  .hr {
    margin: 1rem;
  }
`;

export const ContactInfoDetail = styled.span``;
