// ==================== 配置数据区域 ====================
// ✏️ 在这里修改你的个人信息

const personalData = {
    // 基本信息
    name: "你的名字",
    title: "你的职业/身份",
    bio: "这里是你的个人简介，可以写一些关于你自己的介绍...",
    aboutText: "这里可以写更详细的个人介绍，包括你的背景、经历、兴趣爱好等...",
    
    // 联系信息
    email: "your.email@example.com",
    location: "你的所在地",
    
    // 社交媒体链接
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        email: "mailto:your.email@example.com"
    },
    
    // 技能列表 (图标可以使用 emoji 或者后续替换为图标库)
    skills: [
        { name: "前端开发", icon: "💻", level: 90 },
        { name: "UI/UX设计", icon: "🎨", level: 85 },
        { name: "后端开发", icon: "⚙️", level: 75 },
        { name: "移动开发", icon: "📱", level: 70 },
        { name: "数据分析", icon: "📊", level: 80 },
        { name: "项目管理", icon: "📋", level: 85 }
    ],
    
    // 项目列表
    projects: [
        {
            name: "项目名称 1",
            description: "这是项目的简短描述，介绍项目的主要功能和特点...",
            image: "images/projects/project1.jpg",
            link: "#",
            tags: ["HTML", "CSS", "JavaScript"]
        },
        {
            name: "项目名称 2",
            description: "这是项目的简短描述，介绍项目的主要功能和特点...",
            image: "images/projects/project2.jpg",
            link: "#",
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            name: "项目名称 3",
            description: "这是项目的简短描述，介绍项目的主要功能和特点...",
            image: "images/projects/project3.jpg",
            link: "#",
            tags: ["Vue", "Firebase", "TailwindCSS"]
        }
    ]
};

// ==================== 主题切换功能 ====================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// 从本地存储加载主题
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// 主题切换事件
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // 添加切换动画
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// ==================== 导航栏功能 ====================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// 移动端菜单切换
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// 点击导航链接后关闭菜单
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// 滚动时导航栏样式变化
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px var(--shadow)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==================== 数据填充功能 ====================
function populateData() {
    // 填充基本信息
    document.getElementById('userName').textContent = personalData.name;
    document.getElementById('userTitle').textContent = personalData.title;
    document.getElementById('userBio').textContent = personalData.bio;
    document.getElementById('aboutText').textContent = personalData.aboutText;
    document.getElementById('footerName').textContent = personalData.name;
    
    // 填充联系信息
    document.getElementById('contactEmail').textContent = personalData.email;
    document.getElementById('contactLocation').textContent = personalData.location;
    
    // 填充社交链接
    document.getElementById('githubLink').href = personalData.social.github;
    document.getElementById('linkedinLink').href = personalData.social.linkedin;
    document.getElementById('emailLink').href = personalData.social.email;
    
    // 填充当前年份
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // 填充技能
    populateSkills();
    
    // 填充项目
    populateProjects();
}

// 填充技能卡片
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = ''; // 清空示例内容
    
    personalData.skills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card glass-card';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" data-progress="${skill.level}"></div>
            </div>
            <span class="skill-percent">${skill.level}%</span>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
    
    // 技能条动画
    observeSkills();
}

// 填充项目卡片
function populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = ''; // 清空示例内容
    
    personalData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card glass-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23667eea%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2224%22 fill=%22white%22%3E项目图片%3C/text%3E%3C/svg%3E'">
                <div class="project-overlay">
                    <a href="${project.link}" class="project-link">查看详情</a>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// ==================== 头像加载处理 ====================
const avatarImg = document.getElementById('avatarImg');
const avatarPlaceholder = document.getElementById('avatarPlaceholder');

avatarImg.addEventListener('load', function() {
    this.classList.add('loaded');
});

avatarImg.addEventListener('error', function() {
    // 如果图片加载失败，保持显示占位符
    this.style.display = 'none';
});

// ==================== 滚动动画观察器 ====================
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // 观察所有卡片元素
    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
};

// 技能条进度动画
const observeSkills = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const progress = progressBar.getAttribute('data-progress');
                setTimeout(() => {
                    progressBar.style.width = `${progress}%`;
                }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
};

// ==================== 平滑滚动增强 ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // 导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== 鼠标跟随效果（可选） ====================
let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;
let speed = 0.1;

function createCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--accent-gradient);
        pointer-events: none;
        z-index: 9999;
        opacity: 0.3;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    // 仅在桌面端显示
    if (window.innerWidth > 768) {
        cursor.style.display = 'block';
    }
    
    return cursor;
}

const cursor = createCursor();

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    ballX += (mouseX - ballX) * speed;
    ballY += (mouseY - ballY) * speed;
    
    cursor.style.left = ballX + 'px';
    cursor.style.top = ballY + 'px';
    
    requestAnimationFrame(animate);
}

if (window.innerWidth > 768) {
    animate();
}

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    populateData();
    observeElements();
    
    // 添加加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== 响应式处理 ====================
window.addEventListener('resize', () => {
    // 窗口大小改变时的处理
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        cursor.style.display = 'block';
    } else {
        cursor.style.display = 'none';
    }
});

// ==================== 性能优化：防抖函数 ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动事件
window.addEventListener('scroll', debounce(() => {
    // 滚动相关的优化处理
}, 100));
