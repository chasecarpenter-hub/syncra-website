import * as THREE from 'three';

// --- Hero Animation (Three.js) ---
class HeroAnimation {
    constructor() {
        this.container = document.getElementById('hero-canvas-container');
        if (!this.container) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.camera.position.z = 5;

        // Create Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const count = 2000;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0x00f2ff, // Cyan
            transparent: true,
            opacity: 0.8
        });

        this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);

        // Add some "Grid" lines for workflow theme
        const gridHelper = new THREE.GridHelper(20, 20, 0x00f2ff, 0x111111);
        gridHelper.rotation.x = Math.PI / 2.5;
        gridHelper.position.y = -2;
        this.scene.add(gridHelper);

        window.addEventListener('resize', () => this.onResize());
        this.animate();
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.particles.rotation.y += 0.001;
        this.particles.rotation.x += 0.0005;

        // Subtle mouse interaction
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize Hero
document.addEventListener('DOMContentLoaded', () => {
    new HeroAnimation();
    
    // --- Reveal on Scroll ---
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15
    });

    document.querySelectorAll('.section, .service-card, .glass-card').forEach(el => {
        el.classList.add('reveal-hidden');
        revealObserver.observe(el);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Update active state
            document.querySelectorAll('.navlinks a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.padding = '0.5rem 0';
            nav.style.background = 'hsla(var(--bg-deep) / 0.95)';
        } else {
            nav.style.padding = '0';
            nav.style.background = 'hsla(var(--bg-deep) / 0.8)';
        }
    });
});
