/**
 * components/ui/ContactForm.tsx
 *
 * Formulário de contato interativo.
 * É um Client Component pois precisa gerenciar o estado dos campos
 * e o feedback de envio ("MENSAGEM ENVIADA").
 *
 * Obs: para envio real, integre com Resend, EmailJS, Formspree, etc.
 */

"use client";

import { useState } from "react";

// Tipagem do estado do formulário
interface FormState {
  name:    string;
  email:   string;
  message: string;
}

export default function ContactForm() {
  // Estado dos campos do formulário
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  // Controla se o feedback de sucesso está visível
  const [sent, setSent] = useState(false);

  // Atualiza o campo correto ao digitar
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Simula envio — substitua pela sua lógica real de envio de e-mail
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });

    // Reseta o feedback após 3 segundos
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Campo: nome */}
      <div>
        <label htmlFor="name" className="field-label">// nome</label>
        <input
          id="name"
          name="name"
          type="text"
          className="field-input"
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Campo: email */}
      <div>
        <label htmlFor="email" className="field-label">// email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="field-input"
          placeholder="seu@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Campo: mensagem */}
      <div>
        <label htmlFor="message" className="field-label">// mensagem</label>
        <textarea
          id="message"
          name="message"
          className="field-textarea"
          placeholder="Sua mensagem..."
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Botão de envio — muda visual quando a mensagem é enviada */}
      <button
        type="submit"
        className="btn btn-cyan"
        style={{
          alignSelf: "flex-start",
          ...(sent && {
            color: "var(--color-green)",
            borderColor: "var(--color-green)",
          }),
        }}
      >
        {sent ? "// MENSAGEM ENVIADA ✓" : "ENVIAR MENSAGEM"}
      </button>
    </form>
  );
}
