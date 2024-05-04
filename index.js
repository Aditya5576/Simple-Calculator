let ip = document.querySelector("input");
function oprat()
{
    let data = document.querySelector(".btn");

}

function clr()
{
    ip.value = '';
}

function oprat(a)
{
    let ipvalue = ip.value;
    ip.value = ipvalue+a;
}

function equal()
{
    let ipvalue = ip.value;
    ip.value = eval (ipvalue);
}