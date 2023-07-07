const apiKey =
  "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";
const apiUrl = "https://api.brevo.com/v3/smtp/email";

const enviarCorreo = async (formulario) => {
  const data = {
    sender: {
      name: formulario.name,
      email: formulario.email,
    },
    to: [
      {
        email: "waltermedinaberrios@gmail.com",
        name: "Walter",
      },
    ],
    subject: `Contacto-${formulario.name}`,
    htmlContent: `<html><head></head><body><p>Hello,</p>${formulario.message}</p></body></html>`,
  };

  try {
    const respuesta = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(data),
    });

    const resultado = await respuesta.json();
    console.log(resultado);
    return true;
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return false;
  }
};

export default enviarCorreo;
