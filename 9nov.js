function VolumeAndSurfaceArea(){
    let height= document.getElementById("cylinderHeight").value;
    let radius= document.getElementById("cylinderRadius").value;
    
    document.getElementById("VolumeAndSurfaceAnswer").value = 3.14*height*radius;
}

function power(){
    let voltage= document.getElementById("voltage").value;
    let current= document.getElementById("current").value;
    document.getElementById("powerAns").value = voltage*current;
}



function Wall(){
    let n= document.getElementById("nn").value;
    let w= document.getElementById("ww").value;
    let h= document.getElementById("hh").value;

    document.getElementById("wallAnswer").value =(n/(w*h));
}