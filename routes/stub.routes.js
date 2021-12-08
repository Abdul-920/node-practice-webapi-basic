const express = require('express');
const { body } = require('express-validator/check');
var pdfmake = require('pdfmake/build/pdfmake');
const vfsFonts = require('pdfmake/build/vfs_fonts');

pdfmake.vfs = vfsFonts.pdfMake.vfs;

const stubController = require('../controllers/stub.controller');

const router = express.Router();

// GET /stub/preview
router.post('/preview', stubController.stubPreview);




function createPdfBinary(docDefinition) {
    // var fonts = {
    // 	Roboto: {
    // 		normal: path.join(__dirname, '..', 'examples', '/fonts/Roboto-Regular.ttf'),
    // 		bold: path.join(__dirname, '..', 'examples', '/fonts/Roboto-Medium.ttf'),
    // 		italics: path.join(__dirname, '..', 'examples', '/fonts/Roboto-Italic.ttf'),
    // 		bolditalics: path.join(__dirname, '..', 'examples', '/fonts/Roboto-MediumItalic.ttf')
    // 	}
    // };

    // pdfmake.setFonts(fonts);

    var pdf = pdfmake.createPdf(docDefinition);
    return pdf.getDataUrl();
}


// POST /feed/post
// router.post(
//     '/post',
//     isAuth,
//     [
//         body('title')
//             .trim()
//             .isLength({ min: 5 }),
//         body('content')
//             .trim()
//             .isLength({ min: 5 })
//     ],
//     feedController.createPost
// );

// router.get('/post/:postId', isAuth, feedController.getPost);

// router.put(
//     '/post/:postId',
//     isAuth,
//     [
//         body('title')
//             .trim()
//             .isLength({ min: 5 }),
//         body('content')
//             .trim()
//             .isLength({ min: 5 })
//     ],
//     feedController.updatePost
// );

// router.delete('/post/:postId', isAuth, feedController.deletePost);

module.exports = router;
