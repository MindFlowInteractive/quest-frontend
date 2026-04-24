import { ModalIcon } from "../icons";
import { useEffect, useRef, useState } from "react";
import { useDialogFocusTrap } from "../../hooks/useDialogFocusTrap";

const MODAL_BTN_CLASS =
  "bg-transparent! cursor-pointer hover:scale-105 transition-all rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9BC07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01100F]";

type GameplayModalProps = {
  option?: number;
  isExit: boolean;
  openModal: boolean;
  leftValue: number;
  centerValue: number;
  rightValue: number;
  mainValue: number;
  onNext?: () => void;
  onReplay?: () => void;
};

export function GameplayModal({
  option = 1,
  leftValue = 6000,
  centerValue = 5000,
  rightValue = 1700,
  mainValue = 3000,
  openModal = true,
  onNext = () => {},
  onReplay = () => {},
}: GameplayModalProps) {
  const [closeModal, setCloseModal] = useState(!openModal);
  const [isExit, setIsExit] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const isCongratulation = option === 2;
  const dialogOpen = !closeModal;

  useDialogFocusTrap(modalRef, dialogOpen, () => setCloseModal(true));

  const titleId = "gameplay-modal-title";
  const titleText = isExit
    ? "Do you want to quite?"
    : isCongratulation
      ? "Congratulation"
      : "Time out";

  useEffect(() => {
    document.body.style.overflow = closeModal ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [closeModal]);

  return (
    <>
      {dialogOpen ? (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="alert-overlay-modal fixed inset-0 z-50  bg-[#211F1FB2]"
        >
          <div className="px-3 alert-content-modal max-w-146.75 w-full">
            <div className="px-3.5 pt-12.75 pb-9.75 flex justify-center bg-[#01100F] rounded-[20px] p">
              <div className="flex flex-col items-center">
                <h3
                  id={titleId}
                  className={`font-medium text-[34px]/8.5 tracking-[0.2em] text-center mb-2 ${isExit ? "text-white" : isCongratulation ? "text-[#048179]" : "text-[#EE2B22]"}`}
                >
                  {titleText}
                </h3>

                <img
                  src="/images/image-modal.svg"
                  alt=""
                  width={221}
                  height={191}
                />
                <div className="text-modal font-black text-[47px]/18 tracking-[2px]">
                  {mainValue}
                </div>

                <div className="relative">
                  <span aria-hidden="true">
                    <ModalIcon />
                  </span>
                  <span className="absolute  text-center w-10.75 text-[12px] font-medium left-6.25 top-21.75 text-[#01100f]">
                    {leftValue}
                  </span>
                  <span className="absolute  text-center w-10.75 text-[12px] font-medium left-27.75 top-28.25 text-[#01100f]">
                    {centerValue}
                  </span>
                  <span className="absolute  text-center w-10.75 text-[12px] font-medium left-49.5 top-21.75 text-[#01100f]">
                    {rightValue}
                  </span>
                </div>
                {!isExit ? (
                  <p
                    className={`font-normal text-center leading-4 mt-4.25 mb-2.75 ${isCongratulation ? "text-[#CFFDED]" : "text-[#EE2B22]"}`}
                  >
                    {isCongratulation
                      ? "Do you want to continue"
                      : "Your time is up"}
                  </p>
                ) : null}

                {isExit ? (
                  <div className="flex  gap-3 pt-8.25">
                    <button
                      type="button"
                      onClick={() => setCloseModal(true)}
                      className={MODAL_BTN_CLASS}
                      aria-label="Yes, quit"
                    >
                      <img
                        src="/images/button-yes.svg"
                        alt=""
                        width={208}
                        height={68}
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsExit(false)}
                      className={MODAL_BTN_CLASS}
                      aria-label="No, continue playing"
                    >
                      <img
                        src="/images/button-no.svg"
                        alt=""
                        width={208}
                        height={68}
                      />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 ">
                    <button
                      type="button"
                      onClick={onNext}
                      className={MODAL_BTN_CLASS}
                      aria-label="Next"
                    >
                      <img
                        src="/images/next.svg"
                        alt=""
                        width={319}
                        height={53}
                      />
                    </button>
                    <button
                      type="button"
                      onClick={onReplay}
                      className={MODAL_BTN_CLASS}
                      aria-label="Replay"
                    >
                      <img
                        src="/images/replay.svg"
                        alt=""
                        width={319}
                        height={53}
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsExit(true)}
                      className={MODAL_BTN_CLASS}
                      aria-label="Exit game"
                    >
                      <img
                        src="/images/exit.svg"
                        alt=""
                        width={319}
                        height={53}
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
