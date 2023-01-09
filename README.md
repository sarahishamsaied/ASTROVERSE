# ASTROVERSE
 - Purpose
 
    - This project's general purpose is to provide Astronauts with an interface to  access  different features, depending on their role and authority level through a space-agency-like website. In addition to providing general users with features that give them more insight into the vast space and what space missions are.
- Scope
    - Develop a space-agency website that facilitates administrating astronaut’s missions and tasks depending on their roles.

- Deliverables and tools

    - ***Frontend***: ReactJs.
    - ***Backend***: NodeJs + express.js.
    - ***Database***: PostgreSql.
    - ***Migrations***: db-migrate.
    - ***Database Deployment***: Google Cloud.
    - ***Frontend Deployment***: Heroku.
    
    
    ### Check Documentation
    [ASTROVERSE (4)-merged (1).pdf](https://github.com/sarahishamsaied/nasa-project/files/9995899/ASTROVERSE.4.-merged.1.pdf)
    
    ### How to start the FE
    
      cd client

      npm i
      
      npm start

    ### How to start the BE

      cd ../

      cd server
      
     

      npm i
      
      
      npm start
      
     ### How to run migrations
     
     
      npm run migrate-up

      
     ### Environment Variables
     
     - Create a .env file in `server` folder
     
     
              HOST = "yourhost"

              USER = "yourusername"

              PASSWORD= "yourpassword"

              DB= "yourdbname"

              PORT = 

              DB_PORT = 

              TOKEN_SECRET = "yoursecretkey"

 ## Architecture
  ![diagram drawio](https://user-images.githubusercontent.com/71923204/210472229-0385dba0-4fd3-460c-bdca-719c5b7c2696.png)
