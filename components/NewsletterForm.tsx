import tw from 'twin.macro';
import { displayErrorMessage, useForm } from './utils';

const StyledForm = tw.form`
  border-2 shadow-md rounded-md p-4 m-4
`;

const StyledH2 = tw.h2`
  text-center
`;

const StyledLabel = tw.label`
  block text-secondary py-2
`;

const StyledDiv = tw.div`
  py-2
`;

const StyledSubmit = tw.button`
  w-1/2 flex items-center justify-center rounded-md bg-secondary text-white p-4
`;

const Row = tw.div`
  flex-auto flex space-x-3 justify-center
`;

const StyledSuccessMessage = tw.span`
  text-tertiary
`;

const initialForm = {
  email: '',
  name: '',
};
const validationConfig = [
  { key: 'email', label: 'Email' },
  { key: 'name', label: 'Name' },
];
const NewsletterForm = () => {
  const {
    handleSubmit,
    handleChangeField,
    success,
    submitted,
    errors,
    meta,
    saveError,
  } = useForm(initialForm, 'newsletter', validationConfig);
  return (
    <StyledForm data-netlify="true" onSubmit={handleSubmit} name="newsletter">
      <StyledH2>
        Want to receive my newsletter?
        <br /> Join here
      </StyledH2>
      <StyledDiv>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <input
          onChange={handleChangeField}
          name="name"
          id="name"
          placeholder="Your Name"
        />
        {displayErrorMessage(errors, 'name', meta, submitted)}
      </StyledDiv>
      <StyledDiv>
        <StyledLabel htmlFor="name">Email</StyledLabel>
        <input
          onChange={handleChangeField}
          name="email"
          id="email"
          placeholder="Your Email"
        />
        {displayErrorMessage(errors, 'email', meta, submitted)}
      </StyledDiv>
      {saveError && (
        <div className="col-sm-12" id="result">
          <h3>Something went wrong</h3>
        </div>
      )}
      {success ? (
        <div>
          <h3>You are in!</h3>
          <StyledSuccessMessage>
            Thank you for your message. We will get back to you as soon as
            possible!
          </StyledSuccessMessage>
        </div>
      ) : (
        <Row>
          <StyledSubmit type="submit">Join the newsletter</StyledSubmit>
        </Row>
      )}
    </StyledForm>
  );
};

export default NewsletterForm;
