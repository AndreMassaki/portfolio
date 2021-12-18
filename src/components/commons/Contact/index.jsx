import React from 'react';
import ContactWrapper from './styles';
import Text from '../../foundation/Text';
import Modal from '../Modal';
import FormContact from '../../patterns/FormContact';

export default function Contact() {
  const [isModalOpen, setModalState] = React.useState(true);
  return (
    <ContactWrapper>
      <Text
        tag="h2"
        variant="contactTitle"
        margin="1rem 0 1rem 0"
      >
        Entre em contato
      </Text>
      <ContactWrapper.Open
        onClick={() => {
          setModalState(!isModalOpen);
        }}
      >
        +
      </ContactWrapper.Open>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        <FormContact />
      </Modal>
    </ContactWrapper>
  );
}
