import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users') // /users route
// decorator to define a controller
export class UsersController {
  /*

  GET /users
  GET /users/:id
  POST /users
  PATCH /users/:id
  DELETE /users/:id
  *  /users
  * /users/:id
  *
  * */

  @Get() // GET /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  // @Get('interns') // GET /users/interns
  // findAllInterns() {
  //   return [];
  // }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // Patch /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
