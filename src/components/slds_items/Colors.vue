<script setup>
const excludedProperties = ['color'];

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
  <div class="ui-colors">
    <div class="color-palettes">
      <div data-value="palette-blue-10" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-10); color: white;"
        title="#001639">blue-10 <span class="display-value">#001639</span></div>
      <div data-value="palette-blue-15" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-15); color: white;"
        title="#03234d">blue-15 <span class="display-value">#03234d</span></div>
      <div data-value="palette-blue-20" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-20); color: white;"
        title="#032d60">blue-20 <span class="display-value">#032d60</span></div>
      <div data-value="palette-blue-30" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-30); color: white;"
        title="#014486">blue-30 <span class="display-value">#014486</span></div>
      <div data-value="palette-blue-40" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-40); color: white;"
        title="#0b5cab">blue-40 <span class="display-value">#0b5cab</span></div>
      <div data-value="palette-blue-50" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-50); color: white;"
        title="#0176d3">blue-50 <span class="display-value">#0176d3</span></div>
      <div data-value="palette-blue-60" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-60); color: white;"
        title="#1b96ff">blue-60 <span class="display-value">#1b96ff</span></div>
      <div data-value="palette-blue-65" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-65); color: black;"
        title="#57a3fd">blue-65 <span class="display-value">#57a3fd</span></div>
      <div data-value="palette-blue-70" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-70); color: black;"
        title="#78b0fd">blue-70 <span class="display-value">#78b0fd</span></div>
      <div data-value="palette-blue-80" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-80); color: black;"
        title="#aacbff">blue-80 <span class="display-value">#aacbff</span></div>
      <div data-value="palette-blue-90" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-90); color: black;"
        title="#d8e6fe">blue-90 <span class="display-value">#d8e6fe</span></div>
      <div data-value="palette-blue-95" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-blue-95); color: black;"
        title="#eef4ff">blue-95 <span class="display-value">#eef4ff</span></div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-cloud-blue-10"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-10); color: white;" title="#001a28">cloud-blue-10
        <span class="display-value">#001a28</span>
      </div>
      <div data-value="palette-cloud-blue-15"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-15); color: white;" title="#0a2636">cloud-blue-15
        <span class="display-value">#0a2636</span>
      </div>
      <div data-value="palette-cloud-blue-20"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-20); color: white;" title="#023248">cloud-blue-20
        <span class="display-value">#023248</span>
      </div>
      <div data-value="palette-cloud-blue-30"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-30); color: white;" title="#084968">cloud-blue-30
        <span class="display-value">#084968</span>
      </div>
      <div data-value="palette-cloud-blue-40"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-40); color: white;" title="#05628a">cloud-blue-40
        <span class="display-value">#05628a</span>
      </div>
      <div data-value="palette-cloud-blue-50"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-50); color: white;" title="#107cad">cloud-blue-50
        <span class="display-value">#107cad</span>
      </div>
      <div data-value="palette-cloud-blue-60"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-60); color: white;" title="#0d9dda">cloud-blue-60
        <span class="display-value">#0d9dda</span>
      </div>
      <div data-value="palette-cloud-blue-65"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-65); color: black;" title="#08abed">cloud-blue-65
        <span class="display-value">#08abed</span>
      </div>
      <div data-value="palette-cloud-blue-70"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-70); color: black;" title="#1ab9ff">cloud-blue-70
        <span class="display-value">#1ab9ff</span>
      </div>
      <div data-value="palette-cloud-blue-80"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-80); color: black;" title="#90d0fe">cloud-blue-80
        <span class="display-value">#90d0fe</span>
      </div>
      <div data-value="palette-cloud-blue-90"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-90); color: black;" title="#cfe9fe">cloud-blue-90
        <span class="display-value">#cfe9fe</span>
      </div>
      <div data-value="palette-cloud-blue-95"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-cloud-blue-95); color: black;" title="#eaf5fe">cloud-blue-95
        <span class="display-value">#eaf5fe</span>
      </div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-green-10" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-10); color: white;"
        title="#071b12">green-10 <span class="display-value">#071b12</span></div>
      <div data-value="palette-green-15" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-15); color: white;"
        title="#0c2912">green-15 <span class="display-value">#0c2912</span></div>
      <div data-value="palette-green-20" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-20); color: white;"
        title="#1c3326">green-20 <span class="display-value">#1c3326</span></div>
      <div data-value="palette-green-30" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-30); color: white;"
        title="#194e31">green-30 <span class="display-value">#194e31</span></div>
      <div data-value="palette-green-40" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-40); color: white;"
        title="#396547">green-40 <span class="display-value">#396547</span></div>
      <div data-value="palette-green-50" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-50); color: white;"
        title="#2e844a">green-50 <span class="display-value">#2e844a</span></div>
      <div data-value="palette-green-60" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-60); color: white;"
        title="#3ba755">green-60 <span class="display-value">#3ba755</span></div>
      <div data-value="palette-green-65" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-65); color: black;"
        title="#41b658">green-65 <span class="display-value">#41b658</span></div>
      <div data-value="palette-green-70" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-70); color: black;"
        title="#45c65a">green-70 <span class="display-value">#45c65a</span></div>
      <div data-value="palette-green-80" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-80); color: black;"
        title="#91db8b">green-80 <span class="display-value">#91db8b</span></div>
      <div data-value="palette-green-90" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-90); color: black;"
        title="#cdefc4">green-90 <span class="display-value">#cdefc4</span></div>
      <div data-value="palette-green-95" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-green-95); color: black;"
        title="#ebf7e6">green-95 <span class="display-value">#ebf7e6</span></div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-hot-orange-10"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-10); color: white;" title="#281202">hot-orange-10
        <span class="display-value">#281202</span>
      </div>
      <div data-value="palette-hot-orange-15"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-15); color: white;" title="#421604">hot-orange-15
        <span class="display-value">#421604</span>
      </div>
      <div data-value="palette-hot-orange-20"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-20); color: white;" title="#4a2413">hot-orange-20
        <span class="display-value">#4a2413</span>
      </div>
      <div data-value="palette-hot-orange-30"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-30); color: white;" title="#7e2600">hot-orange-30
        <span class="display-value">#7e2600</span>
      </div>
      <div data-value="palette-hot-orange-40"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-40); color: white;" title="#aa3001">hot-orange-40
        <span class="display-value">#aa3001</span>
      </div>
      <div data-value="palette-hot-orange-50"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-50); color: white;" title="#d83a00">hot-orange-50
        <span class="display-value">#d83a00</span>
      </div>
      <div data-value="palette-hot-orange-60"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-60); color: black;" title="#ff5d2d">hot-orange-60
        <span class="display-value">#ff5d2d</span>
      </div>
      <div data-value="palette-hot-orange-65"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-65); color: black;" title="#ff784f">hot-orange-65
        <span class="display-value">#ff784f</span>
      </div>
      <div data-value="palette-hot-orange-70"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-70); color: black;" title="#ff906e">hot-orange-70
        <span class="display-value">#ff906e</span>
      </div>
      <div data-value="palette-hot-orange-80"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-80); color: black;" title="#feb9a5">hot-orange-80
        <span class="display-value">#feb9a5</span>
      </div>
      <div data-value="palette-hot-orange-90"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-90); color: black;" title="#ffded5">hot-orange-90
        <span class="display-value">#ffded5</span>
      </div>
      <div data-value="palette-hot-orange-95"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-hot-orange-95); color: black;" title="#fef1ed">hot-orange-95
        <span class="display-value">#fef1ed</span>
      </div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-indigo-10" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-10); color: white;"
        title="#200647">indigo-10 <span class="display-value">#200647</span></div>
      <div data-value="palette-indigo-15" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-15); color: white;"
        title="#1f0974">indigo-15 <span class="display-value">#1f0974</span></div>
      <div data-value="palette-indigo-20" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-20); color: white;"
        title="#321d71">indigo-20 <span class="display-value">#321d71</span></div>
      <div data-value="palette-indigo-30" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-30); color: white;"
        title="#2f2cb7">indigo-30 <span class="display-value">#2f2cb7</span></div>
      <div data-value="palette-indigo-40" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-40); color: white;"
        title="#3a49da">indigo-40 <span class="display-value">#3a49da</span></div>
      <div data-value="palette-indigo-50" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-50); color: white;"
        title="#5867e8">indigo-50 <span class="display-value">#5867e8</span></div>
      <div data-value="palette-indigo-60" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-60); color: black;"
        title="#7f8ced">indigo-60 <span class="display-value">#7f8ced</span></div>
      <div data-value="palette-indigo-65" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-65); color: black;"
        title="#8e9bef">indigo-65 <span class="display-value">#8e9bef</span></div>
      <div data-value="palette-indigo-70" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-70); color: black;"
        title="#9ea9f1">indigo-70 <span class="display-value">#9ea9f1</span></div>
      <div data-value="palette-indigo-80" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-80); color: black;"
        title="#bec7f6">indigo-80 <span class="display-value">#bec7f6</span></div>
      <div data-value="palette-indigo-90" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-90); color: black;"
        title="#e0e5f8">indigo-90 <span class="display-value">#e0e5f8</span></div>
      <div data-value="palette-indigo-95" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-indigo-95); color: black;"
        title="#f1f3fb">indigo-95 <span class="display-value">#f1f3fb</span></div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-orange-10" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-10); color: white;"
        title="#201600">orange-10 <span class="display-value">#201600</span></div>
      <div data-value="palette-orange-15" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-15); color: white;"
        title="#371e03">orange-15 <span class="display-value">#371e03</span></div>
      <div data-value="palette-orange-20" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-20); color: white;"
        title="#3e2b02">orange-20 <span class="display-value">#3e2b02</span></div>
      <div data-value="palette-orange-30" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-30); color: white;"
        title="#5f3e02">orange-30 <span class="display-value">#5f3e02</span></div>
      <div data-value="palette-orange-40" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-40); color: white;"
        title="#825101">orange-40 <span class="display-value">#825101</span></div>
      <div data-value="palette-orange-50" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-50); color: white;"
        title="#a96404">orange-50 <span class="display-value">#a96404</span></div>
      <div data-value="palette-orange-60" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-60); color: black;"
        title="#dd7a01">orange-60 <span class="display-value">#dd7a01</span></div>
      <div data-value="palette-orange-65" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-65); color: black;"
        title="#f38303">orange-65 <span class="display-value">#f38303</span></div>
      <div data-value="palette-orange-70" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-70); color: black;"
        title="#fe9339">orange-70 <span class="display-value">#fe9339</span></div>
      <div data-value="palette-orange-80" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-80); color: black;"
        title="#ffba90">orange-80 <span class="display-value">#ffba90</span></div>
      <div data-value="palette-orange-90" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-90); color: black;"
        title="#fedfd0">orange-90 <span class="display-value">#fedfd0</span></div>
      <div data-value="palette-orange-95" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-orange-95); color: black;"
        title="#fff1ea">orange-95 <span class="display-value">#fff1ea</span></div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-pink-10" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-10); color: white;"
        title="#370114">pink-10 <span class="display-value">#370114</span></div>
      <div data-value="palette-pink-15" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-15); color: white;"
        title="#4b0620">pink-15 <span class="display-value">#4b0620</span></div>
      <div data-value="palette-pink-20" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-20); color: white;"
        title="#61022a">pink-20 <span class="display-value">#61022a</span></div>
      <div data-value="palette-pink-30" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-30); color: white;"
        title="#8a033e">pink-30 <span class="display-value">#8a033e</span></div>
      <div data-value="palette-pink-40" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-40); color: white;"
        title="#b60554">pink-40 <span class="display-value">#b60554</span></div>
      <div data-value="palette-pink-50" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-50); color: white;"
        title="#e3066a">pink-50 <span class="display-value">#e3066a</span></div>
      <div data-value="palette-pink-60" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-60); color: black;"
        title="#ff538a">pink-60 <span class="display-value">#ff538a</span></div>
      <div data-value="palette-pink-65" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-65); color: black;"
        title="#fe7298">pink-65 <span class="display-value">#fe7298</span></div>
      <div data-value="palette-pink-70" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-70); color: black;"
        title="#fe8aa7">pink-70 <span class="display-value">#fe8aa7</span></div>
      <div data-value="palette-pink-80" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-80); color: black;"
        title="#fdb6c5">pink-80 <span class="display-value">#fdb6c5</span></div>
      <div data-value="palette-pink-90" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-90); color: black;"
        title="#fddde3">pink-90 <span class="display-value">#fddde3</span></div>
      <div data-value="palette-pink-95" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-pink-95); color: black;"
        title="#fef0f3">pink-95 <span class="display-value">#fef0f3</span></div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-purple-10" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-10); color: white;"
        title="#240643">purple-10 <span class="display-value">#240643</span></div>
      <div data-value="palette-purple-15" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-15); color: white;"
        title="#300b60">purple-15 <span class="display-value">#300b60</span></div>
      <div data-value="palette-purple-20" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-20); color: white;"
        title="#401075">purple-20 <span class="display-value">#401075</span></div>
      <div data-value="palette-purple-30" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-30); color: white;"
        title="#5a1ba9">purple-30 <span class="display-value">#5a1ba9</span></div>
      <div data-value="palette-purple-40" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-40); color: white;"
        title="#7526e3">purple-40 <span class="display-value">#7526e3</span></div>
      <div data-value="palette-purple-50" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-50); color: white;"
        title="#9050e9">purple-50 <span class="display-value">#9050e9</span></div>
      <div data-value="palette-purple-60" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-60); color: black;"
        title="#ad7bee">purple-60 <span class="display-value">#ad7bee</span></div>
      <div data-value="palette-purple-65" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-65); color: black;"
        title="#b78def">purple-65 <span class="display-value">#b78def</span></div>
      <div data-value="palette-purple-70" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-70); color: black;"
        title="#c29ef1">purple-70 <span class="display-value">#c29ef1</span></div>
      <div data-value="palette-purple-80" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-80); color: black;"
        title="#d7bff2">purple-80 <span class="display-value">#d7bff2</span></div>
      <div data-value="palette-purple-90" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-90); color: black;"
        title="#ece1f9">purple-90 <span class="display-value">#ece1f9</span></div>
      <div data-value="palette-purple-95" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-purple-95); color: black;"
        title="#f6f2fb">purple-95 <span class="display-value">#f6f2fb</span></div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-red-10" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-10); color: white;"
        title="#300c01">red-10 <span class="display-value">#300c01</span></div>
      <div data-value="palette-red-15" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-15); color: white;"
        title="#4a0c04">red-15 <span class="display-value">#4a0c04</span></div>
      <div data-value="palette-red-20" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-20); color: white;"
        title="#640103">red-20 <span class="display-value">#640103</span></div>
      <div data-value="palette-red-30" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-30); color: white;"
        title="#8e030f">red-30 <span class="display-value">#8e030f</span></div>
      <div data-value="palette-red-40" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-40); color: white;"
        title="#ba0517">red-40 <span class="display-value">#ba0517</span></div>
      <div data-value="palette-red-50" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-50); color: white;"
        title="#ea001e">red-50 <span class="display-value">#ea001e</span></div>
      <div data-value="palette-red-60" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-60); color: black;"
        title="#fe5c4c">red-60 <span class="display-value">#fe5c4c</span></div>
      <div data-value="palette-red-65" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-65); color: black;"
        title="#fe7765">red-65 <span class="display-value">#fe7765</span></div>
      <div data-value="palette-red-70" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-70); color: black;"
        title="#fe8f7d">red-70 <span class="display-value">#fe8f7d</span></div>
      <div data-value="palette-red-80" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-80); color: black;"
        title="#feb8ab">red-80 <span class="display-value">#feb8ab</span></div>
      <div data-value="palette-red-90" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-90); color: black;"
        title="#feded8">red-90 <span class="display-value">#feded8</span></div>
      <div data-value="palette-red-95" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-red-95); color: black;"
        title="#fef1ee">red-95 <span class="display-value">#fef1ee</span></div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-teal-10" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-10); color: white;"
        title="#071b12">teal-10 <span class="display-value">#071b12</span></div>
      <div data-value="palette-teal-15" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-15); color: white;"
        title="#072825">teal-15 <span class="display-value">#072825</span></div>
      <div data-value="palette-teal-20" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-20); color: white;"
        title="#023434">teal-20 <span class="display-value">#023434</span></div>
      <div data-value="palette-teal-30" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-30); color: white;"
        title="#024d4c">teal-30 <span class="display-value">#024d4c</span></div>
      <div data-value="palette-teal-40" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-40); color: white;"
        title="#056764">teal-40 <span class="display-value">#056764</span></div>
      <div data-value="palette-teal-50" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-50); color: white;"
        title="#0b827c">teal-50 <span class="display-value">#0b827c</span></div>
      <div data-value="palette-teal-60" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-60); color: white;"
        title="#06a59a">teal-60 <span class="display-value">#06a59a</span></div>
      <div data-value="palette-teal-65" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-65); color: white;"
        title="#03b4a7">teal-65 <span class="display-value">#03b4a7</span></div>
      <div data-value="palette-teal-70" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-70); color: black;"
        title="#01c3b3">teal-70 <span class="display-value">#01c3b3</span></div>
      <div data-value="palette-teal-80" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-80); color: black;"
        title="#04e1cb">teal-80 <span class="display-value">#04e1cb</span></div>
      <div data-value="palette-teal-90" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-90); color: black;"
        title="#acf3e4">teal-90 <span class="display-value">#acf3e4</span></div>
      <div data-value="palette-teal-95" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-teal-95); color: black;"
        title="#def9f3">teal-95 <span class="display-value">#def9f3</span></div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-violet-10" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-10); color: white;"
        title="#2e0039">violet-10 <span class="display-value">#2e0039</span></div>
      <div data-value="palette-violet-15" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-15); color: white;"
        title="#3d0157">violet-15 <span class="display-value">#3d0157</span></div>
      <div data-value="palette-violet-20" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-20); color: white;"
        title="#481a54">violet-20 <span class="display-value">#481a54</span></div>
      <div data-value="palette-violet-30" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-30); color: white;"
        title="#730394">violet-30 <span class="display-value">#730394</span></div>
      <div data-value="palette-violet-40" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-40); color: white;"
        title="#9602c7">violet-40 <span class="display-value">#9602c7</span></div>
      <div data-value="palette-violet-50" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-50); color: white;"
        title="#ba01ff">violet-50 <span class="display-value">#ba01ff</span></div>
      <div data-value="palette-violet-60" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-60); color: black;"
        title="#cb65ff">violet-60 <span class="display-value">#cb65ff</span></div>
      <div data-value="palette-violet-65" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-65); color: black;"
        title="#d17dfe">violet-65 <span class="display-value">#d17dfe</span></div>
      <div data-value="palette-violet-70" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-70); color: black;"
        title="#d892fe">violet-70 <span class="display-value">#d892fe</span></div>
      <div data-value="palette-violet-80" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-80); color: black;"
        title="#e5b9fe">violet-80 <span class="display-value">#e5b9fe</span></div>
      <div data-value="palette-violet-90" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-90); color: black;"
        title="#f2defe">violet-90 <span class="display-value">#f2defe</span></div>
      <div data-value="palette-violet-95" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-violet-95); color: black;"
        title="#f9f0ff">violet-95 <span class="display-value">#f9f0ff</span></div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-yellow-10" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-10); color: white;"
        title="#281202">yellow-10 <span class="display-value">#281202</span></div>
      <div data-value="palette-yellow-15" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-15); color: white;"
        title="#2e2204">yellow-15 <span class="display-value">#2e2204</span></div>
      <div data-value="palette-yellow-20" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-20); color: white;"
        title="#4f2100">yellow-20 <span class="display-value">#4f2100</span></div>
      <div data-value="palette-yellow-30" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-30); color: white;"
        title="#6f3400">yellow-30 <span class="display-value">#6f3400</span></div>
      <div data-value="palette-yellow-40" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-40); color: white;"
        title="#8c4b02">yellow-40 <span class="display-value">#8c4b02</span></div>
      <div data-value="palette-yellow-50" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-50); color: white;"
        title="#a86403">yellow-50 <span class="display-value">#a86403</span></div>
      <div data-value="palette-yellow-60" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-60); color: black;"
        title="#ca8501">yellow-60 <span class="display-value">#ca8501</span></div>
      <div data-value="palette-yellow-65" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-65); color: black;"
        title="#d79304">yellow-65 <span class="display-value">#d79304</span></div>
      <div data-value="palette-yellow-70" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-70); color: black;"
        title="#e4a201">yellow-70 <span class="display-value">#e4a201</span></div>
      <div data-value="palette-yellow-80" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-80); color: black;"
        title="#fcc003">yellow-80 <span class="display-value">#fcc003</span></div>
      <div data-value="palette-yellow-90" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-90); color: black;"
        title="#f9e3b6">yellow-90 <span class="display-value">#f9e3b6</span></div>
      <div data-value="palette-yellow-95" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-yellow-95); color: black;"
        title="#fbf3e0">yellow-95 <span class="display-value">#fbf3e0</span></div>
    </div>
    <div class="color-palettes">
      <div data-value="palette-neutral-10"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-10); color: white;" title="#181818">neutral-10 <span
          class="display-value">#181818</span></div>
      <div data-value="palette-neutral-15"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-15); color: white;" title="#242424">neutral-15 <span
          class="display-value">#242424</span></div>
      <div data-value="palette-neutral-20"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-20); color: white;" title="#2e2e2e">neutral-20 <span
          class="display-value">#2e2e2e</span></div>
      <div data-value="palette-neutral-30"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-30); color: white;" title="#444">neutral-30 <span
          class="display-value">#444</span></div>
      <div data-value="palette-neutral-40"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-40); color: white;" title="#5c5c5c">neutral-40 <span
          class="display-value">#5c5c5c</span></div>
      <div data-value="palette-neutral-50"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-50); color: white;" title="#747474">neutral-50 <span
          class="display-value">#747474</span></div>
      <div data-value="palette-neutral-60"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-60); color: black;" title="#939393">neutral-60 <span
          class="display-value">#939393</span></div>
      <div data-value="palette-neutral-65"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-65); color: black;" title="#a0a0a0">neutral-65 <span
          class="display-value">#a0a0a0</span></div>
      <div data-value="palette-neutral-70"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-70); color: black;" title="#aeaeae">neutral-70 <span
          class="display-value">#aeaeae</span></div>
      <div data-value="palette-neutral-80"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-80); color: black;" title="#c9c9c9">neutral-80 <span
          class="display-value">#c9c9c9</span></div>
      <div data-value="palette-neutral-90"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-90); color: black;" title="#e5e5e5">neutral-90 <span
          class="display-value">#e5e5e5</span></div>
      <div data-value="palette-neutral-95"
        @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-palette-neutral-95); color: black;" title="#f3f3f3">neutral-95 <span
          class="display-value">#f3f3f3</span></div>
      <div data-value="neutral-base-100" @click="copyStyleToClipboard($event)" style="background-color: var(--slds-g-color-neutral-base-100); color: black; box-shadow: var(--sds-g-shadow-2); border: 1px solid var(--slds-g-color-palette-neutral-95);"
        title="#fff">neutral-base-100 <span class="display-value">#fff</span></div>
    </div>
  </div>
