import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Video } from './models/video.model';
import { JwtAuthActiveGuard } from '../guards/jwt-auth-active.guard';

@ApiTags('Video')
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @ApiOperation({ summary: 'Create a new video' })
  @ApiResponse({ status: 201, type: Video })
  @UseGuards(JwtAuthActiveGuard)
  @Post()
  async create(@Body() createVideoDto: CreateVideoDto) {
    return this.videoService.create(createVideoDto);
  }

  @ApiOperation({ summary: 'Get all videos' })
  @ApiResponse({ status: 200, type: [Video] })
  @UseGuards(JwtAuthActiveGuard)
  @Get()
  async findAll() {
    return this.videoService.findAll();
  }

  @ApiOperation({ summary: 'Get a video by ID' })
  @ApiResponse({ status: 200, type: Video })
  @UseGuards(JwtAuthActiveGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.videoService.getOne(id);
  }

  @ApiOperation({ summary: 'Update a video by ID' })
  @ApiResponse({ status: 200, type: Video })
  @UseGuards(JwtAuthActiveGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVideoDto: UpdateVideoDto,
  ) {
    return this.videoService.update(id, updateVideoDto);
  }

  @ApiOperation({ summary: 'Delete a video by ID' })
  @ApiResponse({ status: 200, type: Video })
  @UseGuards(JwtAuthActiveGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.videoService.remove(id);
  }
}
