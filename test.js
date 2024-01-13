
// server-address
const address = "http://dev.finpin.cn"
// api url
const Api = {
    getUserInfo: `${address}/finance/front/user/regiestUserForOfficial`
};

$(function () {

    function getUrlParam(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        let url = window.location.href.split('#')[0]
        let search = url.split('?')[1]
        if (search) {
            var r = search.substr(0).match(reg)
            if (r !== null)
                return unescape(r[2])
            return null
        } else
            return null
    }


    // 获取code
    const code = getUrlParam('code')  // 截取路径中的code
    const token = getUrlParam('token') // 截取token
    if (code == null || code === '') {
        const local = window.location.href
        console.log(local)
        const appid = 'wx4e5ffc96380fdc6f'
        // 测试号
        //const appid = 'wxc9db2ce9f68a9dea'    
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect';

    } else {
        // 获取用户信息
        $.post(Api.getUserInfo, { code: code, token: token }, function (result) {

            // 结果赋值
            if (result.status == 1) {
                const { data } = result
                $('#userName').html(data.uName)
                openId = data.attr1
                console.log(result)
            } else {
                weui.alert('服务器连接失败！');
            }
        });

    }
})
