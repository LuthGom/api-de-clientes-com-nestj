- Uma API do tipo Rest CRUD completo para clientes e com autenticação de login por tokens.

- As Tecnologias pensadas para a construção do mesmo são:
## TypeScript
## Nestjs
## MongoDB

- Tecnologias a serem implementas:
## JWT
## Jest


# ROTAS DA API

### 📚 CLIENTES 📚

| Método     | Rota            | Descrição                  |
| ---------- | --------------- | -------------------------- |
| **GET**    | `/clientes`        | Lista todos os clientess      |
| **GET**    | `/clientes/{id}` | Busca o clientes pelo {id}    |
| **POST**   | `/clientes`        | Adiciona um novo clientes     |
| **POST** | `/clientes/:{id}`  | Login    |
| **PATCH**  | `/clientes/:{id}`  | Atualiza o clientes pelo {id} |
| **DELETE** | `/clientes/:{id}`  | Deleta o clientes pelo {id}   |


# EXEMPLO DE REQUISIÇÃO:
```json
  username: string,
  password: string

```
