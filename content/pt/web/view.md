---
title: Ver uma receita
weight: 20
description: Visualização de receitas e operações disponíveis
---

O Sharp Cooking exibe receitas usando um estilo de linha do tempo que ajuda você a saber exatamente quando começar ou continuar cozinhando sua receita e a divide em pedaços fáceis de consumir.

{{< ios-screenshot src="/images/ios_display.jpg" alt="iOS recipe display" >}}

### O recurso multiplicador
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

### Recurso de hora de início do cozimento
Para começar a cozinhar mais tarde, mas saber exatamente quando será feito mais tarde, use o recurso de hora de início. Basta escolher quando deseja começar a cozinhar e o Sharp Cooking calculará todas as etapas. Você pode ajustar ainda mais o intervalo entre as etapas sem tempo na página Configurações.

{{< hint type=tip >}}
Sharp Cooking assign 5 minutes by default between steps where time information (e.g. "bake for 30 min") is not given. You can adjust this time in the Settings page. Note that any value provided is treated as minutes.
{{< /hint >}}

{{< ios-screenshot src="/images/ios_multiplier1x.jpg" alt="iOS recipe display" >}}
➡️
{{< ios-screenshot src="/images/ios_timeselect.jpg" alt="iOS start time selection popup" >}}
➡️
{{< ios-screenshot src="/images/ios_timeafter.jpg" alt="iOS recipe display after new start time selection" >}}

### Imprimindo uma receita
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