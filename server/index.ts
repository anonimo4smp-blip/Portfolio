import "dotenv/config";
import express from "express";
import { Resend } from "resend";

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL!;

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    res.status(400).json({ error: "Faltan campos obligatorios." });
    return;
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: TO_EMAIL,
    subject: `[Portfolio] ${asunto} — ${nombre}`,
    html: `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      <hr />
      <p>${mensaje.replace(/\n/g, "<br/>")}</p>
    `,
    replyTo: email,
  });

  if (error) {
    console.error(error);
    res.status(500).json({ error: "No se pudo enviar el mensaje." });
    return;
  }

  res.json({ ok: true });
});

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
