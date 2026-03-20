"use server";

export async function contact(prevState: any, formData: FormData){
    
    const email = formData.get("email");
    const mensaje = formData.get("mensaje");

    console.log("Recibido: ", email, mensaje);

    return {success: true, message: "Mensaje enviado correctamente"};
}