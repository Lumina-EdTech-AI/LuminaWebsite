/**
 * 麓鸣AI教育 - 公司信息完整数据库
 * Company Information Database
 */

export const companyInfo = {
  // 基本信息
  basic: {
    name: '麓鸣教育集团',
    nameEn: 'Lumina Education Group',
    founded: 2015,
    slogan: '教育改变生命，科技加速教育',
    sloganEn: 'Education changes lives. Technology accelerates education.',
    description: '麓鸣教育集团是一家以AI技术和教育咨询为核心的国际化教育科技企业，致力于为全球个人、家庭和企业提供创新的教育解决方案。',
    descriptionEn: 'Lumina Education Group is an international EdTech company focused on AI technology and education consulting, dedicated to providing innovative educational solutions to individuals, families, and enterprises worldwide.'
  },

  // 使命、愿景、价值观
  mission: {
    title: '企业使命',
    titleEn: 'Mission',
    content: '通过AI技术和教育创新，打破教育不平等，让每个学生都能获得个性化的高质量教育。',
    contentEn: 'Through AI technology and education innovation, break down educational inequality and ensure every student receives personalized, high-quality education.'
  },

  vision: {
    title: '企业愿景',
    titleEn: 'Vision',
    content: '成为全球领先的AI教育平台，连接全球优秀教育资源，构建一个开放、包容、创新的教育生态。',
    contentEn: 'Become the world\'s leading AI education platform, connecting global educational resources, and building an open, inclusive, and innovative education ecosystem.'
  },

  values: [
    {
      title: '创新',
      titleEn: 'Innovation',
      icon: '💡',
      description: '不断突破，将前沿技术应用于教育领域',
      descriptionEn: 'Continuous breakthrough, applying cutting-edge technology to education'
    },
    {
      title: '卓越',
      titleEn: 'Excellence',
      icon: '🏆',
      description: '追求极致，提供最高质量的教育服务',
      descriptionEn: 'Pursue excellence, deliver the highest quality educational services'
    },
    {
      title: '包容',
      titleEn: 'Inclusion',
      icon: '🤝',
      description: '拥抱多元，让教育惠及全球每个角落',
      descriptionEn: 'Embrace diversity, make education accessible to every corner of the world'
    },
    {
      title: '责任',
      titleEn: 'Responsibility',
      icon: '📚',
      description: '承担责任，推动教育和社会的可持续发展',
      descriptionEn: 'Take responsibility, promote sustainable development of education and society'
    }
  ],

  // 公司历史（Timeline）
  history: [
    {
      year: 2015,
      title: '公司成立',
      titleEn: 'Company Founded',
      description: '麓鸣教育集团正式成立，以"AI技术+教育咨询"的双核心商业模式开启创业之旅。',
      descriptionEn: 'Lumina Education Group officially founded with a dual-core business model of AI technology and education consulting.',
      milestone: '💫'
    },
    {
      year: 2016,
      title: '发布首个AI产品',
      titleEn: 'Launched First AI Product',
      description: '推出麓鸣智能教学系统，实现个性化学习路径推荐。',
      descriptionEn: 'Launched Lumina Intelligent Teaching System with personalized learning path recommendations.',
      milestone: '🚀'
    },
    {
      year: 2017,
      title: '教育咨询扩展',
      titleEn: 'Education Consulting Expansion',
      description: '在全国建立首批10个教育咨询中心，服务范围覆盖500+个城市。',
      descriptionEn: 'Established first 10 education consulting centers nationwide, serving 500+ cities.',
      milestone: '📍'
    },
    {
      year: 2018,
      title: '国际化布局',
      titleEn: 'Global Expansion',
      description: '在美国、英国、新加坡等国家建立分支机构，开拓国际市场。',
      descriptionEn: 'Established branches in USA, UK, Singapore and other countries for international market expansion.',
      milestone: '🌍'
    },
    {
      year: 2019,
      title: 'A轮融资',
      titleEn: 'Series A Funding',
      description: '获得5000万美元融资，投资方包括顶级VC和教育产业基金。',
      descriptionEn: 'Secured $50M Series A funding from top VCs and education industry funds.',
      milestone: '💰'
    },
    {
      year: 2020,
      title: '在线教育突破',
      titleEn: 'Online Education Breakthrough',
      description: '推出麓鸣在线平台，日均活跃用户突破100万。',
      descriptionEn: 'Launched Lumina Online Platform with 1M+ daily active users.',
      milestone: '📱'
    },
    {
      year: 2021,
      title: 'B轮融资',
      titleEn: 'Series B Funding',
      description: '获得1亿美元融资，开发AI教师、AI批改等前沿产品。',
      descriptionEn: 'Secured $100M Series B funding to develop AI Teacher, AI Grading and other cutting-edge products.',
      milestone: '🚀'
    },
    {
      year: 2022,
      title: '研究中心成立',
      titleEn: 'Research Center Established',
      description: '建立麓鸣AI教育研究中心，与顶尖大学开展合作研究。',
      descriptionEn: 'Established Lumina AI Education Research Center with partnerships with top universities.',
      milestone: '🔬'
    },
    {
      year: 2023,
      title: '全球化深化',
      titleEn: 'Global Deepening',
      description: '服务覆盖30+个国家，累计服务学生50万+，合作教育机构1000+。',
      descriptionEn: 'Serving 30+ countries, 500K+ students, 1000+ educational institutions.',
      milestone: '🌏'
    },
    {
      year: 2024,
      title: '新代产品发布',
      titleEn: 'Next-Gen Product Launch',
      description: '发布新一代AI教育平台，集成深度学习、自然语言处理等最新技术。',
      descriptionEn: 'Launched next-generation AI education platform with latest deep learning and NLP technologies.',
      milestone: '⚡'
    }
  ],

  // 核心竞争力
  competencies: [
    {
      title: 'AI技术领先',
      titleEn: 'Leading AI Technology',
      icon: '🤖',
      features: [
        '自主研发的智能教学引擎',
        '自然语言处理和知识图谱',
        '个性化学习路径推荐',
        '实时学习分析和数据洞察'
      ],
      featuresEn: [
        'Self-developed intelligent teaching engine',
        'NLP and knowledge graph technology',
        'Personalized learning path recommendations',
        'Real-time learning analytics and insights'
      ]
    },
    {
      title: '全球教育资源',
      titleEn: 'Global Education Resources',
      icon: '🌐',
      features: [
        '与50+所全球顶尖大学合作',
        '集成国际课程体系(AP, A-Level等)',
        '连接全球优秀教师和导师',
        '提供跨国跨文化教育支持'
      ],
      featuresEn: [
        'Partnerships with 50+ top universities',
        'Integrated international curricula (AP, A-Level, etc)',
        'Connected to global excellent teachers and mentors',
        'Cross-border and cross-cultural education support'
      ]
    },
    {
      title: '专业人才队伍',
      titleEn: 'Professional Talent Team',
      icon: '👥',
      features: [
        '来自顶尖公司的技术专家',
        '国际教育背景的咨询顾问',
        '获得多项奖项的教学研究员',
        '500+人的国际化团队'
      ],
      featuresEn: [
        'Technical experts from top companies',
        'Consulting advisors with international education background',
        'Award-winning teaching researchers',
        '500+ member international team'
      ]
    },
    {
      title: '创新研发能力',
      titleEn: 'Innovation R&D Capability',
      icon: '🔬',
      features: [
        '年度研发投入超过营收的15%',
        '获得30+项AI相关专利',
        '与universities合作50+项研究项目',
        '每年发表10+篇学术论文'
      ],
      featuresEn: [
        'Annual R&D investment over 15% of revenue',
        'Granted 30+ AI-related patents',
        '50+ collaborative research projects with universities',
        '10+ academic papers published annually'
      ]
    }
  ],

  // 公司数据统计
  statistics: [
    {
      label: '成立年份',
      labelEn: 'Founded',
      value: '2015',
      unit: ''
    },
    {
      label: '全球员工',
      labelEn: 'Employees',
      value: '500+',
      unit: ''
    },
    {
      label: '服务国家',
      labelEn: 'Countries Served',
      value: '30+',
      unit: ''
    },
    {
      label: '累计学生',
      labelEn: 'Students Served',
      value: '50万+',
      unit: ''
    },
    {
      label: '合作机构',
      labelEn: 'Partner Institutions',
      value: '1000+',
      unit: ''
    },
    {
      label: '教育中心',
      labelEn: 'Education Centers',
      value: '50+',
      unit: ''
    },
    {
      label: '技术专利',
      labelEn: 'Technology Patents',
      value: '30+',
      unit: ''
    },
    {
      label: '研究项目',
      labelEn: 'Research Projects',
      value: '50+',
      unit: ''
    }
  ],

  // 组织架构
  organization: {
    title: '组织架构',
    titleEn: 'Organization Structure',
    departments: [
      {
        name: '执行层',
        nameEn: 'Executive Board',
        roles: [
          { title: 'CEO', name: 'Sissi Ma' },
          { title: 'CTO', name: 'Benny Fang' },
          { title: '联合创始人', name: 'David Fang' }
        ]
      },
      {
        name: '技术部',
        nameEn: 'Technology Division',
        roles: [
          { title: '技术总监', subtitle: 'VP of Engineering' },
          { title: 'AI研究组', subtitle: 'AI Research Team' },
          { title: '平台开发组', subtitle: 'Platform Development Team' },
          { title: '数据科学组', subtitle: 'Data Science Team' }
        ]
      },
      {
        name: '教育咨询部',
        nameEn: 'Education Consulting Division',
        roles: [
          { title: '咨询总监', subtitle: 'VP of Consulting' },
          { title: '学术策略组', subtitle: 'Academic Strategy Team' },
          { title: '升学指导组', subtitle: 'College Admissions Team' },
          { title: '国际项目组', subtitle: 'International Programs Team' }
        ]
      },
      {
        name: '市场运营部',
        nameEn: 'Marketing & Operations Division',
        roles: [
          { title: '市场总监', subtitle: 'VP of Marketing' },
          { title: '品牌管理组', subtitle: 'Brand Management' },
          { title: '用户运营组', subtitle: 'User Operations' },
          { title: '海外拓展组', subtitle: 'International Expansion' }
        ]
      }
    ]
  },

  // 社会责任
  socialResponsibility: [
    {
      title: '教育公益',
      titleEn: 'Education for Good',
      description: '每年投入超过1000万元用于教育公益项目，帮助偏远地区学生获得优质教育。',
      descriptionEn: 'Invest over $1M annually in education charity programs to help students in remote areas access quality education.'
    },
    {
      title: '环境可持续',
      titleEn: 'Environmental Sustainability',
      description: '采用绿色办公方式，减少碳足迹，推动教育行业的可持续发展。',
      descriptionEn: 'Adopt green office practices, reduce carbon footprint, and promote sustainable development in the education industry.'
    },
    {
      title: '多元包容',
      titleEn: 'Diversity & Inclusion',
      description: '致力于打造多元包容的工作环境，员工来自50+个国家和地区。',
      descriptionEn: 'Create a diverse and inclusive workplace with employees from 50+ countries and regions.'
    }
  ]
}

export default companyInfo
