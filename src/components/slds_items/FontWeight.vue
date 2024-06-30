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
  <div class="font-weight">
    <!-- <p>Font weights are available in a range where <code>--slds-g-font-weight-4</code> is normal weight.</p> -->
    <div class="weight-1" @click="copyStyleToClipboard($event)" data-value="font-weight-1" data-size="font-weight-1"
      style="font-weight: var(--slds-g-font-weight-1);">The quick brown fox jumps over the lazy dog.</div>
    <div class="weight-2" @click="copyStyleToClipboard($event)" data-value="font-weight-2" data-size="font-weight-2"
      style="font-weight: var(--slds-g-font-weight-2);">The quick brown fox jumps over the lazy dog.</div>
    <div class="weight-3" @click="copyStyleToClipboard($event)" data-value="font-weight-3" data-size="font-weight-3"
      style="font-weight: var(--slds-g-font-weight-3);">The quick brown fox jumps over the lazy dog.</div>
    <div class="weight-4" @click="copyStyleToClipboard($event)" data-value="font-weight-4" data-size="font-weight-4"
      style="font-weight: var(--slds-g-font-weight-4);">The quick brown fox jumps over the lazy dog.</div>
    <div class="weight-5" @click="copyStyleToClipboard($event)" data-value="font-weight-5" data-size="font-weight-5"
      style="font-weight: var(--slds-g-font-weight-5);">The quick brown fox jumps over the lazy dog.</div>
    <div class="weight-6" @click="copyStyleToClipboard($event)" data-value="font-weight-6" data-size="font-weight-6"
      style="font-weight: var(--slds-g-font-weight-6);">The quick brown fox jumps over the lazy dog.</div>
    <div class="weight-7" @click="copyStyleToClipboard($event)" data-value="font-weight-7" data-size="font-weight-7"
      style="font-weight: var(--slds-g-font-weight-7);">The quick brown fox jumps over the lazy dog.</div>
  </div>
</template>

<style scoped>
.font-weight [data-value] {
  cursor: pointer;
  margin: 15px 0;
  font-size: var(--slds-g-font-scale-7);
}
</style>
