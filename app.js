const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I know today is your birthday by traditional method.
 But I do remember that your birthday is on 15th sep and the time is 12.05 am. 
So I had planned not to wish you today but tomorrow at 12.00 am. 
I have done it by intention and no I havent forgot your birthday. 
Since you called me up from our own and said today is your birthday I felt very bad so I am taking this initiative. 
I hope you have received my gift 🙂'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
