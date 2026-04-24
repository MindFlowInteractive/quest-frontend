import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../../session/clearSession";

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

  useEffect(() => {
    if (!openModal) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }

      if (e.key === "Escape") {
        setCloseModal(!openModal);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal, setCloseModal]);

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
          className="alert-overlay-modal fixed inset-0 z-50  bg-[#211F1FB2]"
        >
          <div className="px-3 alert-content-modal max-w-146.75 w-full">
            <div className="px-3.5 pt-12.75 pb-9.75 flex justify-center bg-[#01100F] rounded-[20px] p">
              <div className="flex flex-col items-center">
                <h3
                  className={`font-medium text-2xl tracking-widest text-center mb-2 text-[#EE2B22]`}
                >
                  Are you sure you want to delete your account? This action
                  cannot be undone.
                </h3>

                <img
                  src="/images/image-modal.svg"
                  alt="image-modal"
                  width={221}
                  height={191}
                />

                <div className="flex  gap-3 pt-8.25">
                  <button
                    onClick={handleDeleteAccount}
                    className="bg-transparent! cursor-pointer hover:scale-105 transition-all focus:scale-105 focus:outline-none!"
                  >
                    <img
                      src="/images/button-yes.svg"
                      alt="image-modal"
                      width={208}
                      height={68}
                    />
                  </button>
                  <button
                    onClick={() => setCloseModal(!openModal)}
                    className="bg-transparent! cursor-pointer hover:scale-105 transition-all focus:scale-105 focus:outline-none!"
                  >
                    <img
                      src="/images/button-no.svg"
                      alt="image-modal"
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
