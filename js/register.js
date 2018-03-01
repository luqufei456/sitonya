$(function () {
    var error_user = false;
    var error_pwd = false;
    var error_group = false;

    $('#user_id').blur(function(){
		check_user();
	})

	//当元素获得焦点时，发生 focus 事件。
	$('#user_id').focus(function(){
		$(this).next().hide();
	})

	// 密码判定
	$('#pwd_id').blur(function(){
		check_pwd();
	})

	$('#pwd_id').focus(function(){
		$(this).next().hide();
	})

	// 重复密码判定
	$('#phone_id').blur(function(){
		check_phone();
	})

	$('#phone_id').focus(function(){
		$(this).next().hide();
	})

	// 邮箱判定
	$('#email_id').blur(function(){
		check_email();
	})

	$('#email_id').focus(function(){
		$(this).next().hide();
	})

    // 小组判定
	$('#group_id').blur(function(){
		check_email();
	})

	$('#group_id').focus(function(){
		$(this).next().hide();
	})

    //验证用户名函数
    function check_user() {
        var val = $('#user_id').val();
        //定义用户名规则 a-z 0-9 一起5-15位
		var re = /^[a-zA-Z0-9]{5,15}$/;
        if(val == ''){
            $('#user_id').next().html('用户名不能为空');
            $('#user_id').next().show();
            error_user = true;
            return;
        }
        if(re.test(val)){
			error_user = false;
		}
		else{
			error_user = true;
			$('#user_id').next().html('用户名可以包含数字字母 5-15位 不限制大小写');
			$('#user_id').next().show();
		}
    }

    //验证密码函数
    function check_pwd(){
		var val = $('#pwd_id').val();
		//定义密码规则 a-z 0-9 还可以有特殊符号 一起6-15位 特殊符号要用\转义
		var re = /^[a-zA-Z0-9@\$\^\.\*\!\?]{6,15}$/;

		if(val == ''){
			$('#pwd_id').next().html('密码不能为空');
			$('#pwd_id').next().show();
			error_pwd = true;
			return;
		}
		if(re.test(val)){
			error_pwd = false;
		}
		else{
			error_pwd = true;
			$('#pwd_id').next().html('密码可以包含数字字母 @$^.*!? 6-15位 不限制大小写');
			$('#pwd_id').next().show();
		}
	}

	//验证小组
    function check_group() {
        var val = $('#group_id').val();
        if(val == '请选择小组'){
            $('#group_id').next().html('请选择正确的小组');
			$('#group_id').next().show();
            error_group = true;
            return;
        }
        else{
            error_group = false;
        }
    }

	//验证手机号
    function check_phone() {
        var val = $('#phone_id').val();
        //定义手机号规则
        var re = /^1[0-9]{10}$/;
        if(val == ''){
            return;
        }
        if(re.test(val)){

        }
        else{
            error_pwd = true;
            $('#phone_id').next().html('请输入正确的手机号码');
            $('#phone_id').next().show();
        }
    }
	
	//验证邮箱
	function check_email(){
		var val = $('#email_id').val();
		//定义密码规则 a-z 0-9 还可以有特殊符号 一起6-15位 特殊符号要用\转义
		var re = /^[a-z0-9A-Z]*@[\w]*(\.[\w]{2,3})$/;

		if(val == ''){
			return;
		}
		if(re.test(val)){

		}
		else{
			error_pwd = true;
			$('#email_id').next().html('请输入正确的邮箱地址');
			$('#email_id').next().show();
		}
	}

	$('#register_put').click(function () {
        check_user();
        check_pwd();
        check_group();
        check_phone();
        check_email();
        alert(error_user);
        alert(error_pwd);
        alert(error_group);
        if(error_user == false && error_pwd == false && error_group == false){
            $.ajax({
                    url: 'http://localhost:8080/api/user/add',
                    type: 'GET',
                    dataType: 'json',
                    data:$('#form2').serialize()
                })
                .done(function() {
                    alert('注册成功');
                })
                .fail(function() {
                    alert('服务器超时，请重试！');
                });
        }
        else{

            return false;
        }
    })

})