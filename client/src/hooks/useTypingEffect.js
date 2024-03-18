import { useState, useEffect } from "react";

const useTypingEffect = (message, speed = 100, onComplete = () => {}) => {
  const [index, setIndex] = useState(0);
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    if (index < message.length) {
      const timeoutId = setTimeout(() => {
        setTypedMessage((prev) => prev + message[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      onComplete();
    }
  }, [index, message, speed, onComplete]);

  return typedMessage;
};

export default useTypingEffect;
