import express from 'express';

const app = express();

app.use('/api/register', () => {
  console.log('Sample register endpoint');
  // Registration logic here
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});