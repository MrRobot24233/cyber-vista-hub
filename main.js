
// Security Configuration
const SecurityConfig = {
    maxRequestsPerMinute: 60,
    maxRequestsPerHour: 1000,
    suspiciousKeywords: ['script', 'eval', 'function', 'onload', 'onerror', 'javascript:', 'data:', 'vbscript:'],
    blockedUserAgents: ['bot', 'crawler', 'spider', 'scraper'],
    enableHoneypot: true,
    enableRateLimit: true,
    enableXSSProtection: true,
    enableCSRFProtection: true
};

// Security System
class WebSecurity {
    constructor() {
        this.requestCount = {
            minute: 0,
            hour: 0,
            lastMinute: Date.now(),
            lastHour: Date.now()
        };
        this.sessionToken = this.generateSessionToken();
        this.initSecurity();
    }

    generateSessionToken() {
        return 'SEC_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }

    initSecurity() {
        this.protectAgainstDevTools();
        this.protectAgainstRightClick();
        this.protectAgainstKeyboardShortcuts();
        this.monitorSuspiciousActivity();
        this.enableHoneypotProtection();
        this.enableRateLimiting();
        this.protectAgainstXSS();
        this.enableCSRFProtection();
        this.monitorUserAgent();
        this.enableClickjackingProtection();
    }

    // XSS Protection
    protectAgainstXSS() {
        const originalInnerHTML = Element.prototype.innerHTML;
        Element.prototype.innerHTML = function(value) {
            if (typeof value === 'string') {
                value = this.sanitizeInput(value);
            }
            return originalInnerHTML.call(this, value);
        }.bind(this);
    }

    sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }

    // CSRF Protection
    enableCSRFProtection() {
        // Add CSRF token to forms
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const csrfInput = document.createElement('input');
            csrfInput.type = 'hidden';
            csrfInput.name = 'csrf_token';
            csrfInput.value = this.sessionToken;
            form.appendChild(csrfInput);
        });
    }

    // Rate Limiting
    enableRateLimiting() {
        if (!SecurityConfig.enableRateLimit) return;

        setInterval(() => {
            const now = Date.now();
            
            // Reset minute counter
            if (now - this.requestCount.lastMinute > 60000) {
                this.requestCount.minute = 0;
                this.requestCount.lastMinute = now;
            }
            
            // Reset hour counter
            if (now - this.requestCount.lastHour > 3600000) {
                this.requestCount.hour = 0;
                this.requestCount.lastHour = now;
            }
        }, 1000);
    }

    checkRateLimit() {
        this.requestCount.minute++;
        this.requestCount.hour++;
        
        if (this.requestCount.minute > SecurityConfig.maxRequestsPerMinute) {
            this.showRateLimitWarning();
            return false;
        }
        
        if (this.requestCount.hour > SecurityConfig.maxRequestsPerHour) {
            this.triggerSecurityBlock('Rate limit exceeded');
            return false;
        }
        
        return true;
    }

    showRateLimitWarning() {
        const warning = document.getElementById('rateLimitWarning');
        warning.style.display = 'block';
        setTimeout(() => {
            warning.style.display = 'none';
        }, 3000);
    }

    // Honeypot Protection
    enableHoneypotProtection() {
        if (!SecurityConfig.enableHoneypot) return;

        const honeypotFields = document.querySelectorAll('.honeypot');
        honeypotFields.forEach(field => {
            field.addEventListener('input', () => {
                this.triggerSecurityBlock('Honeypot triggered - Bot detected');
            });
        });
    }

    // Monitor User Agent
    monitorUserAgent() {
        const userAgent = navigator.userAgent.toLowerCase();
        SecurityConfig.blockedUserAgents.forEach(blocked => {
            if (userAgent.includes(blocked)) {
                this.triggerSecurityBlock('Suspicious user agent detected');
            }
        });
    }

    // Clickjacking Protection
    enableClickjackingProtection() {
        if (window.top !== window.self) {
            this.triggerSecurityBlock('Clickjacking attempt detected');
        }
    }

    // Dev Tools Protection
    protectAgainstDevTools() {
        let devtools = {
            open: false,
            orientation: null
        };
        
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > 200 || 
                window.outerWidth - window.innerWidth > 200) {
                if (!devtools.open) {
                    devtools.open = true;
                    this.logSuspiciousActivity('Developer tools opened');
                }
            } else {
                devtools.open = false;
            }
        }, 500);
    }

    // Right Click Protection
    protectAgainstRightClick() {
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.logSuspiciousActivity('Right click attempt');
            return false;
        });
    }

    // Keyboard Shortcuts Protection
    protectAgainstKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
            if (e.keyCode === 123 || 
                (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
                (e.ctrlKey && e.keyCode === 85)) {
                e.preventDefault();
                this.logSuspiciousActivity('Keyboard shortcut blocked: ' + e.keyCode);
                return false;
            }
        });
    }

    // Monitor Suspicious Activity
    monitorSuspiciousActivity() {
        // Monitor for suspicious input
        document.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase();
            SecurityConfig.suspiciousKeywords.forEach(keyword => {
                if (value.includes(keyword)) {
                    this.logSuspiciousActivity('Suspicious input detected: ' + keyword);
                }
            });
        });

        // Monitor for rapid clicks
        let clickCount = 0;
        document.addEventListener('click', () => {
            clickCount++;
            setTimeout(() => clickCount--, 1000);
            
            if (clickCount > 10) {
                this.logSuspiciousActivity('Rapid clicking detected');
            }
        });
    }

    logSuspiciousActivity(activity) {
        console.log(`[SECURITY] ${new Date().toISOString()}: ${activity}`);
        
        // Send to security monitoring (if backend available)
        // this.sendSecurityLog(activity);
    }

    triggerSecurityBlock(reason) {
        console.error(`[SECURITY BLOCK] ${reason}`);
        document.getElementById('securityOverlay').style.display = 'flex';
        
        // Disable all interactions
        document.body.style.pointerEvents = 'none';
        
        // Optional: redirect to security page
        setTimeout(() => {
            // window.location.href = '/security-block.html';
        }, 3000);
    }

    // Clean URLs and prevent XSS through URL
    sanitizeURL() {
        const url = window.location.href;
        SecurityConfig.suspiciousKeywords.forEach(keyword => {
            if (url.toLowerCase().includes(keyword)) {
                this.triggerSecurityBlock('Malicious URL detected');
            }
        });
    }
}

