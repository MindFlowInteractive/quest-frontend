import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../../session/clearSession";
import { useDialogFocusTrap } from "../../hooks/useDialogFocusTrap";

const MODAL_BTN_CLASS =
  "bg-transparent! cursor-pointer hover:scale-105 transition-all rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01100F]";

type DeleteAccountModalProps = {
  openModal: boolean;
  setCloseModal: (value: boolean) => void;
};

export function DeleteAccountModal({
  openModal = false,
  setCloseModal,
}: DeleteAccountModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useDialogFocusTrap(modalRef, openModal, () => setCloseModal(false));

  const handleDeleteAccount = () => {
    clearSession();
    setCloseModal(false);
    navigate("/sign-in", { replace: true });
  };

  return (
    <>
      {openModal ? (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-account-dialog-title"
          className="alert-overlay-modal fixed inset-0 z-50  bg-[#211F1FB2]"
        >
          <div className="px-3 alert-content-modal max-w-146.75 w-full">
            <div className="px-3.5 pt-12.75 pb-9.75 flex justify-center bg-[#01100F] rounded-[20px] p">
              <div className="flex flex-col items-center">
                <h3
                  id="delete-account-dialog-title"
                  className={`font-medium text-2xl tracking-widest text-center mb-2 text-[#EE2B22]`}
                >
                  Are you sure you want to delete your account? This action
                  cannot be undone.
                </h3>

                <img
                  src="/images/image-modal.svg"
                  alt=""
                  width={221}
                  height={191}
                />

                <div className="flex  gap-3 pt-8.25">
                  <button
                    type="button"
                    onClick={handleDeleteAccount}
                    className={MODAL_BTN_CLASS}
                  >
                    <img
                      src="/images/button-yes.svg"
                      alt="Yes, delete my account"
                      width={208}
                      height={68}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCloseModal(false)}
                    className={MODAL_BTN_CLASS}
                  >
                    <img
                      src="/images/button-no.svg"
                      alt="No, keep my account"
                      width={208}
                      height={68}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
