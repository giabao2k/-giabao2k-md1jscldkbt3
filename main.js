var tdn = prompt('Tên Đăng Nhập:');
if(tdn == 'admin'){
    var mk = prompt('Mật khẩu:');
    if(mk == 'master'){
        document.write('Welcome');
    } 
    else if(mk == ''){
        document.write('Canceled');
    }else{
        document.write('Wrong password');
    }
}
else if(tdn == ''){
    document.write('canceld');
}
else{
    document.write('I dont know you');
}