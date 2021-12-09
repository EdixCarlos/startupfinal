const express = require('express');
require('express-async-errors');
const cors = require('cors');
const middleware = require('./utils/middleware');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const subredditRoutes = require('./routes/subreddit');
const userRoutes = require('./routes/user');

const app = express();

app.use(cors());

const CLIENT = 'Aa5RNW-uLovPKv0z7LYh13rXadn7CO-Xa0NoBmMbny8X7BHSi9PZl53yf78CIOltKXAhN6504C2kJqLs'
const SECRET = 'EPtkjFj8a0jYWlOLsc6vFuqe5Pg4RewAqQDnQ9l6MTLvcfuWeay1SU7QZhir4WSCKUzHgmFa2fGPQW7Y'
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'
const auth = { user: CLIENT, pass: SECRET }

const createPayment = (req, res)=>{
    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount:{
                currency_code: 'USD',
                value:'150'
            }
        }],
        application_context: {
            brand_name:'PictureMoments.com',
            landing_page: 'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: 'http://localhost:3005/execute-payment',
            cancel_url: 'http://localhost:3005/cancel-payment'
        }
    }
    request.post(`${PAYPAL_API}/v2/checkout/orders`,{
        auth,
        body,
        json: true
    }, (err, response)=>{
        res.json({data: response.body})
    })
}
const generateSubscription = (req, res) => {
    const { body } = req

    const subscription = {
        plan_id: body.plan_id, //P-3HK92642FR4448515MBQHCYQ
        start_time: "2021-11-01T00:00:00Z",
        quantity: 1,
        subscriber: {
            name: {
                given_name: "Leifer",
                surname: "Mendez"
            },
            email_address: "customer@example.com",
        },
        return_url: 'http://localhost/gracias',
        cancel_url: 'http://localhost/fallo'

    }
    request.post(`${PAYPAL_API}/v1/billing/subscriptions`, {
        auth,
        body: subscription,
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}
app.post(`/create-payment`, createPayment)
app.post(`/generate-subscription`, generateSubscription)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use('/api', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/subreddits', subredditRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/subscribe', subscribeRoutes);

app.use(middleware.unknownEndpointHandler);
app.use(middleware.errorHandler);

module.exports = app;