</template>

<style scoped>
.ui-colors {
  margin-bottom: 1rem;
}

.ui-colors [data-value] {
  border-radius: 8px;
  /* -webkit-box-shadow: 0 3px 5px -2px rgba(24, 24, 24, .031372549), 0 7px 14px -5px rgba(24, 24, 24, .062745098), inset 0 0 0 1px rgba(24, 24, 24, .0823529412);
  box-shadow: 0 3px 5px -2px rgba(24, 24, 24, .031372549), 0 7px 14px -5px rgba(24, 24, 24, .062745098), inset 0 0 0 1px rgba(24, 24, 24, .0823529412); */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: .25rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  font-size: var(--sds-g-font-scale-neg-3);
  font-family: var(--sds-g-font-family-monospace)
}

.color-palettes {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
  margin-block: 1rem;
  cursor: pointer;
}

@media(min-width: 1024px) {
  .color-palettes {
    grid-template-columns: repeat(12, minmax(0, 1fr))
  }
}

.color-palettes [data-value],
.system-colors [data-value] {
  border-radius: 8px;
  /* -webkit-box-shadow: var(--sds-g-shadow-2), 0 0 0 1px inset rgba(24, 24, 24, .0823529412);
  box-shadow: var(--sds-g-shadow-2), 0 0 0 1px inset rgba(24, 24, 24, .0823529412); */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  padding: 0 var(--sds-g-spacing-2);
  font-size: var(--sds-g-font-scale-neg-3);
  font-family: var(--sds-g-font-family-monospace);
  aspect-ratio: var(--sds-g-ratio-square)
}

@media(min-width: 768px) {

  .color-palettes [data-value],
  .system-colors [data-value] {
    aspect-ratio: var(--sds-g-ratio-landscape)
  }
}

@media(min-width: 1024px) {

  .color-palettes [data-value],
  .system-colors [data-value] {
    aspect-ratio: var(--sds-g-ratio-square)
  }
}
</style>
