$(function () {
    var error_why = false;
    var error_use = false;

    //验证需求原因是否为空
    function check_why() {
        var val = $('#text_put').val();
        if (val == '') {
            error_why = true;
            return;
        }
    }

    //验证机器用途是否选择
    function check_use() {
        var val = $('#use_box').val();
        if (val == '选择机器用途') {
            error_use = true;
        }
    }


    $('form').submit(function () {
        check_why();
        check_use();
        if (error_why == false && error_use == false) {
            alert('申请成功');
        }
        else {
            alert('请输入正确的申请');
            window.location.reload();
            return false;
        }
    })
})