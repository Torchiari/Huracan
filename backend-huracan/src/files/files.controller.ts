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
import { SupabaseAuthGuard } from '../common/guards/supabase-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @UseGuards(SupabaseAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: any, @Req() req) {
    return this.filesService.saveFile(file, req.user);
  }

  @UseGuards(SupabaseAuthGuard)
  @Get('my-files')
  getMyFiles(@Req() req) {
    return this.filesService.getUserFiles(req.user.id);
  }

  @UseGuards(SupabaseAuthGuard)
  @Delete(':id')
  deleteFile(@Param('id') id: string, @Req() req) {
    return this.filesService.deleteFile(id, req.user.id);
  }
}
