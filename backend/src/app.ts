import cookieParser
from "cookie-parser";

import userRoutes
from "./routes/user.routes";

import {
 authLimiter
}
from "./middleware/rateLimit.middleware";

import {
 errorHandler
}
from "./middleware/error.middleware";

app.use(cookieParser());

app.use(
 "/api/auth",
 authLimiter,
 authRoutes
);

app.use(
 "/api/users",
 userRoutes
);

app.use(errorHandler);
