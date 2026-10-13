document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (!contactForm || !formAlert) return;

    const fields = [...contactForm.querySelectorAll('input, textarea')];

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstInvalidField = fields.find((field) => !field.checkValidity());

        if (firstInvalidField) {
            fields.forEach((field) => field.setAttribute('aria-invalid', String(!field.checkValidity())));
            formAlert.className = 'mt-3 alert alert-danger';
            formAlert.textContent = 'Revisa los campos: completa la información y usa un correo válido.';
            formAlert.classList.remove('d-none');
            firstInvalidField.focus();
            return;
        }

        fields.forEach((field) => field.removeAttribute('aria-invalid'));
        formAlert.className = 'mt-3 alert alert-success';
        formAlert.textContent = 'Validación local completada. Este proyecto de muestra no envía ni guarda tu mensaje.';
        formAlert.classList.remove('d-none');
        formAlert.focus();
    });

    fields.forEach((field) => {
        field.addEventListener('input', () => {
            field.removeAttribute('aria-invalid');
        });
    });
});
