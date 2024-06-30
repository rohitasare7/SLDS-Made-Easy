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
  <div class="border-radius">
    <div @click="copyStyleToClipboard($event)" class="border-1" data-value="radius-border-1" title="0.125rem"
      style="border-radius: var(--slds-g-radius-border-1);">radius-border-1 <span class="display-value">0.125rem</span>
    </div>
    <div @click="copyStyleToClipboard($event)" class="border-2" data-value="radius-border-2" title="0.25rem"
      style="border-radius: var(--slds-g-radius-border-2);">radius-border-2 <span class="display-value">0.25rem</span>
    </div>
    <div @click="copyStyleToClipboard($event)" class="border-3" data-value="radius-border-3" title="0.5rem"
      style="border-radius: var(--slds-g-radius-border-3);">radius-border-3 <span class="display-value">0.5rem</span>
    </div>
    <div @click="copyStyleToClipboard($event)" class="border-4" data-value="radius-border-4" title="1rem"
      style="border-radius: var(--slds-g-radius-border-4);">radius-border-4 <span class="display-value">1rem</span>
    </div>
    <div @click="copyStyleToClipboard($event)" class="border-circle" data-value="radius-border-circle" title="100%"
      style="border-radius: var(--slds-g-radius-border-circle);">radius-circle <span class="display-value">100%</span>
    </div>
    <div @click="copyStyleToClipboard($event)" class="border-pill" data-value="radius-border-pill" title="15rem"
      style="border-radius: var(--slds-g-radius-border-pill);">radius-border-pill <span
        class="display-value">15rem</span></div>
  </div>
</template>

<style scoped>
.border-radius {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr var(--sds-g-sizing-9);
    gap: 1rem;
    cursor: pointer;
}

.border-radius .border-pill {
    height: var(--sds-g-sizing-9);
    aspect-ratio: unset;
}
</style>
