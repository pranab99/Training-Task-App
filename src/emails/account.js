const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'impranabdas99@gmail.com',
    from: 'pranab@rapidinnovation.dev',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})