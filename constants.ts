import { ContentStrings, Language } from './types';
import { Palette, Zap, DollarSign, Home, Paintbrush, Hammer, Building2 } from 'lucide-react';

export const CONTENT: Record<Language, ContentStrings> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About Us",
      contact: "Contact",
      callUs: "Call us: +64 21 889 512",
      getQuote: "Get a Free Quote"
    },
    hero: {
      title: "Premium Painting & Interior Services in Auckland",
      subtitle: "We bring your vision to life. Residential & Commercial. On time, on budget.",
      cta: "Request a Free Quote"
    },
    features: {
      qualityTitle: "High Quality Finish",
      qualityDesc: "We use premium paints (Resene/Dulux) for lasting results.",
      speedTitle: "Efficient & Clean",
      speedDesc: "We respect your property and clean up after ourselves.",
      priceTitle: "Competitive Pricing",
      priceDesc: "No hidden costs. Detailed quotes provided."
    },
    services: {
      title: "Our Services",
      interior: "Interior Painting (Walls, Ceilings, Trims)",
      exterior: "Exterior Painting (Weatherboards, Roofs)",
      plastering: "Plastering & Gib Stopping",
      commercial: "Commercial Painting (Offices, Shops)"
    },
    portfolio: {
      title: "Our Recent Projects",
      project1: "Modern Living Room Renovation - Remuera",
      project2: "Full Exterior Repaint - North Shore",
      project3: "Commercial Office Refit - Auckland CBD"
    },
    about: {
      title: "About Us",
      desc: "With over 10 years of experience in the Auckland region, B&T Property Specialist is dedicated to delivering top-tier craftsmanship. We are fully insured and committed to safety and quality.",
      cert1: "Fully Insured",
      cert2: "Site Safe Certified"
    },
    contact: {
      title: "Get a Free Quote",
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Tell us about your project",
      submit: "Send Request",
      success: "Thank you! We will contact you shortly."
    },
    footer: {
      areas: "Service Areas: North Shore, Central Auckland, East Auckland, West Auckland.",
      rights: "© 2024 B&T PROPERTY SPECIALIST. All rights reserved.",
      address: "Auckland, New Zealand"
    },
    chat: {
      welcome: "Hi there! Looking for a painting quote in Auckland? Leave your details or ask us a question!",
      faq1: "What are your service areas?",
      faq2: "Do you offer free quotes?",
      placeholder: "Type a message..."
    }
  },
  cn: {
    nav: {
      home: "首页",
      services: "服务",
      portfolio: "案例",
      about: "关于我们",
      contact: "联系",
      callUs: "致电: +64 21 889 512",
      getQuote: "免费报价"
    },
    hero: {
      title: "奥克兰专业油漆与内装服务，品质保证",
      subtitle: "无论是住宅翻新还是商业装修，我们要的就是让您满意。按时完工，价格透明。",
      cta: "立即获取免费报价"
    },
    features: {
      qualityTitle: "顶级工艺",
      qualityDesc: "坚持使用Resene/Dulux等优质涂料，确保持久耐用。",
      speedTitle: "高效整洁",
      speedDesc: "我们尊重您的物业，完工后彻底清洁，绝不留乱摊子。",
      priceTitle: "价格公道",
      priceDesc: "无隐藏费用，提供详细清晰的报价单。"
    },
    services: {
      title: "服务概览",
      interior: "室内油漆 (墙面, 天花板, 门窗)",
      exterior: "室外油漆 (外墙板, 屋顶, 围栏)",
      plastering: "批灰与补洞 (Gib Stopping)",
      commercial: "商业粉刷 (办公室, 店铺装修)"
    },
    portfolio: {
      title: "近期完工案例",
      project1: "现代客厅翻新 - Remuera",
      project2: "全屋室外重漆 - North Shore",
      project3: "商业办公室翻新 - Auckland CBD"
    },
    about: {
      title: "关于我们",
      desc: "B&T Property Specialist 拥有超过10年的奥克兰本地经验，致力于提供顶级的施工工艺。我们拥有全额保险，并持有 Site Safe 安全认证。",
      cert1: "全额商业保险",
      cert2: "Site Safe 安全认证"
    },
    contact: {
      title: "立即获取免费报价",
      name: "您的姓名",
      email: "电子邮箱",
      phone: "联系电话",
      message: "请描述您的工程需求",
      submit: "发送询价",
      success: "谢谢！我们会尽快联系您。"
    },
    footer: {
      areas: "服务范围: 北岸, 中区, 东区, 西区",
      rights: "© 2024 B&T PROPERTY SPECIALIST. 版权所有.",
      address: "新西兰 奥克兰"
    },
    chat: {
      welcome: "您好！需要奥克兰油漆报价吗？请留言或留下联系方式，我们会尽快回复您！",
      faq1: "你们的服务范围是？",
      faq2: "可以免费上门报价吗？",
      placeholder: "输入消息..."
    }
  }
};

export const FEATURES_ICONS = [
  { icon: Palette, key: 'quality' },
  { icon: Zap, key: 'speed' },
  { icon: DollarSign, key: 'price' }
];

export const SERVICES_ICONS = [
  { icon: Home, key: 'interior' },
  { icon: Paintbrush, key: 'exterior' },
  { icon: Hammer, key: 'plastering' },
  { icon: Building2, key: 'commercial' }
];