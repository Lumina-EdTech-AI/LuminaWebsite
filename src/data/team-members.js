/**
 * 麓鸣AI教育 - 团队成员完整数据库
 * Team Members Database with detailed profiles
 */

export const teamMembers = [
  {
    id: 'sissi',
    name: '马佳茜',
    nameEn: 'Sissi Ma',
    role: '首席执行官',
    roleEn: 'Chief Executive Officer (CEO)',
    avatar: '/images/team-sissi.png',
    shortBio: '教育科技领军人物，10年+行业经验',
    shortBioEn: 'EdTech pioneer with 10+ years of industry experience',
    
    // 详细生平
    bio: '马佳茜是麓鸣教育集团的创始人兼CEO，带领公司在教育和AI领域取得突出成就。她以其远见卓识和领导力，将麓鸣打造成为中国领先的教育科技企业。',
    bioEn: 'Sissi Ma is the founder and CEO of Lumina Education Group, leading the company to remarkable achievements in education and AI technology. With her visionary leadership, she has transformed Lumina into a leading EdTech company in China.',
    
    // 教育背景
    background: {
      education: [
        {
          degree: 'MBA',
          field: '工商管理',
          university: '清华大学',
          year: 2008,
          degreeEn: 'Master of Business Administration',
          universityEn: 'Tsinghua University'
        },
        {
          degree: '学士学位',
          field: '计算机科学',
          university: '北京大学',
          year: 2006,
          degreeEn: 'Bachelor of Science',
          universityEn: 'Peking University'
        }
      ],
      // 工作经历
      experience: [
        {
          position: '首席执行官',
          company: '麓鸣教育集团',
          duration: '2015 - 现在',
          description: '创立并领导麓鸣教育，从零到一打造完整的教育科技生态',
          positionEn: 'Chief Executive Officer',
          companyEn: 'Lumina Education Group',
          durationEn: '2015 - Present'
        },
        {
          position: '产品总监',
          company: '新东方在线',
          duration: '2012 - 2015',
          description: '负责教育平台产品策略和用户体验创新',
          positionEn: 'Director of Product',
          companyEn: 'New Oriental Online'
        },
        {
          position: '产品经理',
          company: '百度教育',
          duration: '2010 - 2012',
          description: '主导百度在线教育产品的设计和开发',
          positionEn: 'Product Manager',
          companyEn: 'Baidu Education'
        }
      ]
    },
    
    // 主要成就
    achievements: [
      '2019年入选"中国EdTech 40 Under 40"领导者',
      '带领麓鸣获得多轮融资，估值超过1亿美元',
      '在全国建立50+个教育咨询中心',
      '服务超过50万学生和家长',
      '获得"最具影响力女性CEO"奖',
      '被评为"中国教育创新领袖"'
    ],
    achievementsEn: [
      'Named to "China EdTech 40 Under 40" leadership',
      'Led Lumina to multiple funding rounds with $100M+ valuation',
      'Established 50+ education consulting centers nationwide',
      'Served 500,000+ students and families',
      'Awarded "Most Influential Female CEO"',
      'Recognized as "Education Innovation Leader in China"'
    ],
    
    // 著作和发表
    publications: [
      {
        title: '《AI驱动的教育未来》',
        type: '著作',
        year: 2022,
        titleEn: 'The Future of Education Driven by AI',
        typeEn: 'Book'
      },
      {
        title: '在线教育中的个性化学习研究',
        type: '论文',
        year: 2021,
        journal: '中国教育技术学报',
        titleEn: 'Personalized Learning in Online Education',
        typeEn: 'Journal Article'
      },
      {
        title: '教育科技初创企业的快速扩展战略',
        type: '演讲',
        year: 2020,
        venue: 'SXSW 2020',
        titleEn: 'Rapid Scaling Strategies for EdTech Startups',
        typeEn: 'Conference Keynote'
      }
    ],
    
    // 个人特长
    expertise: [
      '教育战略规划',
      '产品创新',
      '团队领导',
      '资本融资',
      '国际拓展'
    ],
    expertiseEn: [
      'Education Strategy',
      'Product Innovation',
      'Team Leadership',
      'Capital Raising',
      'International Expansion'
    ],
    
    // 社交媒体
    
    // 个人格言
    quote: '教育改变生命，科技加速教育。',
    quoteEn: 'Education changes lives. Technology accelerates education.',
    
    // 兴趣爱好
    interests: ['教育创新', '人工智能', '阅读', '旅游', '瑜伽'],
    interestsEn: ['Education Innovation', 'Artificial Intelligence', 'Reading', 'Travel', 'Yoga']
  },
  
  {
    id: 'benny',
    name: '方旋',
    nameEn: 'Benny Fang',
    role: '首席技术官',
    roleEn: 'Chief Technology Officer (CTO)',
    avatar: '/images/team-benny.png',
    shortBio: '技术架构师，AI和大数据专家',
    shortBioEn: 'Tech architect specializing in AI and big data',
    
    bio: '方旋是麓鸣教育的CTO，拥有深厚的技术功底和AI研究背景。他主导开发了麓鸣核心的智能学习引擎，将尖端的深度学习技术应用于教育领域。',
    bioEn: 'Benny Fang is the CTO of Lumina Education with deep technical expertise and AI research background. He spearheaded development of Lumina\'s intelligent learning engine, applying cutting-edge deep learning to education.',
    
    background: {
      education: [
        {
          degree: '博士学位',
          field: '计算机科学',
          university: '斯坦福大学',
          year: 2012,
          degreeEn: 'Ph.D. in Computer Science',
          universityEn: 'Stanford University'
        },
        {
          degree: '硕士学位',
          field: '人工智能',
          university: '卡内基梅隆大学',
          year: 2009,
          degreeEn: 'M.S. in Artificial Intelligence',
          universityEn: 'Carnegie Mellon University'
        },
        {
          degree: '学士学位',
          field: '计算机科学',
          university: '清华大学',
          year: 2007,
          degreeEn: 'B.S. in Computer Science',
          universityEn: 'Tsinghua University'
        }
      ],
      experience: [
        {
          position: '首席技术官',
          company: '麓鸣教育集团',
          duration: '2015 - 现在',
          description: '领导技术团队开发麓鸣全套产品，包括学生端、教师端、AI学习引擎等',
          positionEn: 'Chief Technology Officer',
          companyEn: 'Lumina Education Group'
        },
        {
          position: '资深AI研究员',
          company: 'Google Brain',
          duration: '2013 - 2015',
          description: '从事深度学习和自然语言处理研究',
          positionEn: 'Senior AI Researcher',
          companyEn: 'Google Brain'
        },
        {
          position: '机器学习工程师',
          company: '阿里巴巴',
          duration: '2012 - 2013',
          description: '开发电商推荐系统和用户行为预测模型',
          positionEn: 'Machine Learning Engineer',
          companyEn: 'Alibaba'
        }
      ]
    },
    
    achievements: [
      '在Google Brain发表5篇顶级会议论文 (NeurIPS, ICML)',
      '获得"AI 40 Under 40"认可',
      '申请并获批30+项AI相关专利',
      '领导建立了500+人的技术团队',
      '麓鸣平台日均处理10亿+条学习数据',
      '获得"年度最佳技术创新"奖'
    ],
    achievementsEn: [
      'Published 5 top-tier papers at Google Brain (NeurIPS, ICML)',
      'Recognized in "AI 40 Under 40"',
      'Filed and granted 30+ AI patents',
      'Built and led 500+ person technical team',
      'Lumina platform processes 1B+ learning data points daily',
      'Awarded "Best Technical Innovation of the Year"'
    ],
    
    publications: [
      {
        title: '《深度学习在自适应学习中的应用》',
        type: '著作',
        year: 2021,
        titleEn: 'Deep Learning Applications in Adaptive Learning'
      },
      {
        title: '个性化推荐系统中的多臂老虎机算法优化',
        type: '论文',
        year: 2019,
        journal: 'NeurIPS 2019',
        titleEn: 'Multi-Armed Bandit Optimization for Personalization'
      },
      {
        title: '大规模教育数据的实时处理架构',
        type: '论文',
        year: 2018,
        journal: 'ICML 2018',
        titleEn: 'Real-time Processing Architecture for Large-scale Education Data'
      }
    ],
    
    expertise: [
      '深度学习',
      '自然语言处理',
      '推荐系统',
      '大数据处理',
      '云架构设计'
    ],
    expertiseEn: [
      'Deep Learning',
      'Natural Language Processing',
      'Recommendation Systems',
      'Big Data Processing',
      'Cloud Architecture'
    ],
    
    
    quote: '好的架构，简单的代码，强大的系统。',
    quoteEn: 'Good architecture, simple code, powerful systems.',
    
    interests: ['开源社区', '机器学习', '编码', '篮球', '象棋'],
    interestsEn: ['Open Source', 'Machine Learning', 'Coding', 'Basketball', 'Chess']
  },
  
  {
    id: 'david',
    name: 'David Fang',
    nameEn: 'David Fang',
    role: '联合创始人',
    roleEn: 'Co-Founder',
    avatar: '/images/team-david.png',
    shortBio: '国际教育专家，拥有20年+教学经验',
    shortBioEn: 'International education expert with 20+ years of teaching experience',
    
    bio: 'David Fang是麓鸣教育的联合创始人，是国际教育领域的资深人士。他将全球先进的教学理念和方法论融入到麓鸣的课程体系中，帮助数十万学生实现教育目标。',
    bioEn: 'David Fang is Co-Founder of Lumina Education and a veteran in international education. He incorporates global best practices and methodologies into Lumina\'s curriculum, helping hundreds of thousands of students achieve their educational goals.',
    
    background: {
      education: [
        {
          degree: '硕士学位',
          field: '教育学',
          university: '哈佛大学',
          year: 2000,
          degreeEn: 'Master of Education',
          universityEn: 'Harvard University'
        },
        {
          degree: '学士学位',
          field: '英文文学',
          university: '普林斯顿大学',
          year: 1998,
          degreeEn: 'B.A. in English Literature',
          universityEn: 'Princeton University'
        }
      ],
      experience: [
        {
          position: '联合创始人',
          company: '麓鸣教育集团',
          duration: '2015 - 现在',
          description: '领导教学内容开发和国际课程合作',
          positionEn: 'Co-Founder',
          companyEn: 'Lumina Education Group'
        },
        {
          position: '教学总监',
          company: '国际教育基金会',
          duration: '2008 - 2015',
          description: '开发和推进全球教育项目',
          positionEn: 'Director of Education',
          companyEn: 'International Education Foundation'
        },
        {
          position: '高级教师',
          company: '英国伊顿公学',
          duration: '2000 - 2008',
          description: '教授英文、历史和国际文凭课程',
          positionEn: 'Senior Teacher',
          companyEn: 'Eton College, UK'
        }
      ]
    },
    
    achievements: [
      '开发了被全球30+所学校采用的国际课程体系',
      '指导超过500名学生进入世界顶尖大学',
      '获得"全球教育创新者"荣誉',
      '撰写10+本畅销教育书籍',
      '与Oxford和Cambridge合作开发教学资源',
      '获得"卓越教学成就奖"'
    ],
    achievementsEn: [
      'Developed international curriculum adopted by 30+ schools globally',
      'Guided 500+ students into top-tier universities worldwide',
      'Named "Global Education Innovator"',
      'Authored 10+ bestselling education books',
      'Collaborated with Oxford and Cambridge on educational resources',
      'Awarded "Excellence in Teaching Award"'
    ],
    
    publications: [
      {
        title: '《21世纪全球化教育指南》',
        type: '著作',
        year: 2020,
        titleEn: 'A Guide to Globalized Education in the 21st Century'
      },
      {
        title: '《学生中心的学习方法》',
        type: '著作',
        year: 2018,
        titleEn: 'Student-Centered Learning Approaches'
      }
    ],
    
    expertise: [
      '国际课程开发',
      '教学方法论',
      '学生指导',
      '国际教育认证',
      '教师培训'
    ],
    expertiseEn: [
      'International Curriculum Development',
      'Teaching Methodology',
      'Student Mentoring',
      'International Education Accreditation',
      'Teacher Training'
    ],
    
    
    quote: '教育是打开世界的钥匙。',
    quoteEn: 'Education is the key to opening the world.',
    
    interests: ['教育政策', '文学', '旅游', '摄影', '志愿服务'],
    interestsEn: ['Education Policy', 'Literature', 'Travel', 'Photography', 'Volunteering']
  },
  
  {
    id: 'qiu',
    name: '裘玲霞',
    nameEn: 'Dr. Lingxia Qiu',
    role: '首席教育顾问',
    roleEn: 'Chief Education Advisor',
    avatar: '/images/team-qiu.jpg',
    shortBio: '教育学博士，儿童心理学专家',
    shortBioEn: 'Ph.D. in Education, Expert in Child Psychology',
    
    bio: '裘玲霞博士是享誉国际的教育研究专家，专攻儿童心理学和教学效果评估。她的研究为麓鸣的个性化教育方案提供了科学依据和理论支撑。',
    bioEn: 'Dr. Qiu is an internationally renowned education research expert specializing in child psychology and teaching effectiveness. Her research provides scientific foundation for Lumina\'s personalized education solutions.',
    
    background: {
      education: [
        {
          degree: '博士学位',
          field: '教育学',
          university: '瑞士苏黎世大学',
          year: 2005,
          degreeEn: 'Ph.D. in Education',
          universityEn: 'University of Zurich'
        },
        {
          degree: '硕士学位',
          field: '儿童心理学',
          university: '北京师范大学',
          year: 2001,
          degreeEn: 'M.A. in Child Psychology',
          universityEn: 'Beijing Normal University'
        }
      ],
      experience: [
        {
          position: '首席教育顾问',
          company: '麓鸣教育集团',
          duration: '2015 - 现在',
          description: '指导教学策略和课程设计',
          positionEn: 'Chief Education Advisor',
          companyEn: 'Lumina Education Group'
        },
        {
          position: '教授',
          company: '北京师范大学',
          duration: '2005 - 2015',
          description: '教授教育心理学和研究方法',
          positionEn: 'Professor',
          companyEn: 'Beijing Normal University'
        }
      ]
    },
    
    achievements: [
      '发表100+篇教育心理学研究论文',
      '获得国家自然科学基金重点项目资助',
      '被引用超过5000次',
      '获评中国教育学会杰出贡献奖',
      '主持多个国际教育研究合作项目',
      '获得教育部教学成果特等奖'
    ],
    achievementsEn: [
      'Published 100+ research papers in educational psychology',
      'Awarded key research grants from National Science Foundation',
      'Over 5000 citations',
      'Received Distinguished Contribution Award from Chinese Education Association',
      'Led multiple international education research collaborations',
      'Awarded Presidential Educational Achievement Award'
    ],
    
    publications: [
      {
        title: '《儿童学习科学基础》',
        type: '著作',
        year: 2020,
        titleEn: 'Scientific Foundations of Child Learning'
      },
      {
        title: '个性化教学效果的长期跟踪研究',
        type: '期刊论文',
        year: 2019,
        titleEn: 'Long-term Study on Personalized Teaching Effectiveness',
        journal: 'Journal of Educational Research'
      }
    ],
    
    expertise: [
      '儿童心理学',
      '教学效果评估',
      '课程设计',
      '教育研究方法',
      '学生发展评价'
    ],
    expertiseEn: [
      'Child Psychology',
      'Teaching Effectiveness',
      'Curriculum Design',
      'Education Research Methods',
      'Student Development Assessment'
    ],
    
    
    quote: '理解孩子，就能打开教育的新世界。',
    quoteEn: 'Understanding children opens new worlds in education.',
    
    interests: ['教育研究', '写作', '艺术', '古典音乐'],
    interestsEn: ['Education Research', 'Writing', 'Art', 'Classical Music']
  },
  
  {
    id: 'anderson',
    name: 'Robert Anderson',
    nameEn: 'Dr. Robert Anderson',
    role: '研究顾问',
    roleEn: 'Research Advisor',
    avatar: '/images/team-professor.png',
    shortBio: '人工智能和教育科学研究者',
    shortBioEn: 'Researcher in AI and Educational Science',
    
    bio: 'Dr. Robert Anderson是麻省理工学院的杰出教授，在AI教育应用领域有深入研究。他与麓鸣合作开发的智能教学系统已发表多篇高影响力论文。',
    bioEn: 'Dr. Anderson is a distinguished professor at MIT with deep expertise in AI applications in education. His collaborative research with Lumina on intelligent tutoring systems has resulted in high-impact publications.',
    
    background: {
      education: [
        {
          degree: '博士学位',
          field: '计算机科学',
          university: '麻省理工学院',
          year: 1990,
          degreeEn: 'Ph.D. in Computer Science',
          universityEn: 'MIT'
        }
      ],
      experience: [
        {
          position: '研究顾问',
          company: '麓鸣教育集团',
          duration: '2015 - 现在',
          description: '指导AI教育应用研究',
          positionEn: 'Research Advisor',
          companyEn: 'Lumina Education Group'
        },
        {
          position: '教授',
          company: '麻省理工学院',
          duration: '1992 - 现在',
          description: '从事计算机科学和AI教育研究',
          positionEn: 'Professor',
          companyEn: 'MIT'
        }
      ]
    },
    
    achievements: [
      '在顶级会议发表50+篇论文 (IJCAI, AAAI等)',
      '获得5项美国专利',
      '领导国际AI教育研究中心',
      '培养30+位博士和研究员',
      '获得教育创新突出贡献奖'
    ],
    achievementsEn: [
      'Published 50+ papers at top conferences (IJCAI, AAAI, etc)',
      'Holds 5 US patents',
      'Led international AI in Education research center',
      'Mentored 30+ Ph.D. students and researchers',
      'Awarded for Outstanding Contribution to Education Innovation'
    ],
    
    expertise: [
      '人工智能',
      '机器学习',
      '教育技术',
      '自适应系统',
      '人机交互'
    ],
    expertiseEn: [
      'Artificial Intelligence',
      'Machine Learning',
      'Educational Technology',
      'Adaptive Systems',
      'Human-Computer Interaction'
    ],
    
    
    quote: 'AI的未来在教育。',
    quoteEn: 'The future of AI is in education.',
    
    interests: ['AI研究', '教育创新', '航海', '爵士音乐'],
    interestsEn: ['AI Research', 'Education Innovation', 'Sailing', 'Jazz']
  },
  
  {
    id: 'mitchell',
    name: 'Jennifer Mitchell',
    nameEn: 'Dr. Jennifer Mitchell',
    role: '研究顾问',
    roleEn: 'Research Advisor',
    avatar: '/images/team-female.png',
    shortBio: '教育数据科学和学习分析专家',
    shortBioEn: 'Expert in Educational Data Science and Learning Analytics',
    
    bio: 'Dr. Jennifer Mitchell是哥伦比亚大学教学与学习部的教授，专注于学习分析和数据驱动教育。她为麓鸣平台的数据分析和学生成长追踪系统提供专业指导。',
    bioEn: 'Dr. Mitchell is a professor in the Department of Teaching and Learning at Columbia University specializing in learning analytics and data-driven education. She provides expert guidance on Lumina\'s data analytics and student progress tracking systems.',
    
    background: {
      education: [
        {
          degree: '博士学位',
          field: '教育测量与统计',
          university: '哥伦比亚大学',
          year: 2005,
          degreeEn: 'Ph.D. in Educational Measurement & Statistics',
          universityEn: 'Columbia University'
        }
      ],
      experience: [
        {
          position: '研究顾问',
          company: '麓鸣教育集团',
          duration: '2015 - 现在',
          description: '指导学习分析和数据应用',
          positionEn: 'Research Advisor',
          companyEn: 'Lumina Education Group'
        },
        {
          position: '教授',
          company: '哥伦比亚大学',
          duration: '2005 - 现在',
          description: '教授教育测量和学习分析',
          positionEn: 'Professor',
          companyEn: 'Columbia University'
        }
      ]
    },
    
    achievements: [
      '发表60+篇教育数据科学论文',
      '领导国际学习分析学会',
      '获得NSF职业奖',
      '建立3个教育数据实验室',
      '指导20+位博士研究生'
    ],
    achievementsEn: [
      'Published 60+ papers in educational data science',
      'Leads International Society for Learning Analytics',
      'Awarded NSF CAREER Award',
      'Established 3 educational data labs',
      'Supervised 20+ doctoral students'
    ],
    
    expertise: [
      '学习分析',
      '教育数据科学',
      '统计方法',
      '学生成效评估',
      '大数据应用'
    ],
    expertiseEn: [
      'Learning Analytics',
      'Educational Data Science',
      'Statistical Methods',
      'Student Outcomes Assessment',
      'Big Data Applications'
    ],
    
    
    quote: '数据讲述教育故事。',
    quoteEn: 'Data tells the story of education.',
    
    interests: ['数据科学', '教育创新', '远足', '摄影'],
    interestsEn: ['Data Science', 'Education Innovation', 'Hiking', 'Photography']
  }
]

/**
 * 根据ID获取团队成员
 */
export function getTeamMember(id) {
  return teamMembers.find(member => member.id === id)
}

/**
 * 获取所有团队成员
 */
export function getAllTeamMembers() {
  return teamMembers
}

/**
 * 按类别获取团队成员 (管理层/顾问)
 */
export function getTeamMembersByRole(roleType) {
  const managementRoles = ['sissi', 'benny']
  const advisorRoles = ['qiu', 'anderson', 'mitchell']
  
  if (roleType === 'management') {
    return teamMembers.filter(m => managementRoles.includes(m.id))
  }
  if (roleType === 'advisors') {
    return teamMembers.filter(m => advisorRoles.includes(m.id))
  }
  return teamMembers
}

export default teamMembers
