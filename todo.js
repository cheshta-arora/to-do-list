
let containerId = 1;
var arr = [];
function createheading(){
        const uniqueId = `container${containerId}`;
        arr.push(uniqueId);
        console.log(arr);
        var boxd=document.getElementById("card");
        boxd.onclick = (e) => createlist(e,arr );
        var box=document.createElement("div");
        box.className="cardp";
        box.setAttribute("id", uniqueId);
        containerId++;
        var heading= String(prompt("ENTER THE TASK"));
        box.innerHTML+=`<h2><I>${heading}</I></h2>`+ `<br><hr>`;
        boxd.appendChild(box);
    }

let cnt = 0;
function createlist (e, arr ){

        for(var j = 0 ; j<=1000 ; j++){
                if(e?.target?.id === arr[j]){

                        var list= String(prompt("ENTER THE Items"));
                        cnt++;
                        let el = document.createElement('li');
                        var ids = "item"+cnt;
                        el.setAttribute('id', ids );
                        el.innerHTML +=`${list}`;
                        el.onclick = (e) => createline(e, ids) ;
                         e.target.appendChild(el);
                
              }
        }
   
}
function createline(e, ids){
       document.getElementById(ids).style.textDecoration="line-through";
       document.getElementById(ids).style.color="#C2C2C2";
       var done = document.getElementById(ids);
       done.onclick =(e) =>removeline(e,ids);
}
function removeline(e,ids){
        document.getElementById(ids).style.textDecoration="none";
        document.getElementById(ids).style.color="black";
        var done = document.getElementById(ids);
        done.onclick =(e) =>createline(e,ids);
}