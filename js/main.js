document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initThreeJS();
});

function initPreloader() {
    const preloader = document.getElementById('preloader');
    const line = document.querySelector('.preloader-line');
    
    if (line) {
        setTimeout(() => {
            line.style.width = '100%';
        }, 50);
    }
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) preloader.classList.add('preloader-hidden');
        }, 1000); 
    });
}

function initThreeJS() {
    const container = document.getElementById('webgl-container');
    if (!container) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);
    scene.fog = new THREE.FogExp2(0x050505, 0.015);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 40;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Crimson highlights mimicking red embers reflection
    const redLight1 = new THREE.PointLight(0x8b0000, 2.5, 120);
    redLight1.position.set(15, 10, 15);
    scene.add(redLight1);

    const redLight2 = new THREE.PointLight(0x8b0000, 1.8, 120);
    redLight2.position.set(-20, -10, -15);
    scene.add(redLight2);
    
    const blueLight = new THREE.PointLight(0x111122, 1.5, 100);
    blueLight.position.set(0, 0, 30);
    scene.add(blueLight);

    // Obsidian Fragments (Octahedrons and Tetrahedrons)
    const fragments = [];
    
    // Dark, slightly reflective crystal material
    const material = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.15,
        metalness: 0.85,
        flatShading: true
    });

    const numFragments = 200;
    for (let i = 0; i < numFragments; i++) {
        const radius = Math.random() * 2 + 0.5;
        const isOctahedron = Math.random() > 0.5;
        const geometry = isOctahedron 
            ? new THREE.OctahedronGeometry(radius) 
            : new THREE.TetrahedronGeometry(radius);
            
        const mesh = new THREE.Mesh(geometry, material);
        
        // Random positioning in a volumetric "tunnel"
        mesh.position.x = (Math.random() - 0.5) * 100;
        mesh.position.y = (Math.random() - 0.5) * 100;
        mesh.position.z = (Math.random() - 0.5) * 80;
        
        // Random rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        mesh.rotation.z = Math.random() * Math.PI;
        
        // Custom properties for subtle animation
        mesh.userData = {
            rotSpeedX: (Math.random() - 0.5) * 0.005,
            rotSpeedY: (Math.random() - 0.5) * 0.005,
            rotSpeedZ: (Math.random() - 0.5) * 0.005,
            floatSpeed: (Math.random() - 0.5) * 0.02
        };

        scene.add(mesh);
        fragments.push(mesh);
    }

    // Crimson Embers (Particle System)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 120; // x
        posArray[i+1] = (Math.random() - 0.5) * 120; // y
        posArray[i+2] = (Math.random() - 0.5) * 100; // z
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create a circular sprite for embers
    const canvasPoint = document.createElement('canvas');
    canvasPoint.width = 16;
    canvasPoint.height = 16;
    const context = canvasPoint.getContext('2d');
    const gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(139, 0, 0, 1)');
    gradient.addColorStop(1, 'rgba(139, 0, 0, 0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 16, 16);
    const particleTexture = new THREE.CanvasTexture(canvasPoint);

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.8,
        color: 0xffffff,
        map: particleTexture,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse Interaction for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();

        // Elegant Parallax effect reacting to mouse
        targetX = mouseX * 0.015;
        targetY = mouseY * 0.015;
        
        // Smooth interpolation for camera
        camera.position.x += (targetX - camera.position.x) * 0.02;
        camera.position.y += (-targetY - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        // Animate Obsidian Fragments
        fragments.forEach((mesh, index) => {
            mesh.rotation.x += mesh.userData.rotSpeedX;
            mesh.rotation.y += mesh.userData.rotSpeedY;
            mesh.rotation.z += mesh.userData.rotSpeedZ;
            
            // Subtle floating oscillation
            mesh.position.y += Math.sin(elapsedTime + index) * mesh.userData.floatSpeed;
        });

        // Animate Embers (floating upwards like ashes)
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 1; i < particlesCount * 3; i += 3) {
            positions[i] += 0.04; // Move up on Y axis
            
            // Subtle horizontal drift and sine wave
            positions[i-1] += Math.sin(elapsedTime * 0.5 + i) * 0.015;

            // Reset position if it goes too high
            if (positions[i] > 60) {
                positions[i] = -60;
                positions[i-1] = (Math.random() - 0.5) * 120;
            }
        }
        particlesGeometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();
}
