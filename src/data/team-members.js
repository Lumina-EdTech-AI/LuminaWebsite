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
          degree: 'JD',
          field: '法律',
          university: '伦敦政治经济学院 (LSE)',
          year: 2016,
          degreeEn: 'Juris Doctor',
          universityEn: 'London School of Economics (LSE)',
          certified: true
        },
        {
          degree: '双学位',
          field: '教育管理 & 国际商务',
          university: '华东师范大学 / Kings College London',
          year: 2016,
          degreeEn: 'Dual Degree',
          universityEn: 'East China Normal University / Kings College London'
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
    // 著作和发表
    // 个人特长
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
          degree: '硕士学位',
          field: '计算机科学',
          university: '乔治亚理工学院 (Georgia Tech)',
          year: 2014,
          degreeEn: 'M.S. in Computer Science',
          universityEn: 'Georgia Institute of Technology'
        },
        {
          degree: '学士学位',
          field: '软件工程 & 商业副科',
          university: '多伦多大学',
          year: 2016,
          degreeEn: 'B.S. in Software Engineering (Minor: Business)',
          universityEn: 'University of Toronto'
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
    }
  },
  {
    id: 'david',
    name: 'David Fang',
    nameEn: 'David Fang',
    role: '联合创始人 & 技术教育指导',
    roleEn: 'Co-Founder & Technology & Education Advisor',
    avatar: '/images/team-david.png',
    shortBio: '多伦多大学商科学士，斯坦福大学AI人机交互研究员',
    shortBioEn: 'B.B.A. from University of Toronto, AI HCI Researcher at Stanford',
    bio: 'David Fang是麓鸣教育的联合创始人，目前在斯坦福大学从事人工智能与人机交互的前沿研究。他同时为麓鸣提供技术创新和教育策略的专业指导，推动教育技术的融合发展。',
    bioEn: 'David Fang is Co-Founder of Lumina Education and currently conducting cutting-edge research on AI and Human-Computer Interaction at Stanford University. He provides professional guidance on technology innovation and education strategy for Lumina.',
    background: {
      education: [
        {
          degree: '研究员',
          field: '人工智能与人机交互',
          university: '斯坦福大学',
          year: 2023,
          degreeEn: 'Research Fellow',
          universityEn: 'Stanford University (Current)',
          current: true
        },
        {
          degree: '学士学位',
          field: '商业管理',
          university: '多伦多大学',
          year: 2012,
          degreeEn: 'B.B.A. in Business Administration',
          universityEn: 'University of Toronto'
        }
      ],
      experience: [
        {
          position: '联合创始人 & 技术教育指导',
          company: '麓鸣教育集团',
          duration: '2015 - 现在',
          description: '提供技术创新和教育策略指导，推动AI在教育中的应用',
          positionEn: 'Co-Founder & Technology & Education Advisor',
          companyEn: 'Lumina Education Group'
        },
        {
          position: '研究员',
          company: '斯坦福大学人机交互实验室',
          duration: '2023 - 现在',
          description: '研究AI和人机交互在教育中的应用',
          positionEn: 'Research Fellow',
          companyEn: 'Stanford University HCI Lab'
        },
        {
          position: '技术顾问',
          company: '多家教育科技初创',
          duration: '2016 - 2023',
          description: '为教育科技企业提供技术和战略咨询',
          positionEn: 'Technical Advisor',
          companyEn: 'EdTech Startups'
        }
      ]
    }
  },
  {
    id: 'qiu',
    name: '裘玲霞',
    nameEn: 'Dr. Lynn Qiu',
    role: '医学顾问',
    roleEn: 'Medical Advisor',
    avatar: '/images/team-qiu.jpg',
    shortBio: '医学教授，心血管医学专家',
    shortBioEn: 'Medical Professor, Cardiovascular Medicine Specialist',
    bio: '裘玲霞博士是著名医学教授和心血管医学专家。曾担任上海第六人民医院心血管科科长和副院长，在医学教育和临床研究领域有深厚的成就和国际影响力。',
    bioEn: 'Dr. Lynn Qiu is a renowned medical professor and cardiovascular medicine specialist. She served as Director of Cardiology Department and Vice-President at Shanghai Sixth People\'s Hospital, with significant achievements in medical education and clinical research.',
    background: {
      education: [
        {
          degree: '博士学位',
          field: '心血管医学',
          university: '复旦大学医学院',
          year: 2008,
          degreeEn: 'Ph.D. in Cardiovascular Medicine',
          universityEn: 'Fudan University School of Medicine'
        },
        {
          degree: '硕士学位',
          field: '内科医学',
          university: '上海交通大学医学院',
          year: 2003,
          degreeEn: 'M.D. in Internal Medicine',
          universityEn: 'Shanghai Jiao Tong University School of Medicine'
        }
      ],
      experience: [
        {
          position: '医学顾问',
          company: '麓鸣教育集团',
          duration: '2020 - 现在',
          description: '指导教育与健康科学相关项目',
          positionEn: 'Medical Advisor',
          companyEn: 'Lumina Education Group'
        },
        {
          position: '副院长 & 心血管科科长',
          company: '上海第六人民医院',
          duration: '2010 - 2020',
          description: '管理心血管科室，领导临床和研究工作',
          positionEn: 'Vice-President & Director of Cardiology',
          companyEn: 'Shanghai Sixth People\'s Hospital'
        },
        {
          position: '医学教授',
          company: '复旦大学医学院',
          duration: '2008 - 现在',
          description: '教授心血管医学和临床实践',
          positionEn: 'Medical Professor',
          companyEn: 'Fudan University School of Medicine'
        }
      ]
    }
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
    }
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
    }
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
