$(function () {

    var error_user = false;
    var error_pwd = false;

    //验证用户名是否为空
    function login_user() {
        var val = $('#user_id').val();
        if(val == ''){
            $('.user_error').html('用户名不可为空');
            $('.user_error').show();
            error_user = true;
            return false;
        }
        else{
            $('.user_error').hide();
        }
    }

    //验证密码是否为空
    function login_pwd() {
        var val = $('#pwd_id').val();
        if(val == ''){
            $('.pwd_error').html('密码不可为空');
            $('.pwd_error').show();
            error_pwd = true;
            return false;
        }
        else{
            $('.pwd_error').hide();
        }
    }

    $('#login_put').click(function () {
        login_user();
        login_pwd();
        if(error_user == false && error_pwd == false){
            $.ajax({
                    url: 'http://localhost:8080/api/user/add',
                    type: 'GET',
                    dataType: 'json',
                    data:$('#form3').serialize()
                })
                .done(function(data) {

                    alert('登录成功 ' + data);
                })
                .fail(function() {
                    alert('服务器超时，请重试！');
                });
        }
        else{
            alert('登录失败');
            return false;
        }

    })
})