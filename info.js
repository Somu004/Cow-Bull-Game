
var p,k,q,t=1,number,i,a;
function start()
{
    p=document.getElementById("name").value;
    k="Hello "+p+",Guess the number!!!";
    document.getElementById("output").textContent=k;  
    if(p.length>0)
  {
    document.getElementById("num").disabled = false;
    document.getElementById("num").focus();
  }
   
}


function generate()
{
    return Math.floor(Math.random() * (999 - 101 + 1) + 101);
}


while(t==1)
{
    number=String(generate())
 
if(number[0]==number[1] || number[1]==number[2] || number[2]==number[0])
{
     t=1
}
else
{
     
    t=0
}

 
}

var chances=0
function check()
{
    chances+=1
    
    var bull=0,cow=0
    
  q=document.getElementById("num").value
  
 
    q=String(q)
    for(i=0;i<q.length;i++)
    {
        if(q[i]==number[i])
        {
            
            bull=bull+1
        }
        else if(number.includes(q[i]))
        {
        
            cow=cow+1
        }
        result()
        

    }
    

    function result()
    {
        if(chances>8)
    {
        k="YOUR CHANCES COMPLETED,BETTER LUCK NEXT TIME!!!"
        document.getElementById("submit").disabled=true
        document.getElementById("in").textContent=k
         a="Your number :"+number;
        document.getElementById("correct").textContent=a 
    }
    else
    {

    if(bull==3)
    {
        k="You have won the game,Keep it up!"
        document.getElementById("answer").textContent=k
        
    }
    else
    {
        k="bulls: "+bull+"  cows: "+cow
        document.getElementById("answer").textContent=k

    }}
    
}}
var openFileLink = document.getElementById("openFileLink");

openFileLink.addEventListener("click", function(event) {
  event.preventDefault();
  var fileUrl = this.getAttribute("href");
  window.open(fileUrl);
});
