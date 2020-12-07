document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField(){
    //type of fields: node
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //type of fields: nodeList
    const fields = newFieldContainer.querySelectorAll("input")
    
    fields.forEach(function(field){
        field.value = ""
    })

    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
    