import { ConfigService } from '@nestjs/config';

const config = new ConfigService();

export const jwtConstants = {
  secret: config.get('APP_SECRET'),
};
