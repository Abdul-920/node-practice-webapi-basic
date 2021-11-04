const nodemailer = require("nodemailer");

async function myCustomMethod(ctx) {
  let cmd = await ctx.sendCommand(
    "AUTH PLAIN " +
      Buffer.from(
        "\u0000" +
          ctx.auth.credentials.user +
          "\u0000" +
          ctx.auth.credentials.pass,
        "utf-8"
      ).toString("base64")
  );

  if (cmd.status < 200 || cmd.status >= 300) {
    throw new Error("Failed to authenticate user: " + cmd.text);
  }
}

const transport = nodemailer.createTransport({
  host: "mail.appflextracker.org",
  port: 465,
  secure: true,
  auth: {
    type: "custom",
    method: "MY-CUSTOM-METHOD", // forces Nodemailer to use your custom handler
    user: "reminder@appflextracker.org",
    pass: "abdulflex1",
  },
  customAuth: {
    "MY-CUSTOM-METHOD": myCustomMethod,
  },
});

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text) => {
  try {
    const msg = { from: "reminder@appflextracker.org", to, subject, text };
    await transport.sendMail(msg);
  } catch (e) {
    const error = new Error("Unable to send email.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
  const subject = "Reset password";
  // replace this url with the link to the reset password page of your front-end app
  const resetPasswordUrl = `http://link-to-app/reset-password?token=${token}`;
  const text = `Dear user,
  To reset your password, click on this link: ${resetPasswordUrl}
  If you did not request any password resets, then ignore this email.`;
  await sendEmail(to, subject, text);
  console.log("email sent");
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token) => {
  const subject = "Email Verification";
  // replace this url with the link to the email verification page of your front-end app
  const verificationEmailUrl = `http://link-to-app/verify-email?token=${token}`;
  const text = `Dear user,
To verify your email, click on this link: ${verificationEmailUrl}
If you did not create an account, then ignore this email.`;
  await sendEmail(to, subject, text);
};

module.exports = { sendResetPasswordEmail,
  sendVerificationEmail };
