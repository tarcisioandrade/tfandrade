"use server";

export const contactFormSubmit = async (prevState: any, formData: FormData) => {
  const email = formData.get("email");
  const name = formData.get("name");
  const message = formData.get("message");

  const res = await fetch("https://formspree.io/f/xrbzkroj", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });
  if (!res.ok) return { error: true };
  return { success: true };
};
