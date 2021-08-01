let demo = document.querySelector("#html")
let style = document.querySelector("#style")
let string2=''
let n = 0
let string = `
/*你好，我是一名前端新人
接下来添加样式*/
body{
    color:red;
}
#div1{
border:1px  solid red;
width:200px;
height:200px;
}
/* 接下来我把div变成一个八卦图
注意看好了
首先，把div变成一个圆*/

#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
一黑一白
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);

}
/*接下来加两个小圆*/
#div1::before{
    width:100px;
    height:100px;
    //border:1px solid red;
    top:0px;
    left:25%;
    border-radius:50%;
    background:#000;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%); 
}
#div1::after{
    width:100px;
    height:100px;
    //border:1px solid red;
    bottom:0px;
    left:25%;
    border-radius:50%;
    background:#fff;
    background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%); 
}

`
let step = ()=>
{
    setTimeout(()=>{
        
        if(string[n] === '\n'){
            string2 += '<br>'}
            else if(string[n] === ' '){
                string2 += '&nbsp;'
            }
            else{
        string2 += string[n]}
        demo.innerHTML = string2 
        style.innerHTML=string.substring(0,n)
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(n < string.length-1)
        {step()   
        n+=1}
    },10);
}
step()

