// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    
    // 登录表单处理
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // 阻止表单提交刷新页面
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // 简单的前端验证
            if (!username || !password) {
                alert('请输入用户名和密码');
                return;
            }
            
            // 模拟登录成功（后期替换为后端接口）
            console.log('登录信息：', { username, password, rememberMe });
            alert('登录成功！欢迎 ' + username);
            
            // 后期这里会改成调用后端接口
            // 暂时重定向到首页（如果有）
            // window.location.href = 'index.html';
        });
    }
    
    // 注册表单处理
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        // 实时验证
        const regUsername = document.getElementById('regUsername');
        const regEmail = document.getElementById('regEmail');
        const regPassword = document.getElementById('regPassword');
        const confirmPassword = document.getElementById('confirmPassword');
        
        if (regUsername) {
            regUsername.addEventListener('blur', validateUsername);
            regUsername.addEventListener('input', function() {
                document.getElementById('usernameError').textContent = '';
            });
        }
        
        if (regEmail) {
            regEmail.addEventListener('blur', validateEmail);
            regEmail.addEventListener('input', function() {
                document.getElementById('emailError').textContent = '';
            });
        }
        
        if (regPassword) {
            regPassword.addEventListener('blur', validatePassword);
            regPassword.addEventListener('input', function() {
                document.getElementById('passwordError').textContent = '';
                if (confirmPassword && confirmPassword.value) {
                    validateConfirmPassword();
                }
            });
        }
        
        if (confirmPassword) {
            confirmPassword.addEventListener('blur', validateConfirmPassword);
            confirmPassword.addEventListener('input', function() {
                document.getElementById('confirmError').textContent = '';
            });
        }
        
        // 表单提交
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 执行所有验证
            const isUsernameValid = validateUsername();
            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();
            const isConfirmValid = validateConfirmPassword();
            const isTermsChecked = document.getElementById('agreeTerms').checked;
            
            if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmValid && isTermsChecked) {
                // 获取表单数据
                const userData = {
                    username: regUsername.value,
                    email: regEmail.value,
                    password: regPassword.value
                };
                
                console.log('注册信息：', userData);
                alert('注册成功！请登录');
                
                // 后期替换为后端接口调用
                // 注册成功后跳转到登录页
                window.location.href = 'login.html';
            } else if (!isTermsChecked) {
                alert('请阅读并同意用户协议');
            }
        });
    }
    
    // 验证函数
    function validateUsername() {
        const username = document.getElementById('regUsername').value;
        const errorSpan = document.getElementById('usernameError');
        
        if (username.length < 4 || username.length > 20) {
            errorSpan.textContent = '用户名长度应在4-20个字符之间';
            return false;
        }
        
        if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(username)) {
            errorSpan.textContent = '用户名只能包含字母、数字、下划线或中文';
            return false;
        }
        
        errorSpan.textContent = '';
        return true;
    }
    
    function validateEmail() {
        const email = document.getElementById('regEmail').value;
        const errorSpan = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            errorSpan.textContent = '请输入有效的邮箱地址';
            return false;
        }
        
        errorSpan.textContent = '';
        return true;
    }
    
    function validatePassword() {
        const password = document.getElementById('regPassword').value;
        const errorSpan = document.getElementById('passwordError');
        
        if (password.length < 6 || password.length > 20) {
            errorSpan.textContent = '密码长度应在6-20个字符之间';
            return false;
        }
        
        errorSpan.textContent = '';
        return true;
    }
    
    function validateConfirmPassword() {
        const password = document.getElementById('regPassword').value;
        const confirm = document.getElementById('confirmPassword').value;
        const errorSpan = document.getElementById('confirmError');
        
        if (password !== confirm) {
            errorSpan.textContent = '两次输入的密码不一致';
            return false;
        }
        
        if (confirm === '') {
            errorSpan.textContent = '请确认密码';
            return false;
        }
        
        errorSpan.textContent = '';
        return true;
    }
});

function openSchoolWebsite() {
    
    const schoolUrl = 'https://www.lut.edu.cn/';
    
    // 在新标签页中打开学校官网
    window.open(schoolUrl, '_blank');
}