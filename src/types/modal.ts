export type IModalContextValue = {
  modalType: string;
  openModal: boolean;
  message: string;
};

export type IModalContextType = {
  modalState: IModalContextValue;
  setModalState: React.Dispatch<React.SetStateAction<IModalContextValue>>;
  handleModalClose: (_type: string) => void;
  handleModalOpen: (_type: string) => void;
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type IModalBoxType = {
  openModalBox: boolean;
  children?: React.ReactNode;
  handleClose?: () => void;
};
