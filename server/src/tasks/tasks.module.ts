import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TasksGateway } from './tasks.gateway';

@Module({
	providers: [TasksService, TasksGateway],
	controllers: [TasksController]
})
export class TasksModule {}
