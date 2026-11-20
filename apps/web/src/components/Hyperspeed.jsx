
import React, { useEffect, useRef } from 'react';

const Hyperspeed = ({ effectOptions = {} }) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let animationTime = 0;

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const speed = effectOptions?.speedUp || 2;
    const maxDepth = 2200;

    const leftColors =
      effectOptions?.colors?.leftCars || [
        0x7C3AED,
        0xA78BFA,
        0x4C1D95,
      ];

    const rightColors =
      effectOptions?.colors?.rightCars || [
        0x06B6D4,
        0x3B82F6,
        0x1E3A8A,
      ];

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      centerX = width / 2;
      centerY = height / 2;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    const particleCount = isMobile ? 180 : 550;

    const stars = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: Math.random() * maxDepth,
      previousZ: 0,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.5,
      color: null,
    }));

    stars.forEach((star) => {
      const palette = star.x > 0 ? rightColors : leftColors;
      const color = palette[
        Math.floor(Math.random() * palette.length)
      ];

      star.color = `#${color.toString(16).padStart(6, '0')}`;
    });

    const animate = () => {
      animationTime += 0.016;

      // Smooth background trails
      ctx.fillStyle = 'rgba(3, 7, 18, 0.22)';
      ctx.fillRect(0, 0, width, height);

      // Subtle central ambient glow
      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.max(width, height) * 0.65
      );

      glow.addColorStop(0, 'rgba(30, 64, 175, 0.10)');
      glow.addColorStop(0.45, 'rgba(30, 58, 138, 0.035)');
      glow.addColorStop(1, 'rgba(3, 7, 18, 0)');

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.previousZ = star.z;

        // Natural speed variation
        const acceleration = 1 + Math.sin(animationTime * 0.15) * 0.025;
        star.z -= speed * 2 * acceleration;

        if (star.z < 1) {
          star.x = (Math.random() - 0.5) * 2;
          star.y = (Math.random() - 0.5) * 2;
          star.z = maxDepth;
          star.previousZ = maxDepth;
        }

        // Perspective projection
        const perspective = 550;

        const scale = perspective / star.z;
        const previousScale = perspective / Math.max(star.previousZ, 1);

        const x = centerX + star.x * scale * width * 0.75;
        const y = centerY + star.y * scale * height * 0.75;

        const previousX =
          centerX + star.x * previousScale * width * 0.75;

        const previousY =
          centerY + star.y * previousScale * height * 0.75;

        const depth = 1 - star.z / maxDepth;
const fadeIn = Math.min(1, depth * 1.2);
const opacity = fadeIn * star.alpha * 0.45;
        const lineWidth = Math.max(0.4, depth * star.size * 2.5);

        // Ignore particles outside the screen
        if (
          x < -100 ||
          x > width + 100 ||
          y < -100 ||
          y > height + 100
        ) {
          return;
        }

        // Neon glow
        ctx.save();

        ctx.globalAlpha = opacity;
        ctx.strokeStyle = star.color;
        ctx.lineWidth = lineWidth;

        ctx.shadowBlur = isMobile ? 5 : 12;
        ctx.shadowColor = star.color;

        ctx.lineCap = 'round';
        ctx.beginPath();

        ctx.moveTo(previousX, previousY);
        ctx.lineTo(x, y);

        ctx.stroke();

        // Bright particle core
        if (depth > 0.65) {
          ctx.shadowBlur = 8;
          ctx.fillStyle = '#ffffff';

          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.5, depth * 1.1), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    // Start with a clean background
    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, width, height);

    if (!prefersReducedMotion) {
      animate();
    }

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [effectOptions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default Hyperspeed;
