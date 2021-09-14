const express    = require('express');      
const app        = express();                
const bodyParser = require('body-parser');
// import the student schema defined in the student.js file
const User = require('./models/userdata'); 
//register router middleware
const router = express.Router();  

app.use((req, res, next) => {

 
    const auth = {login: 'admin', password: 'admin123'} // change this
  
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
    if (login && password && login === auth.login && password === auth.password) {
      return next()
    }
    res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    res.status(401).send('Authentication required.') 
  })
  router.post("/user", async (req, res) => {
	const user = new User({
		Name: req.body.Name,
		Email: req.body.Email,
        Phone:req.body.Phone,
        Gender:req.body.Gender,
        Age:req.body.Age
	})
	await user.save()
	res.send(post)
})
router.get('/user/:name', function(request, response) {  
   
    User.findOne({Name: request.params.Name}, function(err, User) {

        if (err) 
        {
        response.status(500);

        response.setHeader('Content-Type', 'application/vnd.error+json');
        response.json({ message: "An error occurred, unable to get student details"});

    } 
    else if (Student == null) 
    {

        response.status(404);
        response.setHeader('Content-Type', 'application/vnd.error+json');
        response.json({ message: "User not found "+request.params.Name});

    } 
    else 
    {

        response.status(200);
        response.setHeader('Content-Type', 'application/hal+json');

        let userjson = halson({
        Name: User.Name,
        Email: User.Email,
        Phone: User.Phone,
        Gender: User.Gender,
        created_at: Student.created_at
        }).addLink('self', '/user/'+Student.student_id)
        //response
        response.send(JSON.stringify(userjson));

    }
    });    
    
});

// let's now register our routes
app.use('/', router);

// now start the server on port 8000


app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());

const port = process.env.PORT || 8000;        
app.listen(port);  
console.log('Starting server on port ' + port);  
const config = require('./config');

const mongoose = require('mongoose');

mongoose.connect(config.db[app.settings.env]);  
