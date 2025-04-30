'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle' | 'polygon';
  rotation: number;
  rotationSpeed: number;
  sides?: number; // For polygon
}

export function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 35; // Slightly increased for more visual interest

    // Get computed CSS variables for colors
    const getThemeColors = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      const currentTheme = theme === 'system' ? systemTheme : theme;
      const isDark = currentTheme === 'dark';

      // Create a color palette based on the theme
      return {
        primary: computedStyle.getPropertyValue('--primary').trim(),
        secondary: computedStyle.getPropertyValue('--secondary').trim(),
        accent: computedStyle.getPropertyValue('--accent').trim(),
        muted: computedStyle.getPropertyValue('--muted').trim(),
        background: computedStyle.getPropertyValue('--background').trim(),
        isDark,
      };
    };

    // Generate a color palette based on the theme
    const generateColorPalette = () => {
      const { primary, secondary, accent, muted, isDark } = getThemeColors();

      // Create a palette with theme-appropriate colors
      return [
        `hsla(${primary.split(' ')[0]}, ${primary.split(' ')[1]}, ${primary.split(' ')[2]}, ${isDark ? '60%' : '40%'})`, // Primary color
        `hsla(${accent.split(' ')[0]}, ${accent.split(' ')[1]}, ${accent.split(' ')[2]}, ${isDark ? '50%' : '30%'})`, // Accent color
        `hsla(${secondary.split(' ')[0]}, ${secondary.split(' ')[1]}, ${secondary.split(' ')[2]}, ${isDark ? '40%' : '20%'})`, // Secondary color
        `hsla(${muted.split(' ')[0]}, ${muted.split(' ')[1]}, ${muted.split(' ')[2]}, ${isDark ? '30%' : '15%'})`, // Muted color
        // Add some complementary colors
        `hsla(${Number.parseInt(primary.split(' ')[0]) + 180}, ${primary.split(' ')[1]}, ${primary.split(' ')[2]}, ${isDark ? '50%' : '30%'})`,
        `hsla(${Number.parseInt(primary.split(' ')[0]) + 120}, ${primary.split(' ')[1]}, ${primary.split(' ')[2]}, ${isDark ? '40%' : '25%'})`,
        `hsla(${Number.parseInt(primary.split(' ')[0]) - 120}, ${primary.split(' ')[1]}, ${primary.split(' ')[2]}, ${isDark ? '45%' : '35%'})`,
      ];
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      const colorPalette = generateColorPalette();
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const shape = ['circle', 'square', 'triangle', 'polygon'][
          Math.floor(Math.random() * 4)
        ] as 'circle' | 'square' | 'triangle' | 'polygon';

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 20 + 5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.3 + 0.1,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          shape,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          sides:
            shape === 'polygon' ? Math.floor(Math.random() * 3) + 5 : undefined, // 5-7 sides for polygon
        });
      }
    };

    // Draw a particle
    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.fillStyle = particle.color;

      // Draw different shapes
      switch (particle.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(
            -particle.size / 2,
            -particle.size / 2,
            particle.size,
            particle.size
          );
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -particle.size / 2);
          ctx.lineTo(particle.size / 2, particle.size / 2);
          ctx.lineTo(-particle.size / 2, particle.size / 2);
          ctx.closePath();
          ctx.fill();
          break;
        case 'polygon':
          const sides = particle.sides || 6;
          ctx.beginPath();
          ctx.moveTo(particle.size * Math.cos(0), particle.size * Math.sin(0));
          for (let i = 1; i <= sides; i++) {
            const angle = (i * 2 * Math.PI) / sides;
            ctx.lineTo(
              particle.size * Math.cos(angle),
              particle.size * Math.sin(angle)
            );
          }
          ctx.closePath();
          ctx.fill();
          break;
      }

      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        // Wrap around edges
        if (particle.x < -particle.size)
          particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size)
          particle.x = -particle.size;
        if (particle.y < -particle.size)
          particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size)
          particle.y = -particle.size;

        // Draw the particle
        drawParticle(particle);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Set up canvas and start animation
    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, systemTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
