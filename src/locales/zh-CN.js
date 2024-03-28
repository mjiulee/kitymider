const Mfilter = {
    Kind: '影片类型',
    Timelong: '影片时长',
    Country: '影片地区',
    Serial: '系列片'
}

const Gender = {
    Male: '先生',
    Female: '女士',
}

const Login = {
    Login: '登录',
    Regist: '注册',
    FormAcc: "登录账号",
    FormPwd: "登录密码",
    FormPwd2: "确认密码",
    FormVcd: "验证码",
    FormSmt: "提交登录",
    FormEmail: "安全邮箱",
    FormGender: "称呼",
    FormLname: "姓氏",
    FormFname: "名字",
    FormComp: "公司单位",
    FormCompTyp: "公司/机构类型",
    FormJobTitl: "职位",
    FormCountry: "国家",
    FormMobile: "手机号",
    FormAcpNews: "接受新闻邮件第一时间了解纪录片节的资讯及行业动态",
    FormSmt1: "提交并登录",
    FormPholer1: "请输入不少与6位的登录密码",
    FormPholer2: "请再次输入密码",
    ForgetPwd: "找回密码",
    Regist: "注册账号",
    Feedback: "意见反馈",
}

const UcTab = {
    profile: "个人信息",
    playlog: "播放记录",
    favolog: "收藏记录",
    btnGorder: "生成订单",
    btnCounsel: "采购咨询",
    btnSelAll: "全选",
    btnCancel: "取消",
    btnConfirm1: "确认生成订单(已选",
    btnConfirm2: "个)",
}

const Header = {
    home: "首页",
    about: "关于我们",
    user: "个人中心",
    keyword: "请输关键字",
    search: "搜索",
}

const SearchView = {
    result: "搜索结果：",
    result2: "条",
}


const Movice = {
    director:"导演：",
    length: "时长：",
    pdyear: "年份：",
    brief: "简介：",
    min: "分钟",
    trailer: "预告片",
    feature: "正片",
    chEpisode: "选集",
    kind: "类别:",
    pdcomp: "制片商:",
    pddate: "制片时间:",
    prize: "获奖记录",
}

const Buttons = {
    del:"删除",
    close: "关闭",
    cancel: "取消",
    OK: "确定",
}

const Tips = {
    favoSucces01: '收藏成功，您可以到个人中心生成影片订单，',
    favoSucces02: '并进行采购咨询留言。',
    counselSuccess: "您的咨询问题我们已收到，将有工作人员与您联系。",
    orderSuccess: "已成功生成采购订单，将有工作人员与您联系。",
    counselinput: "请输入您的咨询内容",
    inputAccPwd: "请输入账号密码",
    inputVvcode: "请输入正确的验证码",
    loginSuccess: "登录成功~",
    pwdtosimple: "密码太短，请输入大于6位的密码",
    pwdnothesame: "两次密码不一致，请确认后再重新输入",
    invalidEmail: "请输入正确邮箱",
    inputName: "请输入您姓氏/名称",
    inputCompany: "请输入你公司名称",
    inputCompType: "请选择你公司类型",
    inputMobile: "请输入您的电话号码",
    registSuccess: "注册登录成功",
}
// 按功能模块导出
export default {
    Mfilter,
    Gender,
    Login,
    UcTab,
    Header,
    SearchView,
    Movice,
    Buttons,
    Tips
}
