---
title: Criar ou atualizar uma receita
weight: 30
description: Como criar ou atualizar uma receita
---

Criar ou ajustar uma receita é o mais simples possível. Existem, no entanto, algumas convenções que ajudarão suas receitas a parecer e funcionar melhor no Sharp Cooking:

1. Comece cada ingrediente com um número seguido de uma unidade de medida.
3. Mantenha a descrição do ingrediente curta. Use os campos de notas para qualquer descrição ou explicação longa
5. Ao indicar o tempo nas instruções, use a seguinte sintaxe onde x é um número: x min; x minuto; x minutos; x hora; x horas; x dia; x dias

Exemplo de ingredientes:
|Ingrediente|Bom?|Notas|
|-|-|-|
|1000 gramas de farinha|✔️|Perfeito!|
|10g de sal|✔️|Não precisa separar quantidade e UOM|
|1,5 bastões de manteiga|✔️|decimais estão bem|
|1/2 cenoura|✔️|Frações também são boas|
|1 1/2 limas|✔️|Frações compostas também funcionam. Observe que nenhuma conexão entre o número inteiro e a fração é necessária |
|1 ou 2 cenouras|❌|O recurso multiplicador não entenderá isso porque requer uma única quantidade de ingredientes|
|1 maço de coentro aparado e picado finamente|❌|O ingrediente é muito prolixo e a exibição pode não ficar bonita. Você pode mover os detalhes para a área de instruções e simplificar o ingrediente.|

Exemplo de instruções:
|Instruções|Bom?|Notas|
|-|-|-|
|Misture todos os ingredientes|✔️|A anotação do tempo não é necessária. Se omitido, uma quantidade de tempo configurável é assumida para exibição|
|Asse a 450F por 35 minutos|✔️|O tempo para esta etapa será lido como 35 minutos|
|Cozinhe por 15 minutos, tampe, cozinhe por mais 15 minutos e repita|❌|Várias instruções não são bem compreendidas. Cada operação com limite de tempo deve ser uma instrução dedicada.|
|Ferva por 20 segundos|❌|Apenas minutos, horas e dias são válidos para instruções com limite de tempo.|

## Add Manually
{{< hint type=tip >}}
Você pode usar a tecla enter para criar um novo ingrediente ou etapa e ir até ele.
{{< /hint >}}

{{< ios-screenshot src="/images/ios_add_options.jpg" alt="iOS add options" >}}
➡️
{{< ios-screenshot src="/images/ios_add_manually.jpg" alt="iOS add manually" >}}

## Importar de um site
O recurso de importação é muito simples, você fornece o URL de uma receita e o sharp-cooking faz o resto. É inteligente o suficiente para dividir os ingredientes e as etapas para você, então tudo que você precisa fazer é economizar.

A maioria dos sites de receitas modernos agora funcionará com o recurso de importação do Sharp Cooking. Se o seu site favorito não funcionar, crie um problema no [GitHub repository](https://github.com/jlucaspains/sharp-cooking-web/issues).

{{< hint type=tip >}}
Antes de importar uma receita de um site, você precisará do endereço da receita. Usando seu navegador favorito, navegue até a página da receita e copie seu endereço da barra de endereço do navegador antes de prosseguir.
{{< /hint >}}

{{< youtube FbJFDWgehGM >}}