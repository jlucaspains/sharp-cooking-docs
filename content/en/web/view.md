---
title: View a recipe
weight: 20
description: Viewing recipes and operations available
---

Sharp Cooking displays recipes using a timeline style which helps you know exactly when to start or continue cooking your recipe and breaks it down nicely in easy to consume bits. 


{{< ios-screenshot src="/images/ios_display.jpg" alt="iOS recipe display" >}}

### The multiplier feature
Use the multiplier feature when you want to cook more or less of a recipe. For instance, if you want half the servings, use the multiplier 0.5. If you want double the servings, use 2. The current multiplier will show beside the *Ingredients* label.

{{< hint type=tip >}}
Some people like decimals like 1.5 and other people prefer fractions like 1 1/2. Regardless of preference, Sharp Cooking can show your recipe ingredient quantities just right. Just tap this feature in the Settings page to toggle between the two modes.
{{< /hint >}}

{{< hint type=caution >}}
The multiplier only applies to ingredients so be careful with instructions where time-bound steps may need adjustments.
{{< /hint >}}

{{< ios-screenshot src="/images/ios_multiplier1x.jpg" alt="iOS recipe display with multiplier 1x" >}}
➡️
{{< ios-screenshot src="/images/ios_multiplierpopup.jpg" alt="iOS multiplier popup" >}}
➡️
{{< ios-screenshot src="/images/ios_multiplier2x.jpg" alt="iOS recipe display with multiplier 2x" >}}

### Cooking start time feature
To start cooking later but know exactly when it will be done later, use the start time feature. Just pick when you want to start cooking and Sharp Cooking will calculate all the steps. You can further adjust the interval between steps without time in the Settings page.

{{< hint type=tip >}}
Sharp Cooking assign 5 minutes by default between steps where time information (e.g. "bake for 30 min") is not given. You can adjust this time in the Settings page. Note that any value provided is treated as minutes.
{{< /hint >}}

{{< ios-screenshot src="/images/ios_multiplier1x.jpg" alt="iOS recipe display" >}}
➡️
{{< ios-screenshot src="/images/ios_timeselect.jpg" alt="iOS start time selection popup" >}}
➡️
{{< ios-screenshot src="/images/ios_timeafter.jpg" alt="iOS recipe display after new start time selection" >}}

### Printing a recipe
Sometimes you just want to have that recipe in a pice of good old paper. You can now print your recipes directly from Sharp Cooking app.

{{< ios-screenshot src="/images/ios_multiplier1x.jpg" alt="iOS recipe display" >}}
➡️
{{< ios-screenshot src="/images/ios_print.jpg" alt="iOS print display" >}}

## Keeping screen on
{{< hint type=warning >}}
iOS does not provide a builtin API for web applications to prevent the screen lock. As a workaround, Sharp Cooking will play a simple video without audio on a loop. Though the video has no audio, any other playing media will be stopped.
{{< /hint >}}
There is nothing more annoying than the phone screen shutting down while you are cooking and have something on your hands. You can now disable the screen lock right from the recipe display.

{{< ios-screenshot src="/images/ios_keepon.jpg" alt="iOS keep screen on" >}}