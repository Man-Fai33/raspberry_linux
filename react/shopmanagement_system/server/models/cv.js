const mongoose = require('mongoose');

// 定义链接对象的子模型
const LinkSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

// 定义教育经历的子模型
const EducationSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    }
});

// 定义项目的子模型
const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    photo: {
        type: [String], // 存储多张照片的 URL，以数组形式
        default: []
    },
    link: {
        type: String,
        default: "",
        required: true
    }
});

// 定义技能的子模型
const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    num: {
        type: Number,
        required: true
    }
});

// 定义主模型 CVSchema
const CVSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    englishname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    professional: {
        type: String,
        required: true
    },
    link: {
        type: [LinkSchema],
        default: []
    },
    phone: {
        type: String,
        required: true
    },
    futureplan: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    education: {
        type: [EducationSchema],
        default: []
    },
    work: {
        type: [{
            company: String,
            position: String,
            duration: String
        }],
        required: true
    },
    workexperienced: {
        type: String,
        required: true
    },
    technology: {
        frontend: {
            type: [SkillSchema], // 嵌套的技能子模型数组
            default: []
        },
        backend: {
            type: [SkillSchema],
            default: []
        },
        language: {
            type: [SkillSchema],
            default: []
        },
        database: {
            type: [SkillSchema],
            default: []
        },
        other: {
            type: [SkillSchema],
            default: []
        }
    },
    project: {
        type: [ProjectSchema],
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    },
    iconUrl: {
        type: String,
        required: true
    }
});

// 创建模型并导出
const CV = mongoose.model('CV', CVSchema);
module.exports = CV;
