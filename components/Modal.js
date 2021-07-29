import Modal from "react-modal";

Modal.setAppElement("body");

// modal styles needed for clean modal
const style = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    border: "none",
    zIndex: 100,
  },
  overlay: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0, 0, 0, 0.50)",
    zIndex: 100,
  },
};

export default function Login({ isOpen, setIsOpen, children }) {
  return (
    <Modal
      isOpen={isOpen}
      style={style}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Project Details"
    >
      {children}
    </Modal>
  );
}
