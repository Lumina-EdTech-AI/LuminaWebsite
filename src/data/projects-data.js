/**
 * 麓鸣AI教育 - 项目展示系统数据库
 * Project Showcase Database
 */

export const projectsData = {
  // 项目分类
  categories: [
    {
      id: 'ai-education',
      name: 'AI教育产品',
      nameEn: 'AI Education Products',
      icon: '🤖',
      description: '运用人工智能技术赋能教育的创新产品',
      descriptionEn: 'Innovative products leveraging AI technology to empower education'
    },
    {
      id: 'international-consulting',
      name: '国际教育咨询',
      nameEn: 'International Education Consulting',
      icon: '🌍',
      description: '为学生提供全球升学规划和咨询服务',
      descriptionEn: 'Global university admission planning and consulting services'
    },
    {
      id: 'research-innovation',
      name: '科研创新',
      nameEn: 'Research & Innovation',
      icon: '🔬',
      description: '与顶尖高校合作的前沿科研项目',
      descriptionEn: 'Cutting-edge research projects in collaboration with top universities'
    },
    {
      id: 'digital-transformation',
      name: '教育数字化',
      nameEn: 'Digital Transformation',
      icon: '💻',
      description: '为教育机构提供数字化转型解决方案',
      descriptionEn: 'Digital transformation solutions for educational institutions'
    }
  ],

  // 项目列表
  projects: [
    {
      id: 'lumina-ai-teacher',
      category: 'ai-education',
      name: '麓鸣AI智能教师',
      nameEn: 'Lumina AI Teacher',
      image: '/images/projects/ai-teacher.jpg',
      status: 'active',
      statusEn: 'Active',
      year: '2020',
      description: '麓鸣自主研发的AI教师系统，能够实时监测学生学习状态，提供个性化教学建议。',
      descriptionEn: 'Self-developed AI Teacher system that monitors student learning in real-time and provides personalized teaching suggestions.',
      longDescription: '麓鸣AI智能教师是集团在2020年推出的旗舰产品，整合了深度学习、自然语言处理等前沿技术。该系统能够：\n\n• 实时分析学生的学习行为和知识掌握情况\n• 基于学生个人特点生成定制化学习路径\n• 提供智能答疑和学习资源推荐\n• 与传统教师协作，共同关注学生成长\n\n截至2024年，系统已服务10万+学生，帮助学生平均提升学业成绩30-50%。',
      longDescriptionEn: 'Lumina AI Teacher is the flagship product launched in 2020, integrating cutting-edge technologies like deep learning and NLP. The system can:\n\n• Analyze student learning behavior and knowledge mastery in real-time\n• Generate customized learning paths based on individual student characteristics\n• Provide intelligent Q&A and learning resource recommendations\n• Collaborate with traditional teachers to support student development\n\nAs of 2024, the system has served 100,000+ students, helping them improve academic performance by 30-50% on average.',
      features: [
        '实时学习监测',
        '个性化路径推荐',
        '智能答疑系统',
        '多维数据分析',
        '自适应难度调整',
        '家长互动平台'
      ],
      featuresEn: [
        'Real-time Learning Monitoring',
        'Personalized Path Recommendations',
        'Intelligent Q&A System',
        'Multi-dimensional Analytics',
        'Adaptive Difficulty Adjustment',
        'Parent Engagement Platform'
      ],
      metrics: [
        { label: '服务学生', value: '10万+', icon: '👥' },
        { label: '日均活跃', value: '2万+', icon: '📊' },
        { label: '成绩提升', value: '30-50%', icon: '📈' },
        { label: '满意度', value: '96%', icon: '⭐' }
      ],
      metricsEn: [
        { label: 'Students Served', value: '100K+', icon: '👥' },
        { label: 'Daily Active', value: '20K+', icon: '📊' },
        { label: 'Grade Improvement', value: '30-50%', icon: '📈' },
        { label: 'Satisfaction', value: '96%', icon: '⭐' }
      ],
      technologies: ['TensorFlow', 'PyTorch', 'NLP', 'Data Mining', 'Vue 3', 'Node.js'],
      impact: '改变了传统教学模式，让AI成为教师的得力助手',
      impactEn: 'Transformed traditional teaching models, making AI a powerful teaching assistant'
    },
    {
      id: 'lumina-smart-learning',
      category: 'ai-education',
      name: '麓鸣智慧学习平台',
      nameEn: 'Lumina Smart Learning Platform',
      image: '/images/projects/smart-learning.jpg',
      status: 'active',
      statusEn: 'Active',
      year: '2021',
      description: '集教学、学习、管理于一体的综合教育平台，支持多角色协作。',
      descriptionEn: 'Comprehensive education platform integrating teaching, learning, and management with multi-role collaboration.',
      longDescription: '麓鸣智慧学习平台是为学校和教育机构设计的一体化解决方案，包含学生端、教师端、家长端和管理端。平台特色：\n\n• 学生端：个性化学习助手、作业管理、学习资源库\n• 教师端：课堂教学工具、学生评估、数据分析\n• 家长端：学习进度查看、家校互动、成长报告\n• 管理端：全校数据统计、资源管理、系统配置\n\n已在500+所学校部署，日均活跃用户50万+。',
      longDescriptionEn: 'Lumina Smart Learning Platform is an integrated solution for schools and educational institutions, featuring student, teacher, parent, and admin portals. Platform features:\n\n• Student Portal: AI learning assistant, homework management, resource library\n• Teacher Portal: classroom tools, student assessment, data analytics\n• Parent Portal: progress tracking, home-school interaction, growth reports\n• Admin Portal: school-wide statistics, resource management, system configuration\n\nDeployed in 500+ schools with 500K+ daily active users.',
      features: [
        '多端协作',
        '学习资源库',
        '实时互动',
        '数据驱动决策',
        '移动端支持',
        '安全隐私保护'
      ],
      featuresEn: [
        'Multi-role Collaboration',
        'Resource Library',
        'Real-time Interaction',
        'Data-driven Decision',
        'Mobile Support',
        'Security & Privacy'
      ],
      metrics: [
        { label: '部署学校', value: '500+', icon: '🏫' },
        { label: '日均活跃', value: '50万+', icon: '📊' },
        { label: '系统可用性', value: '99.9%', icon: '✅' },
        { label: '用户满意度', value: '94%', icon: '⭐' }
      ],
      metricsEn: [
        { label: 'Schools Deployed', value: '500+', icon: '🏫' },
        { label: 'Daily Active', value: '500K+', icon: '📊' },
        { label: 'System Uptime', value: '99.9%', icon: '✅' },
        { label: 'User Satisfaction', value: '94%', icon: '⭐' }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
      impact: '赋能学校数字化转型，提升教学效率30%以上',
      impactEn: 'Empowered schools for digital transformation, increasing teaching efficiency by 30%+'
    },
    {
      id: 'lumina-harvard-pathway',
      category: 'international-consulting',
      name: '哈佛名校升学通道',
      nameEn: 'Harvard Elite University Pathway',
      image: '/images/projects/harvard-pathway.jpg',
      status: 'active',
      statusEn: 'Active',
      year: '2019',
      description: '为中国学生提供赴美顶尖大学升学规划的全方位咨询服务。',
      descriptionEn: 'Comprehensive consulting services for Chinese students pursuing admission to top US universities.',
      longDescription: '哈佛名校升学通道是麓鸣与哈佛大学及美国TOP30名校建立的深度合作项目。项目包括：\n\n• 个性化升学规划和选校指导\n• SAT/AP/雅思培训和冲刺课程\n• 申请材料指导和文书辅导\n• 面试模拟和技巧训练\n• 录取后的融入指导\n\n自2019年启动以来，已帮助500+学生成功申请到美国顶尖大学，包括哈佛、耶鲁、斯坦福等。',
      longDescriptionEn: 'Harvard Elite University Pathway is a deep partnership project between Lumina and Harvard University and other top 30 US universities. The program includes:\n\n• Personalized admission planning and school selection guidance\n• SAT/AP/IELTS training and intensive courses\n• Application material guidance and essay coaching\n• Interview simulation and technique training\n• Post-admission adjustment support\n\nSince its launch in 2019, it has helped 500+ students successfully apply to top US universities, including Harvard, Yale, Stanford, etc.',
      features: [
        '顶尖大学合作',
        '专业规划团队',
        '一对一辅导',
        '申请全程陪伴',
        '录取率高',
        '持续后续支持'
      ],
      featuresEn: [
        'Elite University Partnership',
        'Expert Planning Team',
        'One-on-one Coaching',
        'Full Application Support',
        'High Acceptance Rate',
        'Post-admission Support'
      ],
      metrics: [
        { label: '成功学生', value: '500+', icon: '🎓' },
        { label: '顶校录取', value: '95%', icon: '🏆' },
        { label: '合作大学', value: '30+', icon: '🌟' },
        { label: '平均SAT', value: '1520+', icon: '📚' }
      ],
      metricsEn: [
        { label: 'Successful Students', value: '500+', icon: '🎓' },
        { label: 'Top School Admission', value: '95%', icon: '🏆' },
        { label: 'Partner Universities', value: '30+', icon: '🌟' },
        { label: 'Average SAT', value: '1520+', icon: '📚' }
      ],
      technologies: ['CRM System', 'Data Analytics', 'Communication Platform'],
      impact: '打开了中国学生通往美国顶尖大学的新通道',
      impactEn: 'Opened a new pathway for Chinese students to access top US universities'
    },
    {
      id: 'brain-ai-interface',
      category: 'research-innovation',
      name: '脑机接口教育应用研究',
      nameEn: 'Brain-Computer Interface Education Research',
      image: '/images/projects/bci-research.jpg',
      status: 'active',
      statusEn: 'Active',
      year: '2022',
      description: '与斯坦福、MIT等顶尖高校合作的脑机接口在教育中的应用研究。',
      descriptionEn: 'BCI application research in education in collaboration with Stanford, MIT, and other top institutions.',
      longDescription: '脑机接口教育应用研究是麓鸣与硅谷顶尖科技公司和高校的前沿合作项目。研究内容包括：\n\n• 脑电波监测与学习状态分析\n• 认知负荷优化研究\n• 个性化学习路径的神经基础\n• 注意力和学习效率提升方案\n\n该项目已获得3项专利授权，发表学术论文8篇，正在探索将BCI技术落地到实际教学中。',
      longDescriptionEn: 'BCI Education Application Research is Lumina\'s cutting-edge collaboration with Silicon Valley tech companies and leading universities. Research areas include:\n\n• EEG monitoring and learning state analysis\n• Cognitive load optimization\n• Neural basis of personalized learning paths\n• Attention and learning efficiency enhancement\n\nThe project has obtained 3 patents and published 8 academic papers, exploring practical BCI implementation in education.',
      features: [
        '前沿脑科学',
        '学习神经基础',
        '个性化优化',
        '专利技术',
        '学术发表',
        '实际应用探索'
      ],
      featuresEn: [
        'Cutting-edge Neuroscience',
        'Learning Neurobiology',
        'Personalization Optimization',
        'Patent Technology',
        'Academic Publication',
        'Practical Application'
      ],
      metrics: [
        { label: '专利数', value: '3项', icon: '🏅' },
        { label: '学术论文', value: '8篇', icon: '📖' },
        { label: '合作高校', value: '5所', icon: '🎓' },
        { label: '研究周期', value: '2年+', icon: '⏱️' }
      ],
      metricsEn: [
        { label: 'Patents', value: '3', icon: '🏅' },
        { label: 'Papers Published', value: '8', icon: '📖' },
        { label: 'Partner Universities', value: '5', icon: '🎓' },
        { label: 'Research Duration', value: '2+ years', icon: '⏱️' }
      ],
      technologies: ['EEG Processing', 'Machine Learning', 'Neuroscience', 'Signal Processing'],
      impact: '开启了教育与脑科学结合的新时代',
      impactEn: 'Opened a new era of education combined with neuroscience'
    },
    {
      id: 'lumina-digital-school',
      category: 'digital-transformation',
      name: '学校数字化转型方案',
      nameEn: 'School Digital Transformation Solution',
      image: '/images/projects/digital-school.jpg',
      status: 'active',
      statusEn: 'Active',
      year: '2023',
      description: '为传统学校提供从课堂、管理到评估的全方位数字化转型。',
      descriptionEn: 'Comprehensive digital transformation for schools covering classrooms, management, and assessment.',
      longDescription: '学校数字化转型方案是麓鸣为传统教育机构量身定制的解决方案，包括：\n\n• 课堂数字化：智能教室、电子教材、在线互动\n• 管理数字化：学生管理系统、财务管理、人力资源\n• 教学评估数字化：学业评估、素质评价、成长跟踪\n• 基础设施：云平台、数据安全、技术支持\n\n已成功服务100+所学校，覆盖30万+师生，获得一致好评。',
      longDescriptionEn: 'School Digital Transformation Solution is a customized solution for traditional educational institutions, including:\n\n• Classroom Digitalization: smart classrooms, digital materials, online interaction\n• Management Digitalization: student management, financial management, HR systems\n• Teaching Assessment Digitalization: academic assessment, quality evaluation, progress tracking\n• Infrastructure: cloud platform, data security, technical support\n\nSuccessfully serving 100+ schools with 300K+ teachers and students.',
      features: [
        '全面转型',
        '一体化方案',
        '云平台支持',
        '数据安全',
        '持续创新',
        '本地化服务'
      ],
      featuresEn: [
        'Comprehensive Transformation',
        'Integrated Solution',
        'Cloud Platform',
        'Data Security',
        'Continuous Innovation',
        'Localized Service'
      ],
      metrics: [
        { label: '服务学校', value: '100+', icon: '🏫' },
        { label: '覆盖师生', value: '30万+', icon: '👨‍🎓' },
        { label: '系统集成', value: '12个', icon: '🔗' },
        { label: '客户满意度', value: '97%', icon: '⭐' }
      ],
      metricsEn: [
        { label: 'Schools Served', value: '100+', icon: '🏫' },
        { label: 'Users Covered', value: '300K+', icon: '👨‍🎓' },
        { label: 'Systems Integrated', value: '12', icon: '🔗' },
        { label: 'Customer Satisfaction', value: '97%', icon: '⭐' }
      ],
      technologies: ['Cloud Infrastructure', 'Data Analytics', 'IoT', 'Security', 'Integration'],
      impact: '助力传统学校跨越数字鸿沟，进入智能教育时代',
      impactEn: 'Helped traditional schools bridge the digital divide and enter the smart education era'
    },
    {
      id: 'global-ai-curriculum',
      category: 'international-consulting',
      name: '全球AI教育课程体系',
      nameEn: 'Global AI Education Curriculum',
      image: '/images/projects/ai-curriculum.jpg',
      status: 'active',
      statusEn: 'Active',
      year: '2023',
      description: '整合全球顶尖AI教育资源，为高中生提供高端AI课程。',
      descriptionEn: 'Integrated global AI education resources providing advanced AI courses for high school students.',
      longDescription: '全球AI教育课程体系是麓鸣与MIT、卡内基梅隆大学、伯克利等全球顶尖高校合作开发的课程项目。课程包括：\n\n• AI基础理论课程\n• 机器学习实战工坊\n• 深度学习应用项目\n• 伦理与社会影响分析\n• 大学申请辅导\n\n课程已在30个国家的200+学校开设，培养了1000+AI人才。',
      longDescriptionEn: 'Global AI Education Curriculum is developed in collaboration with MIT, Carnegie Mellon, UC Berkeley and other top universities. Courses include:\n\n• AI Fundamentals\n• Machine Learning Practical Workshops\n• Deep Learning Application Projects\n• Ethics & Social Impact Analysis\n• University Application Coaching\n\nOffered in 200+ schools across 30 countries, training 1000+ AI talents.',
      features: [
        '顶级课程设计',
        '实战项目',
        '国际认证',
        '师资培训',
        '全球网络',
        '升学指导'
      ],
      featuresEn: [
        'Top-tier Curriculum',
        'Hands-on Projects',
        'International Certification',
        'Teacher Training',
        'Global Network',
        'Admission Guidance'
      ],
      metrics: [
        { label: '开设国家', value: '30+', icon: '🌍' },
        { label: '合作学校', value: '200+', icon: '🏫' },
        { label: '毕业学生', value: '1000+', icon: '🎓' },
        { label: '升学率', value: '98%', icon: '🚀' }
      ],
      metricsEn: [
        { label: 'Countries', value: '30+', icon: '🌍' },
        { label: 'Partner Schools', value: '200+', icon: '🏫' },
        { label: 'Graduates', value: '1000+', icon: '🎓' },
        { label: 'University Admission', value: '98%', icon: '🚀' }
      ],
      technologies: ['Python', 'TensorFlow', 'Cloud Computing', 'Online Learning Platform'],
      impact: '培养全球AI人才，为未来做准备',
      impactEn: 'Training global AI talents for the future'
    }
  ]
}

/**
 * 辅助函数
 */
export function getProjectById(id) {
  return projectsData.projects.find(p => p.id === id)
}

export function getProjectsByCategory(categoryId) {
  return projectsData.projects.filter(p => p.category === categoryId)
}

export function getCategoryById(id) {
  return projectsData.categories.find(c => c.id === id)
}

export default projectsData
