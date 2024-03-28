const Mfilter = {
    Kind: 'Movice Kind',
    Timelong: 'Runtime',
    Country: 'Product Country',
    Serial: 'Series'
}

const Gender = {
    Male: 'Mr',
    Female: 'Miss',
}
const Login = {
    Login: 'Login',
    Regist: 'Regist',
    FormAcc: "Login Account",
    FormPwd: "Login Password",
    FormPwd2: "Password again",
    FormVcd: "Ver code",
    FormSmt: "submit",
    FormEmail: "email",
    FormGender: "gender",
    FormLname: "last name",
    FormFname: "first name",
    FormComp: "company",
    FormCompTyp: "business",
    FormJobTitl: "job title",
    FormCountry: "country",
    FormMobile: "mobile",
    FormAcpNews: "Receive news emails to stay informed of the documentary festival and industry trends as soon as possible",
    FormSmt1: "submit then login",
    FormPholer1: "Please enter a login password of not less than 6 digits",
    FormPholer2: "Please enter the password again",
    registSuccess: "sign in and login success",
}

const UcTab = {
    profile: "my profile",
    playlog: "my play log",
    favolog: "my favo",

    btnGorder: "place order",
    btnCounsel: "counsel",
    btnSelAll: "select all",
    btnCancel: "cancel",
    btnConfirm1: "do place order (had choosed ",
    btnConfirm2: " movice)",
}

const Header = {
    home: "HOME",
    about: "ABOUT",
    user: "USER",
    keyword: "input what you want",
    search: "search",
}

const SearchView = {
    result: "Found ",
    result2: " movice",
}

const Movice = {
    director:"DIRECTOR：",
    length: "LENGTH：",
    pdyear: "YEAR：",
    brief: "BRIEF：",
    min: " minute",
    trailer: "trailer",
    feature: "feature",
    chEpisode: "SELECT EPISODE：",
    kind: "KIND：",
    pdcomp: "PRODUCE COMPANY：",
    pddate: "PRODUCE TIME：",
    prize: "PRIZE WON：",
}

const Buttons = {
    del:"delete",
    close: "close",
    cancel: "cancel",
    OK: "OK",
}

const Tips = {
    favoSucces01: 'Successfully collected, you can generate movie orders in your personal center ',
    favoSucces02: ' and leave a purchase consultation message.',
    counselSuccess: "We have received your inquiry，our staff member will contact you soon.",
    orderSuccess: "The purchase order has been successfully generated, our staff member will contact you soon.",
    counselinput: "Please enter your inquiry content",    
    inputAccPwd: "Please enter your account / password",
    inputVvcode: "Please enter the correct verification code",
    loginSuccess: "Sign up success ~",
    pwdtosimple: "password too simple ,please enter more than 6 charater.",
    pwdnothesame: "The two passwords do not match. Please confirm and re-enter",
    invalidEmail: "Invalid email, please re-enter ",
    inputName: "please enter your name. ",
    inputCompany: "please enter your company's name",
    inputCompType: "please choose your company's business",
    inputMobile: "please enter your mobile phone number",
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
