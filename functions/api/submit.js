/**
 * POST /api/submit
 */
export async function onRequestPost(context) {
  try {
    const input = await context.request.formData();
    const object = Object.fromEntries(input);

    // Country is a honeypot field
    if (object["country"]) {
      return new Response("Contact form submitted successfully", {
        status: 200,
      });
    }

    await fetch("https://hooks.zapier.com/hooks/catch/4523262/3c12flh/", {
      body: JSON.stringify(object),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return new Response("Contact form submitted successfully", { status: 200 });
  } catch (error) {
    await fetch("https://hooks.zapier.com/hooks/catch/4523262/3c16z94/", {
      body: JSON.stringify({ message: error.message, stack: error.stack }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return new Response("Error sending contact form", { status: 400 });
  }
}
