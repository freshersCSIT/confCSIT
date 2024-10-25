document.getElementById('confessionForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const Name or Anonymous = document.getElementById('Name or Anonymous').value || 'Anonymous';
    const confession = document.getElementById('confession').value;

    // Replace with your Google Apps Script URL
    const scriptURL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

    const formData = new URLSearchParams();
    formData.append("Name or Anonymous", Name or Anonymous);
    formData.append("confession", confession);

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            document.getElementById('Name or Anonymous').value = '';
            document.getElementById('confession').value = '';
            alert('Your confession has been submitted successfully!');
        } else {
            alert('There was an error submitting your confession. Please try again.');
        }
    } catch (error) {
        alert('Error connecting to the server.');
        console.error('Error:', error);
    }
});
