function showFiles() {
    const input = document.getElementById("pdfUpload");
    const output = document.getElementById("fileName");

    if (input.files.length === 0) {
        output.innerHTML = "No files selected";
        return;
    }

    let files = [];

    for (let i = 0; i < input.files.length; i++) {
        files.push(input.files[i].name);
    }

    output.innerHTML =
        "<strong>Selected Files:</strong><br>" + files.join("<br>");
}