import React from "react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import type { Engine } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

export const ParticlesBackground = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Get the colors based on theme
  const getColors = () => {
    if (theme === "dark") {
      return {
        primary: "#FFF5E6",
        secondary: "#EBE3D7",
      };
    }
    return {
      primary: "#7C3AED",
      secondary: "#6B7280",
    };
  };

  const { primary, secondary } = getColors();

  if (!init) return null;

  return (
    <div className={cn("fixed inset-0 pointer-events-none", className)}>
      <Particles
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.3,
                  color: secondary,
                },
              },
            },
          },
          particles: {
            color: {
              value: primary,
            },
            links: {
              color: primary,
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              value: 80,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
          background: {
            color: "transparent",
          },
        }}
      />
      <div className="relative z-10 pointer-events-auto">{children}</div>
    </div>
  );
};
