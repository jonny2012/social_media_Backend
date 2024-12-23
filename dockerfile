# # Используем Node.js 18.16 на базе Alpine для меньшего размера образа
# FROM node:20.16

# # Задаем рабочий каталог
# WORKDIR /user/src/app

# # Копируем json файлы и tsconfig
# COPY ./server .
# # COPY package.json package-log.json tsconfig.json  ./

# # Устанавливаем pnpm и проверяем версию
# RUN npm install  

# # Устанавливаем зависимости
# # RUN pnpm install
# RUN npm run build

# ## Копируем остальные файлы проекта (public, src, vite.config.ts)
# #Убедитесь, что эта строка присутствует

# ## Собираем приложение
# #RUN pnpm build

# # Открываем порт, на котором приложение работает
# EXPOSE 5000

# # Запускаем приложение
# CMD ["node"]


FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install bcrypt

COPY . .
ENV PORT=5000
ENV SOCKET_PORT=5003

EXPOSE 5000 
EXPOSE 5003

CMD ["sh", "-c", "npm run dev & npm run chat && wait"]


# version: "3.9"

# services:
#   app:
#     build:
#       context: .
#       dockerfile: Dockerfile
#     container_name: 
#     ports:
#       - "5000:5000"
#       - "5003:5003"
#     env_file:
#       - .env
#     depends_on:
#       - mongo
#     volumes:
#       - .env:/app/.env

#  mongo-database:
#     container_name: mongo-database
#     image: mongo:7
#     restart: always
#     ports:
#       - 27017:27017
#     command: --auth --bind_ip 0.0.0.0
#     environment:
#       MONGO_INITDB_ROOT_USERNAME: ${MONGO_ROOT_USERNAME}
#       MONGO_INITDB_ROOT_PASSWORD: ${MONGO_ROOT_PASSWORD}
#       MONGO_INITDB_DATABASE: ${MONGO_INITDB_DATABASE}
#     env_file:
#       - .env
#     volumes:
#       - ./data/db:/data/db

# volumes:
#   mongo-data: