const express = require('express')
// const Joi = require('@hapi/joi')
const mongoose = require('mongoose')


const app = express()
const port = process.env.PORT || 3000


mongoose.connect('mongodb://127.0.0.1:27017/joi-valid', {
    useNewUrlParser: true})

    app.use(express.json())

    // const authschema = Joi.object({
    //     name: Joi.string()
    //         .alphanum()
    //         .min(3)
    //         .max(30)
    //         .required(),
        
    //     age: Joi.string(),
        
    //     password: Joi.string()
    //         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        
    //     email: Joi.string()
    //         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        
    //     access_token: [
    //             Joi.string(),
    //             Joi.number()
    //         ]
    //     })


        app.post('/register',async (req,res, next)=>{
            try{

                const {name, age, email, password}  = req.body
                if(!email || !  password) throw createError.BadRequest()
                // const result

                const doesExist = await User.findOne({email: email})
                if (doesExist)
                {
                    throw createError.Conflict(`${email} is already been taken`)
                }

                const user = new User({name, age, email, password})
                const savedUser = await User.save()
                res.send(savedUser)

            }catch(e){ 
res.send(e)        }
          })

          app.listen( port, ()=>{
            console.log('Server is upon port'  + port)
        })
        