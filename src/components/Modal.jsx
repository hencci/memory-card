import React from "react";

export default function Modal({ show, onclose, children }) {
  if (!show) return null;
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        {children}
        <div className="actions">
          <button className="btn" onClick={onclose}>
            continue
          </button>
        </div>
      </div>
    </div>
  );
}
