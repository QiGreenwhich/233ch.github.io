function setname(){
    var name = window.prompt("请输入你的昵称","");
    if (name==""){
        name = "无名氏";
    }
    document.getElementById("welcome").innerHTML = "欢迎你，<span>"+name+"</span>";
}