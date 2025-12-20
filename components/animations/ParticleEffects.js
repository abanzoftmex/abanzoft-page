import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function ParticleBackground({ density = 30, color = 'rgba(59, 130, 246, 0.4)' }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 2; // Increased from 2+1 to 3+2 (2-5px)
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.4 + 0.4; // Increased from 0.5+0.2 to 0.4+0.4 (0.4-0.8)
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around edges
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                // Extract base color and replace opacity
                const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
                if (rgbaMatch) {
                    ctx.fillStyle = `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, ${this.opacity})`;
                } else {
                    ctx.fillStyle = color;
                }

                // Add a subtle glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = ctx.fillStyle;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Reset shadow
                ctx.shadowBlur = 0;
            }
        }

        // Initialize particles
        for (let i = 0; i < density; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((particleA, indexA) => {
                particles.slice(indexA + 1).forEach(particleB => {
                    const dx = particleA.x - particleB.x;
                    const dy = particleA.y - particleB.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        const lineOpacity = 0.3 * (1 - distance / 120); // Increased from 0.1
                        const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
                        if (rgbaMatch) {
                            ctx.strokeStyle = `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, ${lineOpacity})`;
                        } else {
                            ctx.strokeStyle = color;
                        }
                        ctx.lineWidth = 1; // Increased from 0.5
                        ctx.beginPath();
                        ctx.moveTo(particleA.x, particleA.y);
                        ctx.lineTo(particleB.x, particleB.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [density, color]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ opacity: 0.6, zIndex: 0 }}
        />
    );
}

export function FloatingElement({ children, delay = 0, duration = 3 }) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
}

export function GlowEffect({ children, intensity = 'medium' }) {
    const glowIntensity = {
        low: '0 0 10px rgba(0, 0, 0, 0.1)',
        medium: '0 0 20px rgba(0, 0, 0, 0.15)',
        high: '0 0 30px rgba(0, 0, 0, 0.2)'
    };

    return (
        <motion.div
            whileHover={{
                boxShadow: glowIntensity[intensity],
                scale: 1.02
            }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

export function ScrollReveal({ children, threshold = 0.1 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: threshold }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

export function MagneticButton({ children, strength = 0.3 }) {
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        buttonRef.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
        if (!buttonRef.current) return;
        buttonRef.current.style.transform = 'translate(0px, 0px)';
    };

    return (
        <div
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.3s ease-out' }}
        >
            {children}
        </div>
    );
}

export function NumberCounter({ end, duration = 2, suffix = '', prefix = '' }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const startTime = Date.now();
                    const endTime = startTime + duration * 1000;

                    const updateCount = () => {
                        const now = Date.now();
                        const progress = Math.min((now - startTime) / (endTime - startTime), 1);
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                        setCount(Math.floor(easeOutQuart * end));

                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        }
                    };

                    updateCount();
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return (
        <span ref={elementRef}>
            {prefix}{count}{suffix}
        </span>
    );
}

// Money-themed particles for financial pages
export function MoneyParticles({ density = 25 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const symbols = ['$', '%', '€', '¥', '₿'];

        class MoneyParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
                this.size = Math.random() * 20 + 15;
                this.speedX = Math.random() * 0.3 - 0.15;
                this.speedY = Math.random() * 0.5 + 0.2;
                this.opacity = Math.random() * 0.3 + 0.2;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;

                if (this.y > canvas.height) {
                    this.y = -20;
                    this.x = Math.random() * canvas.width;
                }
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.fillStyle = `rgba(34, 197, 94, ${this.opacity})`;
                ctx.font = `${this.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.symbol, 0, 0);
                ctx.restore();
            }
        }

        for (let i = 0; i < density; i++) {
            particles.push(new MoneyParticle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [density]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ opacity: 0.7, zIndex: 0 }}
        />
    );
}

// Code-themed particles for tech/solutions pages
export function CodeParticles({ density = 30 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const symbols = ['<', '>', '/', '{', '}', '[', ']', '( )', '< />'];

        class CodeParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
                this.size = Math.random() * 16 + 12;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
                this.opacity = Math.random() * 0.4 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
                ctx.font = `${this.size}px monospace`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.symbol, this.x, this.y);
            }
        }

        for (let i = 0; i < density; i++) {
            particles.push(new CodeParticle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [density]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ opacity: 0.6, zIndex: 0 }}
        />
    );
}

// Timeline-themed particles for history pages
export function TimelineParticles({ density = 20 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class TimelineParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 4 + 2;
                this.speedX = Math.random() * 0.3 - 0.15;
                this.speedY = Math.random() * 0.3 - 0.15;
                this.opacity = Math.random() * 0.5 + 0.3;
                this.pulseSpeed = Math.random() * 0.02 + 0.01;
                this.pulsePhase = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.pulsePhase += this.pulseSpeed;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
                const currentSize = this.size * pulse;

                ctx.fillStyle = `rgba(107, 114, 128, ${this.opacity * pulse})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
                ctx.fill();

                // Draw connecting line to create timeline effect
                ctx.strokeStyle = `rgba(107, 114, 128, ${this.opacity * 0.3})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.x - 20, this.y);
                ctx.lineTo(this.x + 20, this.y);
                ctx.stroke();
            }
        }

        for (let i = 0; i < density; i++) {
            particles.push(new TimelineParticle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [density]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ opacity: 0.5, zIndex: 0 }}
        />
    );
}

// Mouse-following particles for interactive pages
export function MouseFollowParticles({ density = 15 }) {
    const canvasRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        class FollowParticle {
            constructor(index) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 4 + 3;
                this.delay = index * 0.05;
                this.opacity = Math.random() * 0.5 + 0.3;
                this.hue = Math.random() * 60 + 200; // Blue to purple range
            }

            update() {
                const dx = mousePos.current.x - this.x;
                const dy = mousePos.current.y - this.y;

                // Smooth following with easing
                this.x += dx * (0.05 - this.delay * 0.01);
                this.y += dy * (0.05 - this.delay * 0.01);
            }

            draw() {
                ctx.shadowBlur = 15;
                ctx.shadowColor = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
                ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        for (let i = 0; i < density; i++) {
            particles.push(new FollowParticle(i));
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [density]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ opacity: 0.8, zIndex: 0 }}
        />
    );
}
