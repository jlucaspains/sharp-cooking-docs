---
title: Ver uma receita
weight: 20
description: Visualização de receitas e operações disponíveis
---

O Sharp Cooking exibe receitas usando um estilo de linha do tempo que ajuda você a saber exatamente quando começar ou continuar cozinhando sua receita e a divide em pedaços fáceis de consumir.

{{< ios-screenshot src="/images/ios_display.jpg" alt="iOS recipe display" >}}

## O recurso multiplicador
Use o recurso multiplicador quando quiser cozinhar mais ou menos de uma receita. Por exemplo, se você quiser metade das porções, use o multiplicador 0,5. Se quiser dobrar as porções, use 2. O multiplicador atual aparecerá ao lado do rótulo *Ingredientes*.

{{< hint type=tip >}}
Algumas pessoas gostam de decimais como 1,5 e outras preferem frações como 1 1/2. Independentemente da preferência, o Sharp Cooking pode mostrar as quantidades corretas de ingredientes da sua receita. Basta tocar nesse recurso na página Configurações para alternar entre os dois modos.
{{< /hint >}}

{{< hint type=caution >}}
O multiplicador se aplica apenas aos ingredientes, portanto, tenha cuidado com as instruções em que as etapas com limite de tempo podem precisar de ajustes.
{{< /hint >}}

{{< ios-screenshot src="/images/ios_multiplier1x.jpg" alt="iOS recipe display with multiplier 1x" >}}
➡️
{{< ios-screenshot src="/images/ios_multiplierpopup.jpg" alt="iOS multiplier popup" >}}
➡️
{{< ios-screenshot src="/images/ios_multiplier2x.jpg" alt="iOS recipe display with multiplier 2x" >}}

## Conversões de unidade de medida dos ingredientes
O Sharp Cooking calcula automaticamente conversões alternativas de unidade de medida para cada ingrediente. Por exemplo, um ingrediente listado como *300g* também pode ser exibido como *0,66 lb*, *0,3 kg* ou *10,58 oz*.

Para ver as alternativas, toque em qualquer ingrediente na lista. Um popup aparecerá mostrando a quantidade em todas as unidades suportadas. O multiplicador também é aplicado a todas as quantidades alternativas.

{{< hint type=tip >}}
Isso funciona melhor quando os ingredientes começam com uma quantidade e unidade reconhecidas. Consulte a página [Criar ou atualizar uma receita](/web/create) para dicas sobre como escrever ingredientes bem estruturados.
{{< /hint >}}

{{< ios-screenshot src="/images/ios_ingredient_detail.png" alt="iOS ingredient unit conversion popup" >}}

## Recurso de hora de início do cozimento
Para começar a cozinhar mais tarde, mas saber exatamente quando será feito mais tarde, use o recurso de hora de início. Basta escolher quando deseja começar a cozinhar e o Sharp Cooking calculará todas as etapas. Você pode ajustar ainda mais o intervalo entre as etapas sem tempo na página Configurações.

O Sharp Cooking detecta automaticamente o tempo a partir da linguagem natural no texto dos seus passos, então você não precisa inseri-lo separadamente. Por exemplo, *"Asse por 30 minutos"* é lido como 30 minutos, e *"Deixe crescer por 2 horas"* é lido como 2 horas. As unidades suportadas são minutos, horas e dias.

{{< hint type=tip >}}
O Sharp Cooking atribui 5 minutos por padrão entre os passos onde as informações de tempo (por exemplo, "asse por 30 min") não são fornecidas. Você pode ajustar esse tempo na página Configurações. Observe que qualquer valor fornecido é tratado como minutos.
{{< /hint >}}

{{< ios-screenshot src="/images/ios_multiplier1x.jpg" alt="iOS recipe display" >}}
➡️
{{< ios-screenshot src="/images/ios_timeselect.jpg" alt="iOS start time selection popup" >}}
➡️
{{< ios-screenshot src="/images/ios_timeafter.jpg" alt="iOS recipe display after new start time selection" >}}

## Imprimindo uma receita
Às vezes você só quer ter aquela receita em um pedaço de papel velho. Agora você pode imprimir suas receitas diretamente do aplicativo Sharp Cooking.

{{< ios-screenshot src="/images/ios_multiplier1x.jpg" alt="iOS recipe display" >}}
➡️
{{< ios-screenshot src="/images/ios_print.jpg" alt="iOS print display" >}}

## Mantendo a tela ligada
{{< hint type=warning >}}
O iOS não fornece uma API integrada para aplicativos da Web para evitar o bloqueio de tela. Como solução alternativa, o Sharp Cooking reproduzirá um vídeo simples sem áudio em um loop. Embora o vídeo não tenha áudio, qualquer outra mídia reproduzida será interrompida.
{{< /hint >}}
Não há nada mais irritante do que a tela do telefone desligando enquanto você cozinha e tem algo em mãos. Agora você pode desativar o bloqueio de tela diretamente na exibição da receita.

{{< ios-screenshot src="/images/ios_keepon.jpg" alt="iOS keep screen on" >}}

## Popup de detalhes do passo
Ao cozinhar, toque em qualquer passo na linha do tempo para abrir um popup com o texto completo do passo. Isso é útil quando um passo é longo e a visualização da linha do tempo está truncada.

Se o passo contiver uma temperatura (por exemplo, *"Asse a 200°C"*), o popup também mostra o equivalente convertido na outra unidade — passos em Celsius são exibidos com o equivalente em Fahrenheit e vice-versa.

{{< ios-screenshot src="/images/ios_step_details.png" alt="iOS step detail popup with temperature conversion" >}}

## Informações nutricionais
{{< hint type=important >}}
O formato do rótulo e os valores diários são baseados em uma dieta de 2000 calorias conforme recomendado pela [FDA](https://www.fda.gov/food/nutrition-education-resources-materials/nutrition-facts-label). Embora o recurso esteja disponível em qualquer lugar do planeta, os valores recomendados pela FDA são usados como referência.
{{< /hint >}}

O Sharp Cooking pode mostrar as informações nutricionais da sua receita. Você pode importar as informações nutricionais junto com suas receitas, se disponíveis na fonte, ou adicioná-las manualmente. As informações nutricionais serão exibidas na página de visualização da receita.

{{< hint type=tip >}}
Você pode usar analisadores de nutrição online, como o disponível em [verywellfit](https://www.verywellfit.com/recipe-nutrition-analyzer-4157076). Use os dados gerados para adicionar manualmente as informações nutricionais às suas receitas.
{{< /hint >}}

{{< ios-screenshot src="/images/ios_displaywithnutrition.png" alt="iOS recipe display with nutrition" >}}
➡️
{{< ios-screenshot src="/images/ios_nutritionlabel.png" alt="iOS nutrition label" >}}

Para adicionar manualmente as informações nutricionais a uma receita, edite a receita e insira os valores como números inteiros. Você também pode usar o botão **Gerar com IA** para preencher automaticamente as informações nutricionais usando IA — isso requer que o Assistente de IA esteja configurado na página de Recursos em Preview.

{{< ios-screenshot src="/images/ios_editnutrition.png" alt="iOS edit nutrition label" >}}