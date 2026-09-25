'use client';

export default function ModalShell({
  active,
  onClose,
  children,
}: {
  active: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`modal-overlay${active ? ' active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <button className="modal-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {children}
      </div>
    </div>
  );
}
