import { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, onClose, duration = 2000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed top-4 right-4 z-50 rounded-md bg-gray-800 bg-opacity-90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm">
      {message}
    </div>
  );
}
