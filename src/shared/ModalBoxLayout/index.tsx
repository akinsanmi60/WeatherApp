import { IModalBoxType } from 'types/modal';

const ModalBoxLayout = ({ openModalBox, children }: IModalBoxType) => {
  return (
    openModalBox && (
      <div className="relative">
        <div className="fixed inset-0 z-[99999] transition-opacity bg-opacity-75 overflow-auto">
          <div className="fixed inset-y-0 right-0 z-[99999] pl-10 max-w-full flex">
            <div className="w-screen max-w-[550px]">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                {children}
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
    )
  );
};

export default ModalBoxLayout;
