import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const texts = ["Web", "FrontEnd", "React", "Angular", "JavaScript"];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 80;
  const pauseDuration = 2000;

  useEffect(() => {
    const currentFullText = texts[textIndex];

    let timeout;
    if (!isDeleting) {
      // Digita o texto
      timeout = setTimeout(() => {
        setCurrentText(
          currentText + currentFullText.charAt(currentText.length)
        );
      }, typingSpeed);
    } else {
      // Apaga o texto
      timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, deletingSpeed);
    }

    // Quando o texto for digitado por completo
    if (currentText === currentFullText && !isDeleting) {
      setTimeout(() => setIsDeleting(true), pauseDuration); // Pausa antes de apagar
    }

    // Quando o texto for apagado por completo
    if (currentText === "" && isDeleting) {
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Alterna para o próximo texto
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts]);

  return (
    <div className="h-14">
      <h1 className="text-[#4a073c]">{currentText}</h1>
    </div>
  );
};

export default TypingEffect;
