import puppeteer from 'puppeteer';
import handlebars from 'handlebars';

const generatePdf = async (template: string, data: object): Promise<Buffer> => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Compile the Handlebars template using the provided data.
    const compiledTemplate = handlebars.compile(template);
    const html = compiledTemplate(data);

    // Load the HTML into the Puppeteer page and generate a PDF.
    await page.setContent(html);
    const pdf = await page.pdf();

    // Close the Puppeteer browser.
    await browser.close();

    return pdf;
};

export default generatePdf;