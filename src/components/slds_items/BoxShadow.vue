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
  <div class="shadow">
    <div @click="copyStyleToClipboard($event)" class="shadow-1" data-value="shadow-1" title="0px 2px 2px 0px rgba(0,0,0,0.1)"
      style="box-shadow: var(--slds-g-shadow-1);">shadow-1 <span class="display-value"></span></div>
    <div @click="copyStyleToClipboard($event)" class="shadow-2" data-value="shadow-2" title="0px 2px 3px 0px rgba(0,0,0,0.15)"
      style="box-shadow: var(--slds-g-shadow-2);">shadow-2 <span class="display-value"></span></div>
    <div @click="copyStyleToClipboard($event)" class="shadow-3" data-value="shadow-3"
      title="0px -1px 3px 0px rgba(24,24,24,0.01),0 1px 2px -5px rgba(24,24,24,0.04),0 2px 5px -5px rgba(24,24,24,0.04),0 4px 12px -5px rgba(24,24,24,0.03),0 12px 15px -5px rgba(24,24,24,0.06)"
      style="box-shadow: var(--slds-g-shadow-3);">shadow-3 <span class="display-value"></span></div>
    <div @click="copyStyleToClipboard($event)" class="shadow-4" data-value="shadow-4"
      title="0 -2px 5px 0 rgba(24,24,24,0.01),0 1px 1px -2px rgba(24,24,24,0.04),0 2px 2px -2px rgba(24,24,24,0.04),0 5px 5px -2px rgba(24,24,24,0.03),0 12px 15px -5px rgba(24,24,24,0.03),0 16px 16px -2px rgba(24,24,24,0.06)"
      style="box-shadow: var(--slds-g-shadow-4);">shadow-4 <span class="display-value"></span></div>
  </div>
</template>

<style scoped>
.shadow [data-value] {
  cursor: pointer;
}
</style>
