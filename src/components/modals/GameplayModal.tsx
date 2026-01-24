import { ModalIcon } from "../icons";
import { useEffect, useRef, useState } from "react";

type GameplayModalProps = {
  option?: number;
  isExit: boolean;
  openModal: boolean;
  leftValue: number;
  centerValue: number;
  rightValue: number;
  mainValue: number;
};

export function GameplayModal({
  option = 1,
  leftValue = 6000,
  centerValue = 5000,
  rightValue = 1700,
  mainValue = 3000,
  openModal = true,
}: GameplayModalProps) {
  const [closeModal, setCloseModal] = useState(!openModal);
  const [isExit, setIsExit] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const isCongratulation = option === 2;
  useEffect(() => {
    if (closeModal) return;

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
        setCloseModal(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, isExit]);

  useEffect(() => {
    document.body.style.overflow = closeModal ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [closeModal]);

  return (
    <>
      {!closeModal ? (
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
                  className={`font-medium text-[34px]/8.5 tracking-[0.2em] text-center mb-2 ${isExit ? "text-white" : isCongratulation ? "text-[#048179]" : "text-[#EE2B22]"}`}
                >
                  {isExit
                    ? "Do you want to quite?"
                    : isCongratulation
                      ? "Congratulation"
                      : "Time out"}
                </h3>

                <img
                  src="/public/images/image-modal.svg"
                  alt="image-modal"
                  width={221}
                  height={191}
                />
                <div className="text-modal font-black text-[47px]/18 tracking-[2px]">
                  {mainValue}
                </div>

                <div className="relative">
                  <ModalIcon />
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
                      onClick={() => setCloseModal(true)}
                      className="bg-transparent! cursor-pointer hover:scale-105 transition-all focus:scale-105 focus:outline-none!"
                    >
                      <img
                        src="/public/images/button-yes.svg"
                        alt="image-modal"
                        width={208}
                        height={68}
                      />
                    </button>
                    <button
                      onClick={() => setIsExit(false)}
                      className="bg-transparent! cursor-pointer hover:scale-105 transition-all focus:scale-105 focus:outline-none!"
                    >
                      <img
                        src="/public/images/button-no.svg"
                        alt="image-modal"
                        width={208}
                        height={68}
                      />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 ">
                    <button className="bg-transparent! cursor-pointer hover:scale-105 transition-all focus:scale-105 focus:outline-none!">
                      <img
                        src="/public/images/next.svg"
                        alt="image-modal"
                        width={319}
                        height={53}
                      />
                    </button>
                    <button className="bg-transparent! cursor-pointer hover:scale-105 transition-all focus:scale-105 focus:outline-none!">
                      <img
                        src="/public/images/replay.svg"
                        alt="image-modal"
                        width={319}
                        height={53}
                      />
                    </button>
                    <button
                      onClick={() => setIsExit(true)}
                      className="bg-transparent! cursor-pointer hover:scale-105 transition-all focus:scale-105 focus:outline-none!"
                    >
                      <img
                        src="/public/images/exit.svg"
                        alt="image-modal"
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
