import {z} from 'zod'

export const zodPostSchema = z.object({
    caption : z.string({message : "Caption is required"}).min(1), // we can have more valdatation parameter like string and min
})