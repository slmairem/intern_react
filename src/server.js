const fs = require('fs');
const path = require('path');

const userDataPath = path.join(__dirname, 'userData.json');

router.post('/register', async (req, res) => {
    const { email, username, password, birthday } = req.body;

    try {
        let users = [];
        if (fs.existsSync(userDataPath)) {
            const data = fs.readFileSync(userDataPath);
            users = JSON.parse(data);
        }

        const newUser = {
            userId: users.length + 1, 
            username,
            email,
            password, 
            birthday,
            profileImg: '', 
            backgroundImg: '', 
            bioText: '',
            favourites: '',
            lists: ''
        };

        users.push(newUser);

        fs.writeFileSync(userDataPath, JSON.stringify(users, null, 2));

        res.redirect('/login');
    } catch (err) {
        console.error('Register Error', err);
        res.status(500).json({ error: 'Register Error' });
    }
});
