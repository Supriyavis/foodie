document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end > start ?  1:-1,
        step=Math.abs(Math.floor(duration/range));
        timer=setInterval(()=>{
            current +=increment;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    
    }
    counter("count1",0,100,300);
    counter("count2",100,150,500);
    counter("count3",0,400,600);
    counter("count4",0,600,800);
    });