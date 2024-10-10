import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,verify } from 'hono/jwt'
const app = new Hono()

app.use('/api/v1/blog/*', async (c, next) => {
  const body = c.req.header("authorization") || "";
  const token = body.split(" ")[1]
  //@ts-ignore
  const verify = verify(token,c.env.JWT_KEY)
  if(verify.id){
    await next()
  }else{
    c.status(400)
    return c.json({error : "unauthorized"})
  }
})

app.post('/api/v1/signup', async (c) => {  //=> c means context which has req,res,next
      const prisma = new PrismaClient({
        //@ts-ignore
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const user = await prisma.user.create({
      data:{
        email    : body.email,
        password : body.password
      },
    })
    //@ts-ignore
    const token = await sign({id : user.id} , c.env.JWT_KEY)
    return c.json({
      jwt : token
    })
})

app.post('/api/v1/signin', async (c) => {
    const prisma = new PrismaClient({
      //@ts-ignore
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where : {
      email : body.email,
      password : body.password
    }
  })
  if(!user){
    c.status(400)
    return c.json({Error : "User not found"})
  }
  //@ts-ignore
  const token = await sign({id : user.id},c.env.JWT_KEY)
  return c.json({
    jwt : token
  })
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1//blod/:id', (c) => {
  return c.text('Hello Hono!')
})
//neon====postgresql://neondb_owner:cdOHV5l3pgBN@ep-round-waterfall-a5q8q286.us-east-2.aws.neon.tech/neondb?sslmode=require

export default app
