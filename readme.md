# Social Media Application called Chatter
==========================================

It is the social media application that allows us to create post, and share them with other users. User can also able to comment and like post.

# Features:

-- Create Post
--Share POst
--Comment Post
--LIke post

# Technologies Used:
--React
--NodeJs+ExpressJs
-- MongoDB

# Setup Instructions:
1.Database Setup:

  -- Install MongoDB community server incase if it is local  
      https://www.mongodb.com/try/download/community
  -- Install MongoDB Compass
           https://www.mongodb.com/try/download/compass 
  --Create a new database called Chatter.   
  --Create a new collection called Users.   
  --Create a new collection called Post.    
  --Create a new collection called Comments.    
  --Create a new collection called Likes.     
 
  (If Atlas DB is used)    
  visit http://www.mongodb.com/cloud/atlas     
  --Create a new collection called Users.     
  --Create a new collection called Post.     
  --Create a new collection called Comments.     
  --Create a new collection called Likes.      
   
2.Server Setup    
--Create a new repository called "be-chatter"    
--Initialize a new NodeJS project
  
  To initialize package.json:
  ```bash
npm init -y or npm init    

--Install the following dependencies
    -Express
    -Cors
    -Mongoose
    -dotenv
    -nodemon(dev dependency)
    -morgon(dev dependency)
    -jsonwebtoken
    -bcrypt
    -multer(used for file uploading ref: class 41)

    ```bash
    npm install express mongoose cors dotenv nodemon morgon jsonwebtoken bcrypt multer

-- create a new file called .env and add the following environment variables

```bash
PORT=3001
MONGODB_URI = mongodb://localhost:2702/chattr
JWT_SECRET = secret

-- create a new file called server.js
   - Database connection setup
   -Express connection setup
   -Middleware setup-cors,express,json,authentication,morgon
   -Routes setup
   -Controller setup
   -Model setup
   -Error Handling setup

  -Follow the MVC architecture, create the following folders:
      -controller
      -models
      -routes

  3. Client Setup:

  -- create a new repository called "fe-chattr"
  -- Initialize the new react project

  ```bash
  npm create vite@latest fe-chattr    

  -- Install the following dependcies:     
       
    - react-router-dom   
    - axios    
    - react-icons    
    - react-toastify    
    - tailwindcss       
    - @heroicons/react      
    - @headlessui/react     
