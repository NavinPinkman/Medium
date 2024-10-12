import z from 'zod'

const signupSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8),
    name : z.string().optional()
})

export type inferedsignupSchema = z.infer<typeof signupSchema>

const signinSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8)
})

export type inferedsigninSchema = z.infer<typeof signinSchema>


const blogSchema = z.object({
    title : z.string(),
    content : z.string(),
    published : z.boolean()
})

export type inferedblogSchema = z.infer<typeof blogSchema>

