import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUserBySessionId = async (session_id) => {
    try {
        const user = await prisma.user.findUnique({
        where: {
          session_id: session_id
        }
      });

      return user;
    } catch (error) {
        console.log(error)
        return null;
    }
    
}