<template>
  <div class="relative rounded-lg overflow-hidden">
    <input type="file" ref="fileInputRef" @change="previewImage" class="hidden" accept="image/*"/>
    <div class="flex justify-center items-center pb-8">
      <img v-if="image" :src="image" class="object-cover object-center max-w-2xl max-h-96"/>
      <img v-else :src=sampleImage class="object-cover object-center max-w-2xl max-h-96"/>
    </div>

    <button @click="openFileDialog" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg m-2">
      Select Image
    </button>
    <button @click="resetImage" class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg m-2">
      Reset Image
    </button>
    <button v-if="image" @click="uploadImage" class="bg-teal-900 hover:bg-sky-900 text-white py-2 px-4 rounded-lg m-2">
      Upload Image
    </button>

    <div>
      <p v-if="imageCaption" class="text-center text-gray-600 text-sm mt-4 mb-4 font-sans">
        {{ imageCaption }}
      </p>
    </div>
  </div>
</template>

<script setup>

const image = ref(null), sampleImage = ref(null), imageCaption = ref(), imageForUpload = ref(null)
const fileInputRef = ref(null)
const nuxtApp = useNuxtApp();
const axios = nuxtApp.axiosInstance;

function openFileDialog() {
  fileInputRef.value.click()
}

function previewImage(event) {
  imageForUpload.value = event.target.files[0]
  image.value = URL.createObjectURL(event.target.files[0])
}

function resetImage() {
  image.value = null
  getSampleImage()
}

async function getSampleImage() {
  const response = await fetch(`https://picsum.photos/600`)
  sampleImage.value = response.url
}

getSampleImage()

async function uploadImage() {
  const formData = new FormData()
  formData.append('image', imageForUpload.value)

  await axios
      .post("post_image/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // do something
        console.log(response.data)
        imageCaption.value = response.data.caption
      })
      .catch((error) => {

      });
}


</script>

<style scoped>

</style>
