import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface ModalContextType {
  open: boolean;
  closeModal: (status: boolean) => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextType);

export function ModalProvider({ children }: ModalProviderProps) {
  const [open, setOpen] = useState(false);

  function closeModal(status: boolean) {
    setOpen(status);
  }

  return (
    <ModalContext.Provider
      value={{
        open,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
