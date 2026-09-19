import { useCallback, useEffect, useState } from "react";

const welcomeMessages = [
  "Hola. Bienvenido a mi portfolio.",
  "Aquí encontrarás proyectos propios, cosas en las que he trabajado e información sobre mí.",
  "Muévete por el escritorio, abre lo que te llame la atención y descubre lo que hay dentro.",
  "Abre algo y mira qué pasa.",
];

function WelcomeGuide({ onClose }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");

  const currentMessage = welcomeMessages[messageIndex];
  const isTyping = visibleText.length < currentMessage.length;
  const isLastMessage =
    messageIndex === welcomeMessages.length - 1;

  useEffect(() => {
    if (!isTyping) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setVisibleText(
        currentMessage.slice(0, visibleText.length + 1)
      );
    }, 28);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [currentMessage, isTyping, visibleText]);

  const advanceDialogue = useCallback(() => {
    if (isTyping) {
      setVisibleText(currentMessage);
      return;
    }

    if (!isLastMessage) {
      setMessageIndex(
        (currentIndex) => currentIndex + 1
      );
      setVisibleText("");
      return;
    }

    onClose();
  }, [
    currentMessage,
    isLastMessage,
    isTyping,
    onClose,
  ]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.repeat) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (
        event.ctrlKey ||
        event.metaKey ||
        event.altKey
      ) {
        return;
      }

      const isAdvanceKey =
        event.key === "Enter" ||
        event.key === " " ||
        event.key.length === 1;

      if (!isAdvanceKey) {
        return;
      }

      event.preventDefault();
      advanceDialogue();
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [advanceDialogue, onClose]);

  return (
    <section
      className="welcome-guide"
      aria-label="Bienvenida al portfolio"
      onPointerDown={(event) =>
        event.stopPropagation()
      }
    >
      <div className="welcome-guide-character">
        <img
          src="/images/anfitrionFrank.png"
          alt="Frank, anfitrión del portfolio"
          draggable="false"
        />
      </div>

      <button
        className="welcome-guide-dialogue"
        type="button"
        onClick={advanceDialogue}
        aria-label={
          isTyping
            ? "Completar texto"
            : isLastMessage
              ? "Cerrar bienvenida"
              : "Continuar diálogo"
        }
      >
        <span
          className="welcome-guide-text"
          aria-live="polite"
        >
          {visibleText}

          {isTyping && (
            <span
              className="welcome-guide-cursor"
              aria-hidden="true"
            >
              ▌
            </span>
          )}
        </span>

        {!isTyping && (
          <span
            className="welcome-guide-indicator"
            aria-hidden="true"
          >
            ▼
          </span>
        )}
      </button>
    </section>
  );
}

export default WelcomeGuide;