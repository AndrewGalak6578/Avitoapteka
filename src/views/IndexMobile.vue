<script>
import Header from "@/components/Header.vue";
import JobSection from "@/components/JobSection.vue";
import JoinSection from "@/components/JoinSection.vue";

export default {
  name: "IndexMobile",
  components: {
    JoinSection,
    JobSection,
    Header
  }
}
</script>

<template>
  <div class="mx-3 min-w-max">
    <div>
      <Header/>
      <JobSection />
      <JoinSection />
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'TT Commons', sans-serif;
}
</style>