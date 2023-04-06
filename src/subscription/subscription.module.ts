import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subscription } from './models/subscription.model';
import { JwtModule } from '@nestjs/jwt';
import { ChannelModule } from '../channel/channel.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Subscription]),
    JwtModule.register({}),
    ChannelModule,
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
