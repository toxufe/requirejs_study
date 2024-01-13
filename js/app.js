// main.js
// require.config 用于配置 RequireJS，设置模块的基本路径、别名、shim 配置等。
require.config({
    baseUrl: 'js', // 设置基本路径
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery.min', // 设置模块路径
        'axios': '../node_modules/axios/dist/axios.min',
        'lodash': '../node_modules/lodash/lodash.min',
        'weui': '../node_modules/weui.js/dist/weui.min',
        'css': '../node_modules/require-css/css.min',
        'app': './app'
    },
    // config中paths用来配置支持AMD规范的库和js文件，shim是用来配不支持AMD规范的js。
    shim: {
        'lodash': {
            exports: '_'
        },
        'weui': ['css!../node_modules/weui/dist/style/weui.min.css'],
    }
});



// 启动应用
require(['jquery', 'app', 'lodash', 'weui','axios'], function ($, app, _, weui,axios) {
    // 在这里初始化您的应用程序
    // 获取code
    const code = app.getUrlParam('code')  // 截取路径中的code
    const state = app.getUrlParam('state') // 截取token
    if (code == null || code === '') {
        const local = window.location.href;
        console.log(local)
        const appid = 'wx5a43a9faa4fad210'
        // 测试号
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect';


    }else{
        // 获取用户信息
        // $.post("https://m.jdzmyy.cn/api/wechat/test", { code: code, token: token }, function (result) {

        //     // 结果赋值
        //     if (result.status == 1) {
        //         const { data } = result
        //         $('#userName').html(data.uName)
        //         openId = data.attr1
        //         console.log(result)
        //     } else {
        //         weui.alert('服务器连接失败！');
        //     }
        // });
        
        console.log("code",code);

        axios.post("https://XXXX/api/wechat/test?code="+code+"&state="+state, { code: code, state: state }).then(res => {
            console.log("``````````````",res);
          
        })
    }


    // app.index();
    // app.other();
    // app.canvas();

    // weui.alert('alert')
    // var loading = weui.loading('loading', {
    //     className: 'custom-classname'
    // });
    // setTimeout(function () {
    //     loading.hide(function() {
    //          console.log('`loading` has been hidden');
    //      });
    // }, 3000);


    // https://www.kancloud.cn/ywfwj2008/weuijs/274300
    // weui.dialog({
    //     title: 'dialog标题',
    //     content: 'dialog内容',
    //     className: 'custom-classname',
    //     buttons: [{
    //         label: '取消',
    //         type: 'default',
    //         onClick: function () { alert('取消') }
    //     }, {
    //         label: '确定',
    //         type: 'primary',
    //         onClick: function () { alert('确定') }
    //     }]
    // });

    // // 获取当前页面的 URL
    // const currentUrl = window.location.href;
    // // 创建 URLSearchParams 对象
    // const urlParams = new URLSearchParams(currentUrl);
    // // 获取单个参数的值
    // const name = urlParams.get('name');
    // console.log(name);


});


// require.config 用于配置 RequireJS 全局设置。
// require 用于动态加载模块。
// define 用于定义模块的依赖和实际执行的代码。

// define - 模块定义：
// define 是用于定义模块的函数。
// 当您编写一个模块时，您使用 define 来声明模块的依赖关系和实际执行的代码。这样，其他地方通过 require 就能够加载和使用这个模块


$code = $this->request->post('code');
$state = $this->request->post('state');


$config = [
    'app_id' => 'wx5a43a9faa4fad210',
    'secret' => 'f33dd33283ec64757216dfd8eae0bddb',
    // 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名
    'response_type' => 'array',
];

// $app = Factory::officialAccount($config);
// if (empty($code)) {
//     // // 构造微信授权链接
//     // $state = md5(uniqid(rand(), true));
//     // Session::set('state', $state);


//     // $redirect_uri = urlencode($this->request->param('url')); // 授权后重定向的回调链接地址
//     // $scope = 'snsapi_userinfo'; // 授权作用域，此处固定为 snsapi_userinfo
//     // $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={$appid}&redirect_uri={$redirect_uri}&response_type=code&scope=snsapi_userinfo&state={$state}#wechat_redirect";

// EASYWECHAT 4.0  $app->oauth->user() 默认获取的get code
//     // // 跳转到微信授权页面
//     // $this->success('ok',  $url);
// } else {
//     //通过code换access_token和绑定会员
    
// //   $user = $app->oauth->userFromCode($code);
// $_GET['code'] = $code;
// $_GET['state'] = $state;
// $user =  $app->oauth->user();
    
//     $this->success(__('ok'), $user);
// }