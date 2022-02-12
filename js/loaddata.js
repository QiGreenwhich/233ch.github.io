function loaddata() {
    var url = "data/data.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    var request = new XMLHttpRequest();
    request.open("get", url);/*设置请求方法与路径*/
    request.send(null);/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
            var data = JSON.parse(request.responseText);
            for (var i = 0; i < data.length; i++) {
                document.getElementById("content1").innerHTML += "<div id='content'><div id='divname'><div>" + (i + 1) + "#</div>" + data[i].name + "<div class='divcontent'>" + data[i].content + "</div></div></div>";
            }
            show();
        }
    }
}    
var text = new Array();
var newBox = new Array();
var btn = new Array();
function show() {
    var box = document.getElementsByClassName("divcontent");
    for (var j = 0; j < box.length; j++) {
        text.push(box[j].innerHTML);
        newBox.push(document.createElement("div"));
        newBox[j].setAttribute("class","newBox"+(j+1));
        btn.push(document.createElement("a"));
        btn[j].setAttribute("class", "btn"+(j+1));
        btn[j].setAttribute("number", j);
        newBox[j].innerHTML = text[j].substring(0, 66);
        btn[j].innerHTML = text[j].length > 66 ? "显示全部 ▼" : "";
        btn[j].href = "javascript:void(0)";
        btn[j].onclick = function () {
            if (this.innerText == "显示全部 ▼") {
                this.innerText = "收起 ▲";
                var str=text[this.getAttribute("number")];
                newBox[this.getAttribute("number")].innerHTML = str;
            }
            else {
                this.innerText = "显示全部 ▼";
                var str=text[this.getAttribute("number")];
                newBox[this.getAttribute("number")].innerHTML = str.substring(0, 66);
            }
        }
        box[j].innerHTML = "";
        box[j].appendChild(newBox[j]);
        box[j].appendChild(btn[j]);
    }
}

