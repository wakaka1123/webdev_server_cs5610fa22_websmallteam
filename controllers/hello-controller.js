const HelloControllers = (app)=>{

  app.get('/hello', (req, res) => {
    res.send('Hello!')
  });
  app.get('/', (req, res) => {
    res.send('Welcome to Web Small Team\'s final project!')
  });

}
export default HelloControllers