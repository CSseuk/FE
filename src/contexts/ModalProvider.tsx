import { createContext, useContext, useState } from "react";

type ModalContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  modalContent: React.ReactNode | null;
  setModalContent: (content: React.ReactNode | null) => void;
};

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
  modalContent: null,
  setModalContent: () => {},
});

export const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen, modalContent, setModalContent }}
    >
      {children}
      {isOpen && modalContent}
    </ModalContext.Provider>
  );
};
