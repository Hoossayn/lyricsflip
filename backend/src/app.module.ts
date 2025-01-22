import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GameSessionModule } from './game-session/game-session.module';
import { SongModule } from './song/song.module';
import { WagerModule } from './wager/wager.module';
import { RewardModule } from './reward/reward.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { NotificationModule } from './notification/notification.module';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [AuthModule, UserModule, GameSessionModule, SongModule, WagerModule, RewardModule, LeaderboardModule, NotificationModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
