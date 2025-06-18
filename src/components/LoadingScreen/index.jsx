import { useState, useEffect } from "react";
import "./styles.css";
import LogoBar from "../LogoBar";

export default function LoadingScreen({ isLoading = true }) {
  const [simulatedProgress, setSimulatedProgress] = useState(0);
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setSimulatedProgress((prev) => {
        if (prev < 95 && isLoading) {
          return (
            prev +
            (prev < 80 ? Math.random() * 3 + 1 : Math.random() * 0.5 + 0.1)
          );
        }
        return prev;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && simulatedProgress < 100) {
      setSimulatedProgress(100);
      const timeout = setTimeout(() => {
        setShowComponent(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  const displayProgress = Math.round(simulatedProgress);

  if (!showComponent) {
    return <></>;
  }

  return (
    <div className="loading-container">
      <div className="background-image"></div>
      {simulatedProgress >= 100 ? (
        <LogoBar textSize="xl" iconSize="xl" />
      ) : (
        <>
          <div className="progress-text">{displayProgress}%</div>
          <div className="loading-ring">
            <svg width="300" height="300" viewBox="0 0 300 300">
              <circle
                cx="150"
                cy="150"
                r="140"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="4"
              />
              <circle
                cx="150"
                cy="150"
                r="140"
                fill="none"
                stroke="rgba(255, 255, 255, 0.9)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 140}`}
                strokeDashoffset={`${
                  2 * Math.PI * 140 * (1 - displayProgress / 100)
                }`}
                transform="rotate(-90 150 150)"
                style={{
                  transition: "stroke-dashoffset 0.3s ease-out",
                }}
              />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
