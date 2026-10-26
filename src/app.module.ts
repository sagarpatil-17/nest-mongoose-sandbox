import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './modules/student/student.module';
import { UserModule } from './modules/user/user.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('DATABASE_URL'),
      }),
    }),

    StudentModule,

    UserModule,

    EmployeeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
