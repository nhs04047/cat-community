import { CatsService } from './cats.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService:CatsService){}
}

@Get()
getCurrentCat(){
  return 'current cat'
}

@Post()
async signUp(){
  return 'signup'
}

@Post('login')
logIn(){
  return 'login'
}

@Post('logout')
logout(){
  return 'logout'
}

@Post('upload/cats')
uploadCatImg(){
  return 'uploadImg'
}