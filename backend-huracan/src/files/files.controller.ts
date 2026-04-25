import {
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Req,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { AuthGuard } from '@nestjs/passport';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Delete, Param } from '@nestjs/common';

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (_, file, cb) => {
          const unique = Date.now() + extname(file.originalname);
          cb(null, unique);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req) {
    return this.filesService.saveFile(file, req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('my-files')
  getMyFiles(@Req() req) {
    return this.filesService.getUserFiles(req.user.sub);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  deleteFile(@Param('id') id: string, @Req() req) {
    return this.filesService.deleteFile(+id, req.user.sub);
  }
}
