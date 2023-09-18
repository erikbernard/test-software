## Projeto para disciplina verificação e validação de software

**Documentação de Casos de Teste:**

Aqui estão quatro cenários de teste para cada um dos métodos (create, read, update e delete) da classe `Student`.

**Teste de Criação (Create):**
1. **Cenário 1:** Adicionar um novo estudante com um ID único.
    - **Ação:** Chamar `createStudent` com um objeto `Student` válido e um `registrationId` único.
    - **Resultado Esperado:** O estudante deve ser adicionado à lista de estudantes.

2. **Cenário 2:** Tentar adicionar um estudante com um ID de registro que já existe.
    - **Ação:** Chamar `createStudent` com um objeto `Student` válido, mas com um `registrationId` que já existe na lista de estudantes.
    - **Resultado Esperado:** Nenhum estudante deve ser adicionado, e a lista de estudantes deve permanecer a mesma.

3. **Cenário 3:** Adicionar vários estudantes com IDs únicos.
    - **Ação:** Chamar `createStudent` várias vezes com objetos `Student` válidos e `registrationId` únicos.
    - **Resultado Esperado:** Todos os estudantes devem ser adicionados à lista de estudantes.

4. **Cenário 4:** Tentar adicionar um estudante com um objeto inválido.
    - **Ação:** Chamar `createStudent` com um objeto `Student` inválido (por exemplo, com campos em branco).
    - **Resultado Esperado:** Nenhum estudante deve ser adicionado, e a lista de estudantes deve permanecer a mesma.

**Teste de Leitura (Read):**
1. **Cenário 1:** Ler um estudante existente com um `registrationId` válido.
    - **Ação:** Chamar `readStudent` com um `registrationId` de um estudante existente.
    - **Resultado Esperado:** O estudante correspondente deve ser retornado.

2. **Cenário 2:** Tentar ler um estudante com um `registrationId` inválido.
    - **Ação:** Chamar `readStudent` com um `registrationId` que não corresponde a nenhum estudante.
    - **Resultado Esperado:** Deve ser retornado `null` para indicar que o estudante não foi encontrado.

3. **Cenário 3:** Ler um estudante após adicionar vários estudantes.
    - **Ação:** Adicionar vários estudantes à lista e, em seguida, chamar `readStudent` com um `registrationId` válido de um deles.
    - **Resultado Esperado:** O estudante correspondente deve ser retornado corretamente.

4. **Cenário 4:** Tentar ler um estudante com um `registrationId` que não existe após adicionar vários estudantes.
    - **Ação:** Adicionar vários estudantes à lista e, em seguida, chamar `readStudent` com um `registrationId` que não corresponde a nenhum estudante.
    - **Resultado Esperado:** Deve ser retornado `null`.

**Teste de Atualização (Update):**
1. **Cenário 1:** Atualizar um estudante existente com novos dados.
    - **Ação:** Adicionar um estudante à lista, chamar `updateStudent` com o mesmo `registrationId` e um objeto `Student` com dados atualizados.
    - **Resultado Esperado:** O estudante deve ser atualizado com os novos dados.

2. **Cenário 2:** Tentar atualizar um estudante com um `registrationId` inválido.
    - **Ação:** Chamar `updateStudent` com um `registrationId` que não corresponde a nenhum estudante.
    - **Resultado Esperado:** Nenhum estudante deve ser atualizado, e a lista de estudantes deve permanecer a mesma.

3. **Cenário 3:** Atualizar um estudante após adicionar vários estudantes.
    - **Ação:** Adicionar vários estudantes à lista, chamar `updateStudent` com o `registrationId` de um deles e um objeto `Student` com dados atualizados.
    - **Resultado Esperado:** O estudante correspondente deve ser atualizado com os novos dados.

4. **Cenário 4:** Tentar atualizar um estudante com dados inválidos.
    - **Ação:** Adicionar um estudante à lista e, em seguida, chamar `updateStudent` com o mesmo `registrationId`, mas com um objeto `Student` inválido.
    - **Resultado Esperado:** Nenhum estudante deve ser atualizado, e a lista de estudantes deve permanecer a mesma.

**Teste de Exclusão (Delete):**
1. **Cenário 1:** Excluir um estudante existente com um `registrationId` válido.
    - **Ação:** Adicionar um estudante à lista, chamar `deleteStudent` com o mesmo `registrationId` e confirmar a exclusão.
    - **Resultado Esperado:** O estudante deve ser removido da lista.

3. **Cenário 2:** Excluir um estudante após adicionar vários estudantes.
    - **Ação:** Adicionar vários estudantes à lista, chamar `deleteStudent` com o `registrationId` de um deles e confirmar a exclusão.
    - **Resultado Esperado:** O estudante correspondente deve ser removido da lista.

4. **Cenário 3:** Tentar excluir um estudante, mas cancelar a operação de exclusão.
    - **Ação:** Adicionar um estudante à lista, chamar `deleteStudent` com o `registrationId` de um deles e cancelar a operação de exclusão quando for solicitado.
    - **Resultado Esperado:** O estudante não deve ser excluído, e a lista de estudantes deve permanecer a mesma.