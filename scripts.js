let delivery=0

function updateDelivery(){

delivery=parseInt(document.getElementById("delivery").value)

document.getElementById("deliveryCharge").innerText=delivery

update()

}
