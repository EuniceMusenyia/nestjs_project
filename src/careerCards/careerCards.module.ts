import { Module } from '@nestjs/common';
import { CareerCardsController } from './careerCards.controller';
import { CareerCardsService } from './careerCards.service';
@Module({
  controllers: [CareerCardsController],
  providers: [CareerCardsService],
})
export class CareerCardsModule {}
