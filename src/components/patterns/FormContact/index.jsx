import React from 'react';
import FormWrapper from './styles';
import Text from '../../foundation/Text';

export default function FormContact({ onClose }) {
  const [userInfo, setUserInfo] = React.useState({
    name: 'André Massaki',
    email: 'andremassaki@email.com',
    message: 'Mensagem',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.name.legth === 0
  || userInfo.email.legth === 0
  || userInfo.message.length === 0;

  return (
    <FormWrapper
      onSubmit={(event) => {
        event.preventDefault();
      }}
      style={{
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <FormWrapper.Close
        onClick={onClose}
        style={{
          alignSelf: 'flex-end',
          display: 'flex',
          margin: '1rem 1rem 0 0',
          justifyContent: 'center',
          transform: 'rotate(45deg)',
        }}
      >
        +
      </FormWrapper.Close>
      <FormWrapper.Div
        data-modal-safe-area="true"
        style={{
          width: 'calc(75vw + 4rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Text
          tag="h2"
          variant="formTitle"
          margin="1rem 0 0 0"
        >
          Envie sua mensagem
        </Text>
        <FormWrapper.Div
          width="80%"
        >
          <Text
            tag="p"
            variant="formText"
            margin=".7rem 0 .3rem"
          >
            Seu nome
          </Text>
          <Text
            tag="input"
            placeholder="Nome"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            style={{
              width: '100%',
              border: '3px solid #e9c46a',
              padding: '.5rem',
            }}
          />
        </FormWrapper.Div>
        <FormWrapper.Div
          width="80%"
        >
          <Text
            tag="p"
            variant="formText"
            margin=".7rem 0 .3rem"
          >
            Seu email
          </Text>
          <Text
            tag="input"
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            style={{
              width: '100%',
              border: '3px solid #e9c46a',
              padding: '.5rem',
            }}
          />
        </FormWrapper.Div>
        <FormWrapper.Div
          width="80%"
        >
          <Text
            tag="p"
            variant="formText"
            margin=".7rem 0 .3rem"
          >
            Sua mensagem
          </Text>
          <Text
            tag="textarea"
            placeholder="Mensagem"
            name="message"
            value={userInfo.message}
            onChange={handleChange}
            rows="5"
            style={{
              width: '100%',
              border: '3px solid #e9c46a',
              padding: '.5rem',
              minHeight: '5rem',
              maxHeight: '15rem',
              resize: 'vertical',
            }}
          />
        </FormWrapper.Div>
      </FormWrapper.Div>

      <FormWrapper.Div
        data-modal-safe-area="true"
        style={{
          alignItems: 'center',
          display: 'flex',
          margin: '1rem 0 .5rem 0',
          justifyContent: 'center',
        }}
      >
        <Text
          tag="h2"
          variant="formSubmit"
          margin="0 1rem 0 0"
        >
          Enviar
        </Text>
        <FormWrapper.Submit
          type="submit"
          disabled={isFormInvalid}
        >
          {'>'}
        </FormWrapper.Submit>
      </FormWrapper.Div>
    </FormWrapper>
  );
}
