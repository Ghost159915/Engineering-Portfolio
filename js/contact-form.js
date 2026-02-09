document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submit = document.getElementById('contact-submit');

  if (!form || !status || !submit) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const payload = new FormData(form);
    const endpoint = 'https://formsubmit.co/ajax/4b8822a3404b56757f61a1de10328f7d';

    submit.disabled = true;
    submit.textContent = 'Sending...';
    status.classList.remove('success', 'error');
    status.textContent = 'Sending your message...';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      form.reset();
      status.classList.add('success');
      status.textContent = 'Message sent. Thank you, I will get back to you soon.';
    } catch (error) {
      status.classList.add('error');
      status.textContent = 'Could not send right now. Please email me directly.';
    } finally {
      submit.disabled = false;
      submit.textContent = 'Send Message';
    }
  });
});
