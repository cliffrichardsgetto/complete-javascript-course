import pdfjsLib from "pdfjs-dist/legacy/build/pdf";

document.getElementById("fileInput").addEventListener("change", async (event) => {
    const file = event.target.files[0];

    if (!file) {
        console.log("No file selected.");
        return;
    }

    const reader = new FileReader();

    reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const loadingTask = pdfjsLib.getDocument(arrayBuffer);
        const pdfDocument = await loadingTask.promise;

        console.log(`PDF has ${pdfDocument.numPages} pages.`);

        for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
            const page = await pdfDocument.getPage(pageNum);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item) => item.str).join(" ");
            console.log(`Page ${pageNum}: ${pageText}`);
        }
    };

    reader.readAsArrayBuffer(file);
});
