import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //query write space 

    await prisma.user.create({

        data:{
            email:"harsh111@gmail.com",
            name:"harshshukla"
        }

    })

}


main()
.then(async ()=> {
    console.log("done with the query");
    await prisma.$disconnect();
})
.catch(async (e)=>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1);
})



