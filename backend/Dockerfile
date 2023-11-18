FROM eclipse-temurin:21-jdk-alpine AS builder
WORKDIR /app
COPY gradle gradle
COPY build.gradle settings.gradle gradlew ./
COPY src src

RUN ./gradlew clean build

FROM eclipse-temurin:21-jdk-alpine
COPY --from=builder /app/build/libs/backend-0.0.1-SNAPSHOT.war backend-0.0.1-SNAPSHOT.war
CMD ["java", "-jar", "backend-0.0.1-SNAPSHOT.war"]