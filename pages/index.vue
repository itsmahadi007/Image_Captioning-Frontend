<template>
  <NuxtLayout>
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <ImageCaptioning />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
// import HelloWorld007 from "~/components/HelloWorld007.vue";

import ImageCaptioning from "~/components/ImageCaptioning.vue";

const description = "by Mahadi Hassan";

useHead({
  title: `Image Captioning - ${description}`,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
