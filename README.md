# webServer

установка утилиты migrate

https://github.com/golang-migrate/migrate/blob/master/cmd/migrate/README.md

```go get -u -d github.com/golang-migrate/migrate/cmd/migrate```
```cd $GOPATH/src/github.com/golang-migrate/migrate/cmd/migrate```
```git checkout $TAG  # e.g. v4.1.0```
```// Go 1.15 and below```
```go build -tags 'postgres' -ldflags="-X main.Version=$(git describe --tags)" -o $GOPATH/bin/migrate $GOPATH/src/github.com/golang-migrate/migrate/cmd/migrate```
```// Go 1.16+```
```go install -tags 'postgres' github.com/golang-migrate/migrate/v4/cmd/migrate@$TAG```



создаём 2 файла миграции
```migrate create -ext sql -dir migrations UserCeartionMigration```




up/down migration at end "up" or "down"

migrate -path migrations -database "postgres://localhost:5432/apidb1?sslmode=disable&user=postgres&password=postgres" down

