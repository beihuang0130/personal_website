// ==================== 配置数据区域 ====================
// ✏️ 在这里修改你的个人信息

const personalData = {
    // 基本信息
    name: "黄琲",
    title: "AI产品经理",
    bio: "专注于 AI 赋能业务流优化、人机协同 AIBD 以及提效工具开发。曾在美团实习，负责多项 AI 落地项目，致力于将生成式 AI 技术转化为实际生产力。",
    aboutText: "你好！我是黄琲。...", // 这部分已在HTML中硬编码，JS仅作备用

    // 联系信息
    email: "huangbei937@gmail.com",
    qqEmail: "2504158363@qq.com",
    phone: "17714449327（微信同号）",
    location: "上海|苏州",

    // 社交媒体链接 (已移除多余链接)
    social: {
        email: "mailto:huangbei937@gmail.com"
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

    // 工作经历项目
    internshipProjects: [
        {
            name: "销售工具：代报名助手",
            tags: ["ai-workflow"],
            tagNames: ["AI 赋能业务流优化", "模型策略应用"],
            description: "针对销售过程中人工判断意向低效的问题，构建了一套基于 NLP 的人机协同代报名工作流。通过分析真人销售与用户的 200 条全场景混合对话数据，定义并训练意图识别模型，实现从\"意向输出\"到\"方案匹配\"再到\"自动报名\"的全链路自动化。该模型在人工测评中表现优异，准确率达 95.4%，精确度 95.3%，召回率 93.2%，有效支撑了后续人机协同工作的规模化落地。",
            materials: [
                { type: "image", path: "文件夹相关内容/代报名助手-工作流.png", name: "工作流" },
                { type: "image", path: "文件夹相关内容/代报名助手-流程图.png", name: "流程图" }
            ]
        },
        {
            name: "美团会员权益招商 AIBD 试点",
            tags: ["ai-bd"],
            tagNames: ["人机协同与 AIBD", "商业化落地"],
            description: "为支撑美团会员长期权益在中小城市的下沉策略（覆盖 KTV/丽人等高价值 L4-L6 用户），负责智能外呼机器人（Mbot v0.1）的落地与业务侧对齐。针对复杂的招商话术场景，完成了 Bot 的语义调优与评测优化，确保业务侧人评无异议。虽受限于系统排期，但成功验证了 AI 在复杂权益招商场景下的可行性，为后续自动化招商奠定了产品基石。",
            materials: [
                { type: "video", path: "文件夹相关内容/美团会员招商.mp4", name: "演示视频" }
            ]
        },
        {
            name: "数据分析助手（销售行为分析）",
            tags: ["data-insight"],
            tagNames: ["数据洞察与决策", "个性化推荐"],
            description: "为解决销售团队缺乏精细化复盘工具的痛点，开发了一套支持\"千人千面\"行为分析的数据助手工作流。该系统通过清洗和聚合多维度业务数据，支持从\"3级到7级组织\"再到\"单兵个人\"的三个维度下钻分析。目前已成功上线并应用于月度复盘会议，帮助管理者精准定位销售动作偏差，实现了管理决策从\"凭经验\"到\"看数据\"的转型。",
            materials: [
                { type: "video", path: "文件夹相关内容/数据分析助手.mp4", name: "演示视频" }
            ]
        },
        {
            name: "中医门店 AI 信息采集与供给质量提升",
            tags: ["ai-bd"],
            tagNames: ["人机协同与 AIBD", "闭环运营"],
            description: "面对中医业务门店扩张与 BD 精力不足的矛盾（基础货架不达标率 66%），主导了 AIBD 信息采集与清洗专项。通过设计三轮智能外呼策略（POI 标签校准、基础信息收集、反向核对），替代人工完成标准化的信息清洗工作，从而释放 BD 精力聚焦高价值运营。项目实现了 67.9% 的接通率与 27.5% 的端到端转化率，成功完成了存量中医商户的标签校准，为后续\"全托管运营\"打下了坚实的数据基础。",
            materials: [
                { type: "video", path: "文件夹相关内容/中医信息采集.mp4", name: "演示视频" }
            ]
        },
        {
            name: "阿波罗销售辅助插件（Apollo Tool）",
            tags: ["ai-tools"],
            tagNames: ["AI 提效工具与插件", "规则引擎"],
            description: "针对销售在多个系统间切换查询（平均单店耗时 5 分钟）的痛点，设计并推广了一款集成式 Chrome 插件。该工具内嵌规则引擎，能实时分析目标门店数据，自动匹配供给任务并生成个性化沟通建议。上线后覆盖率达 91%，单店作业时长从 5 分钟缩短至 3 分钟（提效 40%），按单人日均外呼 45 家计算，每日为单名销售节约 90 分钟，极大提升了作业人效。",
            materials: [
                { type: "video", path: "文件夹相关内容/插件-演示视频.mp4", name: "演示视频" },
                { type: "video", path: "文件夹相关内容/插件使用统计.mp4", name: "使用统计" }
            ]
        },
        {
            name: "AIBD 招商全景看板",
            tags: ["data-insight"],
            tagNames: ["数据洞察与决策", "产品运营"],
            description: "为推动 AIBD 工具在前线销售团队的渗透率，解决管理层\"看不见 AI 价值\"的问题，搭建了 AIBD 招商全景看板。该看板实现了从\"工具使用率\"到\"招商转化结果\"的可视化闭环，让各级管理者（从主管到大区）拥有了抓手。数据显示，AI 辅助招商的端到端转化率稳定在 15% 且无客诉，通过数据可视化成功推动了效能优化组的全员使用，验证了工具的业务价值。",
            materials: [
                { type: "video", path: "文件夹相关内容/AIBD招商看板.mp4", name: "演示视频" }
            ]
        },
        {
            name: "门店 ROI 实时测算工具（算账工具）",
            tags: ["ai-tools"],
            tagNames: ["AI 提效工具与插件", "数字化转型"],
            description: "针对销售依赖本地 Excel 测算 ROI 导致数据滞后且分发困难的问题，主导开发了基于 Web 的实时算账工具。该产品直接打通公司数据库，替代了传统的\"季度更表\"模式，实现了门店签约目标与 ROI 的实时在线测算。这不仅消除了版本管理混乱的风险，更大幅降低了销售在复杂计算上的认知负荷，提升了谈单时的专业度与响应速度。",
            materials: [
                { type: "video", path: "文件夹相关内容/中小发头玩算账工具.mp4", name: "演示视频" }
            ]
        },
        {
            name: "销售自动化考核工具",
            tags: ["ai-workflow"],
            tagNames: ["AI 赋能业务流优化", "效率工具"],
            description: "针对销售管理中繁琐的月度考核统计（涉及 IVR、考勤、通话记录多源数据），开发了自动化报表生成工具。通过标准化数据处理流程，将原本耗时 2 小时的手工统计工作压缩至 5 分钟内完成，实现了管理动作的\"零代码\"自动化，释放了管理者的运营精力。",
            materials: [
                { type: "video", path: "文件夹相关内容/销售考核工具.mp4", name: "演示视频" }
            ]
        }
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
    // document.getElementById('aboutText').textContent = personalData.aboutText;
    document.getElementById('footerName').textContent = personalData.name;

    // 填充联系信息
    document.getElementById('contactEmail').textContent = personalData.email;
    document.getElementById('contactQQEmail').textContent = personalData.qqEmail;
    document.getElementById('contactPhone').textContent = personalData.phone;
    document.getElementById('contactLocation').textContent = personalData.location;

    // 填充社交链接
    // 社交链接已移除，不再填充
    // document.getElementById('emailLink').href = personalData.social.email;

    // 填充当前年份
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // 填充技能
    populateSkills();

    // 填充项目
    populateProjects();

    // 填充实习经历
    populateInternship();
}

// 填充实习经历卡片
function populateInternship() {
    const internshipGrid = document.getElementById('internshipGrid');
    if (!internshipGrid) return;

    internshipGrid.innerHTML = ''; // 清空内容

    personalData.internshipProjects.forEach((project, index) => {
        const internshipCard = document.createElement('div');
        internshipCard.className = 'internship-card glass-card';
        internshipCard.setAttribute('data-tags', project.tags.join(' '));
        internshipCard.style.animationDelay = `${index * 0.1}s`;

        // 生成标签 HTML
        const tagsHTML = project.tagNames.map(tag => `<span class="internship-tag">${tag}</span>`).join('');

        // 生成材料预览（用于折叠状态 - 现在移至最上方）
        let topPreviewHTML = '';
        if (project.materials && project.materials.length > 0) {
            const firstMaterial = project.materials[0];
            if (firstMaterial.type === 'image') {
                topPreviewHTML = `<div class="card-top-preview" style="background-image: url('${firstMaterial.path}');"></div>`;
            } else if (firstMaterial.type === 'video') {
                topPreviewHTML = `<div class="card-top-preview video-top-preview">
                    <video src="${firstMaterial.path}" autoplay muted loop playsinline></video>
                </div>`;
            }
        }

        // 生成完整材料展示（用于展开状态）
        let materialsHTML = '';
        if (project.materials && project.materials.length > 0) {
            if (project.materials.length === 1) {
                // 单个材料
                const material = project.materials[0];
                if (material.type === 'image') {
                    materialsHTML = `
                        <div class="materials-container">
                            <img src="${material.path}" alt="${project.name}" class="material-image">
                        </div>
                    `;
                } else if (material.type === 'video') {
                    materialsHTML = `
                        <div class="materials-container">
                            <div class="video-thumbnail" data-video="${material.path}">
                                <video src="${material.path}" muted></video>
                                <div class="play-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="white">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    `;
                }
            } else {
                // 多个材料 - 轮播
                const materialsSlides = project.materials.map((material, idx) => {
                    if (material.type === 'image') {
                        return `<div class="carousel-slide ${idx === 0 ? 'active' : ''}">
                            <img src="${material.path}" alt="${material.name}">
                            <div class="slide-caption">${material.name}</div>
                        </div>`;
                    } else if (material.type === 'video') {
                        return `<div class="carousel-slide ${idx === 0 ? 'active' : ''}" data-video="${material.path}">
                            <video src="${material.path}" muted></video>
                            <div class="play-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="white">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                            <div class="slide-caption">${material.name}</div>
                        </div>`;
                    }
                }).join('');

                materialsHTML = `
                    <div class="materials-container carousel">
                        <div class="carousel-track">
                            ${materialsSlides}
                        </div>
                        <button class="carousel-btn prev">‹</button>
                        <button class="carousel-btn next">›</button>
                        <div class="carousel-indicators">
                            ${project.materials.map((_, idx) =>
                    `<span class="indicator ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>`
                ).join('')}
                        </div>
                    </div>
                `;
            }
        }

        internshipCard.innerHTML = `
            ${topPreviewHTML}
            <div class="card-header">
                <div class="card-header-content">
                    <h3 class="project-title-large">${project.name}</h3>
                    <div class="internship-tags">
                        ${tagsHTML}
                    </div>
                </div>
                <button class="expand-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </div>
            <div class="card-body">
                <p class="internship-description">${project.description}</p>
                ${materialsHTML}
            </div>
        `;

        internshipGrid.appendChild(internshipCard);

        // 添加展开/折叠功能
        const expandBtn = internshipCard.querySelector('.expand-btn');
        const cardBody = internshipCard.querySelector('.card-body');

        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            internshipCard.classList.toggle('expanded');
        });

        // 轮播功能
        if (project.materials && project.materials.length > 1) {
            const carousel = internshipCard.querySelector('.carousel');
            const track = carousel.querySelector('.carousel-track');
            const slides = carousel.querySelectorAll('.carousel-slide');
            const prevBtn = carousel.querySelector('.prev');
            const nextBtn = carousel.querySelector('.next');
            const indicators = carousel.querySelectorAll('.indicator');
            let currentSlide = 0;

            const updateCarousel = (index) => {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
                indicators.forEach((indicator, i) => {
                    indicator.classList.toggle('active', i === index);
                });
                currentSlide = index;
            };

            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const newIndex = (currentSlide - 1 + slides.length) % slides.length;
                updateCarousel(newIndex);
            });

            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const newIndex = (currentSlide + 1) % slides.length;
                updateCarousel(newIndex);
            });

            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', (e) => {
                    e.stopPropagation();
                    updateCarousel(index);
                });
            });
        }

        // 视频播放功能
        const videoThumbnails = internshipCard.querySelectorAll('[data-video]');
        videoThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', (e) => {
                e.stopPropagation();
                const videoPath = thumbnail.getAttribute('data-video');
                openVideoModal(videoPath);
            });
        });
    });

    // 初始化筛选功能
    initInternshipFilter();
}

// 视频模态框
function openVideoModal(videoPath) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <video controls autoplay>
                <source src="${videoPath}" type="video/mp4">
                您的浏览器不支持视频播放。
            </video>
        </div>
    `;

    document.body.appendChild(modal);

    // 关闭功能
    const closeBtn = modal.querySelector('.modal-close');
    const video = modal.querySelector('video');

    const closeModal = () => {
        video.pause();
        modal.classList.add('closing');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 添加打开动画
    setTimeout(() => {
        modal.classList.add('open');
    }, 10);
}

// 填充技能列表
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = ''; // 清空内容

    personalData.skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.style.animationDelay = `${index * 0.1}s`;

        skillItem.innerHTML = `
            <div class="skill-info">
                <span class="skill-name">
                    <span class="skill-icon-mini">${skill.icon}</span>
                    ${skill.name}
                </span>
                <span class="skill-percent">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-progress="${skill.level}"></div>
            </div>
        `;

        skillsGrid.appendChild(skillItem);
    });

    // 重新启动进度条观察
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

avatarImg.addEventListener('load', function () {
    this.classList.add('loaded');
});

// 强制检查图片是否已经加载完成（处理缓存情况）
if (avatarImg.complete) {
    avatarImg.classList.add('loaded');
}

avatarImg.addEventListener('error', function () {
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
                if (progressBar) {
                    const progress = progressBar.getAttribute('data-progress');
                    setTimeout(() => {
                        progressBar.style.width = `${progress}%`;
                    }, 200);
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });
};

// ==================== 平滑滚动增强 ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// 鼠标跟随效果（已根据用户要求禁用）
// animate();

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

// ==================== 工作经历筛选功能 ====================
function initInternshipFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const internshipCards = document.querySelectorAll('.internship-card');

    if (!filterBtns.length || !internshipCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有按钮的 active 类
            filterBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的 active 类
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            internshipCards.forEach(card => {
                const cardTags = card.getAttribute('data-tags');
                const isMatch = filter === 'all' || cardTags.includes(filter);

                if (isMatch) {
                    // 显示匹配的卡片
                    card.classList.remove('hidden');
                    // 强制重绘以触发动画
                    card.offsetHeight;
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                    card.style.filter = 'blur(0)';
                } else {
                    // 隐藏不匹配的卡片
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    card.style.filter = 'blur(4px)';

                    // 等待动画结束后再彻底隐藏占位
                    setTimeout(() => {
                        if (!card.classList.contains('active-fade')) { // 防止筛选过快导致的冲突
                            card.classList.add('hidden');
                        }
                    }, 400);
                }
            });
        });
    });
}
