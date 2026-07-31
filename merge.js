const PDFMerger = require('pdf-merger-js').default;

const mergePdfs = async (p1, p2, p3) => {
    const merger = new PDFMerger();

    await merger.add(p1);
    await merger.add(p2);
    await merger.add(p3);

    await merger.save('public/merged.pdf');
};

module.exports = { mergePdfs };