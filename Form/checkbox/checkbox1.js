

document.getElementById("btn1").onclick = function () {
    document.getElementById("checkbox1").checked = true;
};

document.getElementById("btn2").onclick = function () {
    document.getElementById("checkbox1").checked = true;
    alert("Vẫn là có nhưng mà nó ở nút không")
};
