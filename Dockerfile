# Imagen base
FROM node:18-alpine

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3000

# Crear un usuario no root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Crear y usar directorio de trabajo
WORKDIR /app

# Copiar dependencias y código
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

# Cambiar permisos y usar usuario seguro
RUN chown -R appuser:appgroup /app
USER appuser

# Puerto expuesto
EXPOSE 3000

# Healthcheck opcional
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Comando de inicio
CMD ["npm", "start"]

