// api/testpost/index.js
module.exports = async function (context, req) {
    context.log('Test POST function processed a request.');

    const yourName = req.body?.name;
    const message = `Hello, ${yourName || 'stranger'}. This POST request was successful!`;

    context.res = {
        status: 200,
        body: { success: true, message: message }
    };
};



