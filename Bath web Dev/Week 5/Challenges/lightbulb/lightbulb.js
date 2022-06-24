function light(value)
{
    var pic;
    if(value == 0)
    {
    pic="off.png";
    }
    else
    {
        pic="on.png"
}
    document.getElementById('bulb').src=pic;
}