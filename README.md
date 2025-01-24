# webServer

установка утилиты migrate

go install -tags 'postgres' github.com/golang-migrate/migrate/v4/cmd/migrate@latest

up/down migration at end "up" or "down"

migrate -path migrations -database "postgres://localhost:5432/apidb1?sslmode=disable&user=postgres&password=postgres" down
