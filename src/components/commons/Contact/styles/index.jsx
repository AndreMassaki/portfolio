import styled from 'styled-components';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

ContactWrapper.Open = styled.button`
  align-items: center;
  background: white;
  border: 3px solid #e9c46a;
  border-radius: 100%;
  color: black;
  display: flex;
  font-size: 3rem;
  height: 4rem;
  justify-content: center;
  text-decoration: none;
  width: 4rem;
  :hover {
    opacity: .5;
  }
`;

export default ContactWrapper;
