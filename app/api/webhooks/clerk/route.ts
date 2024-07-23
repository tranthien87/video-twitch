import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import User from '@/models/user';


export async function POST(req: Request) {
    
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOKS_SECRECT

    if (!WEBHOOK_SECRET) {
      throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

      // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

     // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
        status: 400
        })
    }
    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload);

     // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);
    let evt: WebhookEvent

      // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
        status: 400
        })
    }

      // Do something with the payload
    // For this guide, you simply log the payload to the console

   
    const eventType = evt.type;
    console.log(`Webhook with type of ${eventType}`)
    if(eventType === 'user.created') {
        const foundUser = await User.findOne({userId: payload.data.id});
        if(foundUser) return;
        await User.create({
            userId: payload.data.id,
            userName: payload.data.username,
            imageUrl: payload.data.image_url
        })
        
    }
    if(eventType === 'user.updated') {
        const foundUser = await User.findOne({userId: payload.data.id});
        console.log('found user', foundUser)
        if (!foundUser) {
            return new Response('User not found', { status: 404 })
        }
        await User.findOneAndUpdate(
        {userId: payload.data.id}, 
        {
            userName: payload.data.username,
            imageUrl: payload.data.image_url
        })
       
        
    }
    if(eventType === 'user.deleted') {
        await User.deleteOne({
            userId: payload.data.id
        })
    }

    return new Response('', { status: 200 })

}