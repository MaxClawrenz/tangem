import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import style from "./App.module.css";
import { useEffect, useRef, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const banner = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState<boolean>(false);
  const bannerClosed = localStorage.getItem("bannerClosed");

  useEffect(() => {
    const newsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (banner.current) newsObserver.observe(banner.current);

    return () => {
      if (banner.current) newsObserver.unobserve(banner.current);
    };
  }, [banner.current]);

  function bannerClose() {
    setVisible(false);
    localStorage.setItem("bannerClosed", "true");
  }

  return (
    <>
      <Header />
      <div ref={banner} className={style.bannerBlock}>
        <TransitionGroup component={null}>
          {!bannerClosed && isVisible && (
            <CSSTransition timeout={2000} classNames="card" nodeRef={banner}>
              <Card onClick={() => bannerClose()} />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;
