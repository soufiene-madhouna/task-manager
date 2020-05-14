const PROXY_CONFIG = [{
    context:[
        "/java"
    ],
    target:"http://127.0.0.1:8080",
    secure:false,
    pathRewrite:{
        "^java":"http://127.0.0.1:8080"
    },
    logLevel:"debug",
    
}]
module.exports = PROXY_CONFIG;

