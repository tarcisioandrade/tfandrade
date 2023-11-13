"use server";

export const contactFormSubmit = async (prevState: any, formData: FormData) => {
  const email = formData.get("email");
  const name = formData.get("name");
  const message = formData.get("message");

  try {
    await fetch("https://formspree.io/f/xoqberera", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    return { success: true };
  } catch (error) {
    return { error: true };
  }
};
