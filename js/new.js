$(function () {

    $('#choose_id').change(function () {
        var choose = $('#choose_id').val();
        if(choose == '申请库权限'){
            $('#table_id').hide();
        }
        else{
            $('#table_id').show();
        }
    });

    var error_group_name = false;
    var error_group_abb = false;
    var error_person_name = false;
    var error_base_name = false;

    //验证组名字是否为空
    function check_group_name() {
        var val = $('#group_id').val();
        if(val == ''){
            error_group_name = true;
            return;
        }
    }

    //验证组缩写是否为空
    function check_group_abb() {
        var val = $('#abb_id').val();
        if(val == ''){
            error_group_abb = true;
            return;
        }
    }

    //验证负责人是否为空
    function check_person_name() {
        var val = $('#name_id').val();
        if(val == ''){
            error_person_name = true;
            return;
        }
    }

    //验证库名字是否为空
    function check_base_name() {
        var val = $('#base_id').val();
        if(val == ''){
            error_base_name = true;
            return;
        }
    }


    $('form').submit(function(){
        check_group_name();
        check_group_abb();
        check_person_name();
        check_base_name();
        if(error_group_name == false && error_group_abb == false && error_person_name == false && error_base_name == false){
            alert('申请成功');
        }
        else{
            alert('请输入正确的申请');
            //刷新页面
            window.location.reload();
            return false;
        }
    })
})
