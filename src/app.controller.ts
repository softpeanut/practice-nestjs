import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    public home() {
        return "Welcome to my Movie API";
    }
}
