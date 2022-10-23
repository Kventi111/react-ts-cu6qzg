import { useState, useEffect } from 'react';
import WinnerModal from '../components/modals/winnerModal';
import LoseModal from '../components/modals/loseModal';

const modalMap = {
  loseModal: LoseModal,
  winModal: WinnerModal,
};

export default function useShowModal() {
  const [type, setType] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  // let Modal = null;

  const toogleModal = (type) => {
    console.log('openModal', { type });

    setType(type);
    setIsOpen(!isOpen);

    console.log('openModal', { isOpen });
  };

  return { Modal: modalMap[type], toogleModal, isOpen };
}
