import { createParamDecorator } from '@nestjs/common';

export const CurUser = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.req.user,
);
