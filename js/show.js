function show()
{
  var box = document.getElementById("divcontent");
  var text = box.innerHTML;
  var newBox = document.createElement("div");
  var btn = document.createElement("a");
  btn.setAttribute("class","btn");
  newBox.innerHTML = text.substring(0,66);
  btn.innerHTML = text.length > 66 ? "显示全部 ▼" : "";
  btn.href = "javascript:void(0)";
  btn.onclick = function(){
    if(btn.innerHTML == "显示全部 ▼")
    {
      btn.innerHTML = "收起 ▲";
      newBox.innerHTML = text;
    }
    else
    {
      btn.innerHTML = "显示全部 ▼";
      newBox.innerHTML = text.substring(0,66);
    }
  }
  box.innerHTML = "";
  box.appendChild(newBox);
  box.appendChild(btn);
}