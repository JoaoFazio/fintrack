import { useTransactions } from "../context/TransactionContext";

function Modal() {
  const { isModalOpen, setIsModalOpen } = useTransactions();
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-surface p-6 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setIsModalOpen(false)}>X</button>
        <p>Modal</p>
      </div>
    </div>
  );
}

export default Modal;
