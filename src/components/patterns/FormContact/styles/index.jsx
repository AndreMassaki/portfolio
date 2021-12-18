import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const FormWrapper = styled.form``;

FormWrapper.Submit = styled.button`
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

  :disabled {
    cursor: not-allowed;
    opacity: .2;
  }
`;

FormWrapper.Close = styled.button`
  background: white;
  border: 3px solid #e9c46a;
  border-radius: 100%;
  color: black;
  display: flex;
  font-size: 3rem;
  height: 4rem;
  text-decoration: none;
  width: 4rem;

  :hover {
    opacity: .5;
  }

  :disabled {
    cursor: not-allowed;
    opacity: .2;
  }
`;

FormWrapper.Div = styled.div`
  ${propToStyle('width')}
`;

export default FormWrapper;
