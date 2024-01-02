import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { generateImage, generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server";

export async function POST(req: Request){
    // check if user is authenticatied 
    
    const {userId} = auth();
    if (!userId){
        return new NextResponse('unautgorised', {status:401})
    }    
    const body = await req.json();
    const {name} = body;

    // const image_description = await generateImagePrompt(name);
    const image_description = " upgrade your api subscription XD"
    if(!image_description){
        return new NextResponse(" failed to generate image description. top up openAI account",{
            status:500,
        })
    }
    
    // const image_url = await generateImage(image_description);
    const image_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyNRuEkTFgmDCczXRtqPazlrC-7XTzrd2Cw&usqp=CAU"
    if(!image_url){
        return new NextResponse(" failed to generate image",{
            status:500,
        })
    }

    // Create the new Note 

    const note_ids = await db
    .insert($notes)
    .values({
      name,
      userId,
      imageUrl: image_url,
    })
    .returning({
      insertedId: $notes.id,
    });

  return NextResponse.json({
    note_id: note_ids[0].insertedId,
  });
}