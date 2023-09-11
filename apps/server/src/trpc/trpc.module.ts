import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.srvice';
import { TrpcRouter } from './trpc.router';

@Module({ imports: [], providers: [TrpcService, TrpcRouter] })
export class TrpcModule {}
