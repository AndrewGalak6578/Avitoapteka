<script>
import Header from "@/components/Header.vue";
import WhyUsSection from "@/components/WhyUsSection.vue";
import JobSection from "@/components/JobSection.vue";
import StatsSection from "@/components/StatsSection.vue";
import JoinSection from "@/components/JoinSection.vue";

export default {
  name: "IndexDesktop",
  components: {
    JoinSection,
    StatsSection,
    JobSection,
    WhyUsSection,
    Header
  }
}
</script>

<template>
  <div class="mx-5 min-w-max">
    <div>
      <Header/>
      <WhyUsSection />
      <JobSection />
      <StatsSection />
      <JoinSection />
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'TT Commons', sans-serif;
}
</style>