const nodemailer = require("nodemailer");

const sendResultTemplate = (title, description, username) => {
    const mailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333;
            text-align: center;
          }
          p {
            color: #666;
            line-height: 1.6;
          }
          .greeting {
            font-size: 18px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${title}</h1>
          <p class="greeting">Dear ${username},</p>
          <p>${description}</p>
        </div>
      </body>
      </html>
    `;
    return mailTemplate;
  };
  

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "aslantasezginn@gmail.com",
    pass: "atrijxwdpzjjdvii",
  },
});

const sendMail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: "aslantasezginn@gmail.com",
      to,
      subject,
      html: text,
    });
  } catch (error) {
    console.error("Mail gönderirken hata oluştu:");
    console.error(error);
  }
};

module.exports = { sendMail, sendResultTemplate };
