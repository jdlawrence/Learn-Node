const nodemailer = require('nodemailer');
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');
const promisify = require('es6-promisify');

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

// ** Testing things out ******************
// transport.sendMail({
//   from: 'Jamil Lawrence <jamil.lawrence@gmail.com>',
//   to: 'jdlawr@gmail.com',
//   subject: 'Just trying things out!',
//   html: 'Hey you are <strong>cool!</strong>',
//   text: 'Hey you are cool!'
// });

const generateHTML = (filename, options = {}) => {
  const html = pug.renderFile(`${__dirname}/../views/email/${filename}.pug`, options);
  const inlined = juice(html);
  // return inlined;
  return html;
};

exports.send = async (options) => {
  const html = generateHTML(options.filename, options);
  console.log(htmlToText);
  const text = htmlToText.fromString(html);

  const mailOptions = {
    from: `Jamil Lawrence <jamil.lawrence@gmail.com>`,
    to: options.user.email,
    subject: options.subject,
    html,
    text
  };
  const sendMail = promisify(transport.sendMail, transport);
  return sendMail(mailOptions);
};
