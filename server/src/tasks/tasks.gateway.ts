import {
	WebSocketGateway,
	SubscribeMessage,
	MessageBody
} from '@nestjs/websockets';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';

@WebSocketGateway()
export class TasksGateway {
	constructor(private readonly tasksService: TasksService) {}

	@SubscribeMessage('taskCreated')
	async handleTaskCreated(@MessageBody() taskData: Task) {
		// Lógica para enviar uma mensagem para todos os clientes conectados
		console.log('Nova Tarefa Criada:', taskData);
		return taskData; // Envia os dados da nova tarefa para os clientes
	}

	@SubscribeMessage('taskUpdated')
	async handleTaskUpdated(@MessageBody() taskData: Task) {
		console.log('Tarefa Atualizada:', taskData);
		return taskData; // Envia os dados da tarefa atualizada para os clientes
	}
}
