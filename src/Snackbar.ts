export function showSnackbar(message: string = 'Успешна заявка', type: 'Error' | 'Success' = 'Success') {
    const snackbar = document.createElement("div");
    snackbar.className = `text-white p-4 rounded-md fixed bottom-4 right-4`
    snackbar.className += type === 'Error' ? ' bg-red-500' : ' bg-green-500'
    snackbar.textContent = message;

    document.body.appendChild(snackbar);

    setTimeout(() => {
        snackbar.remove();
    }, 2000);
}