document.querySelectorAll(".update-task").forEach(deletebutton => {
    deletebutton.addEventListener("click", async function (){
   const id = this.getAttribute("id")
   const status = this.getAttribute("status")
    console.log(id);
    console.log(status);
        try {
            const response = await fetch("http://localhost:3000/"+id, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: !status}),
            });
        
            if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
            }
        
            console.log("Tarea actualizada");
        
          } catch (error) {
            console.error("Actualizar tuvo un error:", error);
            alert("Hubo un problema al actualizar la tarea. Inténtalo de nuevo.");
          }
    })
})