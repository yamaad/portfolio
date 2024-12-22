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
        primary: "#FFF5E6", // Based on your dark mode primary HSL: 40 100% 94%
        secondary: "#EBE3D7", // Based on your dark mode secondary HSL: 40 40% 92%
      };
    }
    return {
      primary: "#7C3AED", // Based on your light mode primary HSL: 248 70% 66%
      secondary: "#6B7280", // Based on your light mode secondary HSL: 240 30% 50%
    };
  };

  const { primary, secondary } = getColors();

  if (!init) return null;

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <Particles
        className="absolute inset-0 z-30 pointer-events-none"
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
      <div className="relative">{children}</div>
    </div>
  );
};
