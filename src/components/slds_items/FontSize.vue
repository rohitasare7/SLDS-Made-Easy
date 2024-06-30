<script setup>
const excludedProperties = [];

const copyStyleToClipboard = (event) => {
  const style = event.target.getAttribute('style');
  if (style) {
    // Split the style string into individual properties
    const styleProperties = style.split(';').filter(Boolean);

    // Filter out the excluded properties
    const filteredStyle = styleProperties.filter(prop => {
      return !excludedProperties.some(excludedProp => prop.trim().startsWith(excludedProp));
    });

    // Join the filtered properties back into a single style string
    const finalStyle = filteredStyle.join('; ');

    navigator.clipboard.writeText(finalStyle)
      .then(() => {
        alert('Style copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy style: ', err);
      });
  }
};
</script>

<template>
  <div class="ui-categories">
    <div class="font-size">
      <!-- <p class="ratio">Font sizes are scaled, based on the <code>--slds-g-font-size-base</code> property which sets the
        default font-size of the application.</p> -->
      <div class="scale-neg-4" @click="copyStyleToClipboard($event)" data-value="font-scale-neg-4" data-size="font-scale-neg-4"
        style="font-size: var(--slds-g-font-scale-neg-4);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-neg-3" @click="copyStyleToClipboard($event)" data-value="font-scale-neg-3" data-size="font-scale-neg-3"
        style="font-size: var(--slds-g-font-scale-neg-3);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-neg-2" @click="copyStyleToClipboard($event)" data-value="font-scale-neg-2" data-size="font-scale-neg-2"
        style="font-size: var(--slds-g-font-scale-neg-2);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-neg-1" @click="copyStyleToClipboard($event)" data-value="font-scale-neg-1" data-size="font-scale-neg-1"
        style="font-size: var(--slds-g-font-scale-neg-1);">The quick brown fox jumps over the lazy dog.</div>
      <div class="size-base" @click="copyStyleToClipboard($event)" data-value="font-size-base" data-size="font-size-base"
        style="font-size: var(--slds-g-font-size-base);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-1" @click="copyStyleToClipboard($event)" data-value="font-scale-1" data-size="font-scale-1"
        style="font-size: var(--slds-g-font-scale-1);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-2" @click="copyStyleToClipboard($event)" data-value="font-scale-2" data-size="font-scale-2"
        style="font-size: var(--slds-g-font-scale-2);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-3" @click="copyStyleToClipboard($event)" data-value="font-scale-3" data-size="font-scale-3"
        style="font-size: var(--slds-g-font-scale-3);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-4" @click="copyStyleToClipboard($event)" data-value="font-scale-4" data-size="font-scale-4"
        style="font-size: var(--slds-g-font-scale-4);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-5" @click="copyStyleToClipboard($event)" data-value="font-scale-5" data-size="font-scale-5"
        style="font-size: var(--slds-g-font-scale-5);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-6" @click="copyStyleToClipboard($event)" data-value="font-scale-6" data-size="font-scale-6"
        style="font-size: var(--slds-g-font-scale-6);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-7" @click="copyStyleToClipboard($event)" data-value="font-scale-7" data-size="font-scale-7"
        style="font-size: var(--slds-g-font-scale-7);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-8" @click="copyStyleToClipboard($event)" data-value="font-scale-8" data-size="font-scale-8"
        style="font-size: var(--slds-g-font-scale-8);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-9" @click="copyStyleToClipboard($event)" data-value="font-scale-9" data-size="font-scale-9"
        style="font-size: var(--slds-g-font-scale-9);">The quick brown fox jumps over the lazy dog.</div>
      <div class="scale-10" @click="copyStyleToClipboard($event)" data-value="font-scale-10" data-size="font-scale-10"
        style="font-size: var(--slds-g-font-scale-10);">The quick brown fox jumps over the lazy dog.</div>
    </div>
  </div>
</template>

<style scoped>
.font-size [data-value] {
  cursor: pointer;
  margin: 15px 0;
}
</style>
