import {
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Req,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { AuthGuard } from '@nestjs/passport';
import { storage } from './cloudinary.storage';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage }))
  uploadFile(@UploadedFile() file: any, @Req() req) {
    console.log('FILE RECIBIDO:', file);
    return this.filesService.saveFile(file, req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('my-files')
  getMyFiles(@Req() req) {
    return this.filesService.getUserFiles(req.user.sub);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteFile(@Param('id') id: string, @Req() req) {
    return this.filesService.deleteFile(+id, req.user.sub);
  }
}