// Initialize Security System
const webSecurity = new WebSecurity();

// Enhanced Link Tracking with Security
function secureNavigate(element) {
    if (!webSecurity.checkRateLimit()) {
        return false;
    }

    const action = element.getAttribute('data-action');
    const section = element.getAttribute('data-section');
    
    webSecurity.logSuspiciousActivity(`Navigation: ${action || section || 'unknown'}`);
    
    return true;
}

// Matrix Background Effect
function createMatrixRain() {
    const matrixBg = document.getElementById('matrixBg');
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+-={}[]|;:,.<>?';
    
    for (let i = 0; i < 50; i++) {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = characters[Math.floor(Math.random() * characters.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDelay = Math.random() * 20 + 's';
        char.style.animationDuration = (Math.random() * 10 + 10) + 's';
        matrixBg.appendChild(char);
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    
    menuToggle.addEventListener('click', (e) => {
        if (!webSecurity.checkRateLimit()) return;
        
        navLinks.classList.toggle('active');
        menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
}

// Smooth Scrolling with Security
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!secureNavigate(link)) {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu if open
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.getElementById('menuToggle');
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });
}

// Scroll to Top Button
function scrollToTopButton() {
    const scrollTop = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    });
    
    scrollTop.addEventListener('click', () => {
        if (!webSecurity.checkRateLimit()) return;
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Navbar Background on Scroll
function navbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });
}

// Animation on Scroll (Simple version)
function animateOnScroll() {
    const cards = document.querySelectorAll('.service-card, .feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    // Sanitize URL on load
    webSecurity.sanitizeURL();
    
    createMatrixRain();
    toggleMobileMenu();
    smoothScroll();
    scrollToTopButton();
    navbarScroll();
    animateOnScroll();
    
    // Security Status Check
    setInterval(() => {
        const status = document.querySelector('.security-status');
        status.style.animation = 'pulse 2s infinite';
    }, 5000);
});

// Add some interactive effects with security
document.addEventListener('mousemove', (e) => {
    const floatingElements = document.querySelectorAll('.floating-element');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        element.style.transform = `translate(${x * 20 * speed}px, ${y * 20 * speed}px)`;
    });
});

// Page Visibility API for security monitoring
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        webSecurity.logSuspiciousActivity('Page hidden - possible tab switching');
    } else {
        webSecurity.logSuspiciousActivity('Page visible - user returned');
    }
});

// Disable printing
window.addEventListener('beforeprint', (e) => {
    e.preventDefault();
    webSecurity.logSuspiciousActivity('Print attempt blocked');
    return false;
});

// Monitor for unauthorized iframe embedding
if (window.top !== window.self) {
    webSecurity.triggerSecurityBlock('Unauthorized iframe embedding detected');
}
