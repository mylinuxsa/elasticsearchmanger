import Axios from "axios";


var sso_check_token_url = 'http://sso.hellobike.cn/service/checkToken';


const check_token = (token =null) =>{
    const data = {
        token : token ? token : this.$route.query.token,
        userAgent: navigator.userAgent
    }
    this.$post(sso_check_token_url, data).then((response) =>{
        return response;
    }
    );

}

const logout = (token = null ) =>{
    window.open('http://sso.hellobike.cn/?redirect_url=${window.location.href}', name="_self")
}

const login = (token = null) =>{
    window.open('http://sso.hellobike.cn/?redirect_url=${window.location.href}', name="_self")
}

export default {
    check_token,
    login,
    logout
}