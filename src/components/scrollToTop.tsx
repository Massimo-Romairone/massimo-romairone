import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, type FC } from 'react';

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Volver arriba"
          title="Volver Arriba"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;