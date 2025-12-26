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

// Hover-activated card particles - only visible on hover
export function CardCodeParticles({ isHovered }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isHovered) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        const symbols = ['0', '1', '01', '10', '{}', '[]'];

        class BinaryParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = -10;
                this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
                this.size = Math.random() * 12 + 10;
                this.speedY = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.y += this.speedY;
                this.opacity -= 0.005;
            }

            draw() {
                ctx.fillStyle = `rgba(239, 68, 68, ${this.opacity})`;
                ctx.font = `${this.size}px monospace`;
                ctx.textAlign = 'center';
                ctx.fillText(this.symbol, this.x, this.y);
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.3) {
                particles.push(new BinaryParticle());
            }

            particles = particles.filter(p => p.opacity > 0 && p.y < canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export function CardDesignParticles({ isHovered }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isHovered) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        const colors = ['#ef4444', '#f97316', '#ec4899', '#a855f7', '#3b82f6'];

        class ColorParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 6 + 3;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
                this.opacity = 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.opacity -= 0.01;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.2) {
                particles.push(new ColorParticle());
            }

            particles = particles.filter(p => p.opacity > 0);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export function CardWebParticles({ isHovered }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isHovered) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        class WebParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 4 + 2;
                this.speedX = (Math.random() - 0.5) * 1.5;
                this.speedY = (Math.random() - 0.5) * 1.5;
                this.opacity = Math.random() * 0.6 + 0.4;
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
                ctx.fillStyle = `rgba(239, 68, 68, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 15; i++) {
            particles.push(new WebParticle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 80) {
                        ctx.strokeStyle = `rgba(239, 68, 68, ${0.3 * (1 - dist / 80)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export function CardShoppingParticles({ isHovered }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isHovered) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        const symbols = ['$', '€', '¥', '💳'];

        class ShoppingParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 10;
                this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
                this.size = Math.random() * 14 + 12;
                this.speedY = -(Math.random() * 2 + 1);
                this.speedX = (Math.random() - 0.5) * 1;
                this.opacity = 1;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                this.opacity -= 0.008;
            }

            draw() {
                ctx.fillStyle = `rgba(239, 68, 68, ${this.opacity})`;
                ctx.font = `${this.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.fillText(this.symbol, this.x, this.y);
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.15) {
                particles.push(new ShoppingParticle());
            }

            particles = particles.filter(p => p.opacity > 0 && p.y > -20);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export function CardMapParticles({ isHovered }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isHovered) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        class MapPinParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 8 + 6;
                this.opacity = 1;
                this.pulsePhase = Math.random() * Math.PI * 2;
            }

            update() {
                this.pulsePhase += 0.05;
                this.opacity -= 0.005;
            }

            draw() {
                const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
                ctx.fillStyle = `rgba(239, 68, 68, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2);
                ctx.fill();

                // Draw pin point
                ctx.fillStyle = `rgba(239, 68, 68, ${this.opacity * 0.8})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.1 && particles.length < 8) {
                particles.push(new MapPinParticle());
            }

            particles = particles.filter(p => p.opacity > 0);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export function CardMobileParticles({ isHovered }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isHovered) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        class NotificationParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 6 + 4;
                this.opacity = 1;
                this.scale = 0;
                this.maxScale = 1;
            }

            update() {
                if (this.scale < this.maxScale) {
                    this.scale += 0.05;
                } else {
                    this.opacity -= 0.02;
                }
            }

            draw() {
                ctx.fillStyle = `rgba(239, 68, 68, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * this.scale, 0, Math.PI * 2);
                ctx.fill();

                // Outer ring
                ctx.strokeStyle = `rgba(239, 68, 68, ${this.opacity * 0.5})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, (this.size + 4) * this.scale, 0, Math.PI * 2);
                ctx.stroke();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.08 && particles.length < 6) {
                particles.push(new NotificationParticle());
            }

            particles = particles.filter(p => p.opacity > 0);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export function CardSocialParticles({ isHovered }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isHovered) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        const symbols = ['♥', '👍', '⭐', '💬', '📱'];

        class SocialParticle {
            constructor() {
                this.x = canvas.width / 2;
                this.y = canvas.height / 2;
                this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
                this.size = Math.random() * 14 + 12;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 2 + 1;
                this.speedX = Math.cos(angle) * speed;
                this.speedY = Math.sin(angle) * speed;
                this.opacity = 1;
                this.rotation = 0;
                this.rotationSpeed = (Math.random() - 0.5) * 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;
                this.opacity -= 0.01;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.fillStyle = `rgba(239, 68, 68, ${this.opacity})`;
                ctx.font = `${this.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.symbol, 0, 0);
                ctx.restore();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.15) {
                particles.push(new SocialParticle());
            }

            particles = particles.filter(p => p.opacity > 0);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export function CardAIParticles({ isHovered }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isHovered) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        class SparkleParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 2;
                this.opacity = 1;
                this.hue = Math.random() * 60 + 270; // Purple to pink
                this.twinklePhase = Math.random() * Math.PI * 2;
            }

            update() {
                this.twinklePhase += 0.1;
                this.opacity -= 0.015;
            }

            draw() {
                const twinkle = Math.sin(this.twinklePhase) * 0.5 + 0.5;

                // Draw star shape
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity * twinkle})`;

                // Glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = `hsla(${this.hue}, 80%, 70%, ${this.opacity})`;

                // Draw sparkle
                ctx.beginPath();
                for (let i = 0; i < 4; i++) {
                    const angle = (i * Math.PI) / 2;
                    const x = Math.cos(angle) * this.size;
                    const y = Math.sin(angle) * this.size;
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.fill();

                ctx.restore();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.2) {
                particles.push(new SparkleParticle());
            }

            particles = particles.filter(p => p.opacity > 0);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden" />;
}
