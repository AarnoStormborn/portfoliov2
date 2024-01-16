import { useCallback, useState, useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Particle = () => {

  const [particlesKey, setParticlesKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setParticlesKey(prevKey => prevKey + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      key={particlesKey}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#FFFFFF",
          },
        },
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: false,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0,
            },
          },
        },
        particles: {
          color: {
            value: "#198754",
          },
          links: {
            color: "#198754",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 60,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 4, max: 6 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle
