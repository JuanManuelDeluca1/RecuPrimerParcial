document.querySelectorAll(".delete-task").forEach(deletebutton => {
    deletebutton.addEventListener("click", async function (){
   const id = this.getAttribute("id")
    console.log(id);
        try {
            const response = await fetch("http://localhost:3000/"+id, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
        
            if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
            }
        
            console.log("Tarea borrada");
        
          } catch (error) {
            console.error("Elimnar tuvo un error:", error);
            alert("Hubo un problema al borrar la tarea. Inténtalo de nuevo.");
          }
    })
})

/*const removeButton = document.getElementById("removeButton");

removeButton.addEventListener("click", async function (){
    try {
        const response = await fetch("http://localhost:3000/2", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
    
        console.log("Tarea borrada");
    
      } catch (error) {
        console.error("Elimnar tuvo un error:", error);
        alert("Hubo un problema al borrar la tarea. Inténtalo de nuevo.");
      }
});*/