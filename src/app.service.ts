import { Injectable } from '@nestjs/common';
import { json } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    const data = JSON.stringify({
      
        repo_github: "https://github.com/Ismail-Mouyahada/TP-master-nestjs.git",
        postman: "https://galactic-astronaut-742693.postman.co/workspace/My-Workspace~1bf427ab-3a84-424f-8a72-421aad6139d0/collection/17558142-a0ff04f5-b39d-4e20-897e-54046f06788a?action=share&creator=17558142",
        swagger: "https://api-e-comemrce.onrender.com/api"
  
    });
    return data
  }
}
