<script setup>
import { ref } from 'vue';
//import items
import Colors from './slds_items/Colors.vue';
import FontSize from './slds_items/FontSize.vue';
import FontWeight from './slds_items/FontWeight.vue';
import BorderRadius from './slds_items/BorderRadius.vue';
import BoxShadow from './slds_items/BoxShadow.vue';

defineProps({
  // msg: {
  //   type: String,
  //   required: true
  // }
})

const items = ref([
  { id: 'section0', name: 'Colors', content: Colors, class: '' },
  { id: 'section1', name: 'Font Size', content: FontSize, class: '' },
  { id: 'section2', name: 'Font Weight', content: FontWeight, class: '' },
  { id: 'section3', name: 'Border Radius', content: BorderRadius, class: 'bg-gray' },
  { id: 'section4', name: 'Box Shadow', content: BoxShadow, class: 'bg-gray' },
  // { id: 'section5', name: 'Section 5', content: BoxShadow },
]);

const selectedSection = ref(items.value.length > 0 ? items.value[0].id : '');

const selectSection = (id) => {
  selectedSection.value = id;
};

/*
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};*/
</script>

<template>

  <div class="dashboard">
    <!-- Header -->
    <header>
      <div class="slds-global-header slds-grid slds-grid_vertical-align-center slds-grid_align-center">
        <div class="slds-global-header__item slds-grid slds-grid_align-center">
          <img src="/src/assets/images/logo_blue.png" alt="Logo"
            style="width: 50px; height: 50px; margin-right: 10px; vertical-align: middle;">
          <div class="slds-text-align_center slds-align-middle logoText">SLDS Made Easy</div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="slds-grid slds-wrap">
      <!-- Sidebar -->
      <aside class="slds-col slds-size_1-of-7 slds-p-around_medium sidebar">
        <ul class="slds-navigation-list-vertical">
          <li class="slds-navigation-list-vertical__item" v-for="(item, index) in items" :key="index">
            <a href="#" @click="selectSection(item.id)"
              class="slds-navigation-list-vertical__action slds-text-link_reset br-3">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </aside>

      <!-- Content Area -->
      <section class="slds-col slds-size_6-of-7 slds-p-around_medium main-content">
        <div v-if="items.length > 0" v-for="(item, index) in items" :key="index" :id="item.id"
          class="slds-card slds-m-bottom_medium slds-p-around_large br-3 border-none"
          v-show="selectedSection === item.id" :class="item.class">
          <h2 class="slds-text-heading_medium slds-m-bottom_medium">{{ item.name }}</h2>
          <component :is="item.content"></component>
        </div>
        <div v-else class="slds-card slds-m-bottom_medium slds-p-around_large br-3 border-none">
          <p>No sections available.</p>
        </div>
      </section>
    </div>
  </div>

</template>

<style scoped>
.logoText {
  font-size: var(--slds-g-font-scale-4);
  font-weight: var(--slds-g-font-weight-5);
  color: var(--slds-g-color-palette-blue-30);
}

.slds-navigation-list-vertical {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.slds-navigation-list-vertical__item {
  margin-bottom: 1rem;
}

.slds-navigation-list-vertical__action {
  padding: 0.75rem 1rem;
  display: block;
  background-color: var(--slds-g-color-surface-1);
  border-radius: 0.25rem;
  color: var(--slds-g-color-palette-blue-20);
  text-decoration: none;
  transition: ease-in-out 0.3s;
  /* border: 1px solid var(--slds-g-color-palette-neutral-80); */
}

.slds-navigation-list-vertical__action:hover,
.slds-navigation-list-vertical__action:focus {
  background-color: var(--slds-g-color-palette-blue-20);
  color: var(--slds-g-color-palette-blue-95);
}

.slds-m-bottom_medium {
  margin-bottom: 1rem;
}

.bg-gray {
  background-color: var(--slds-g-color-surface-container-3);
}

.br-3 {
  border-radius: var(--slds-g-radius-border-3);
}

.border-none {
  border: none !important;
  box-shadow: none !important;
}

.slds-global-header {
  height: 4.125rem;
}
</style>