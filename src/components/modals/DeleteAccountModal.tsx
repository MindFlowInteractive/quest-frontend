import { useEffect, useRef } from 'react';

interface DeleteAccountModalProps {
    isOpen: boolean;
    isDeleting: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export function DeleteAccountModal({
    isOpen,
    isDeleting,
    onConfirm,
    onCancel,
}: DeleteAccountModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const cancelButtonRef = useRef<HTMLButtonElement | null>(null);

    // Focus trap + Escape key handling
    useEffect(() => {
        if (!isOpen) return;

        const modal = modalRef.current;
        if (!modal) return;

        // Focus the cancel button on open (safer default)
        cancelButtonRef.current?.focus();

        const focusableElements = modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCancel();
                return;
            }
            if (e.key === 'Tab') {
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
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onCancel]);

    // Prevent background scroll while modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#211F1FB2]"
            aria-modal="true"
            role="dialog"
            aria-labelledby="delete-modal-title"
            aria-describedby="delete-modal-desc"
            onClick={(e) => {
                // Close when clicking the backdrop
                if (e.target === e.currentTarget) onCancel();
            }}
        >
            <div
                ref={modalRef}
                className="bg-[#1A1B1C] border border-[#353536] rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl"
            >
                {/* Warning icon */}
                <div className="flex justify-center mb-5">
                    <div className="w-14 h-14 rounded-full bg-[#E94B25]/15 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 text-[#E94B25]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h2
                    id="delete-modal-title"
                    className="text-xl font-semibold text-white text-center mb-3"
                >
                    Delete Account
                </h2>

                {/* Body */}
                <p
                    id="delete-modal-desc"
                    className="text-[#9CA3AF] text-sm text-center leading-relaxed mb-2"
                >
                    Are you sure you want to delete your account?
                </p>
                <p className="text-[#9CA3AF] text-sm text-center leading-relaxed mb-8">
                    This action is{' '}
                    <span className="text-[#E94B25] font-medium">permanent</span> and
                    cannot be undone. All your progress, scores, and data will be
                    removed forever.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        ref={cancelButtonRef}
                        onClick={onCancel}
                        disabled={isDeleting}
                        className="flex-1 py-3 px-6 rounded-md border border-[#353536] text-[#9CA3AF] font-semibold hover:border-[#F9BC07] hover:text-[#F9BC07] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9BC07] focus:ring-offset-2 focus:ring-offset-[#1A1B1C] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isDeleting}
                        className="flex-1 py-3 px-6 rounded-md bg-[#E94B25] hover:bg-[#D43A15] text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#E94B25] focus:ring-offset-2 focus:ring-offset-[#1A1B1C] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isDeleting ? (
                            <>
                                <svg
                                    className="animate-spin w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    />
                                </svg>
                                Deleting…
                            </>
                        ) : (
                            'Delete Account'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
