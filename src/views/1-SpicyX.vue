<template>
  <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
  </div>
</template>

<script>
export default {
  name: 'spicyx',
  components: {
    Header:       () => import('../components/1-spicyx/0-Header.vue'),
    SectionOne:   () => import('../components/1-spicyx/1-SectionOne.vue'),
    SectionTwo:   () => import('../components/1-spicyx/2-SectionTwo.vue'),
    SectionThree: () => import('../components/1-spicyx/3-SectionThree.vue'),
    SectionFour:  () => import('../components/1-spicyx/4-SectionFour.vue'),
    SectionFive:  () => import('../components/1-spicyx/5-SectionFive.vue'),
    Footer:       () => import('../components/1-spicyx/6-Footer.vue'),
  },
};
</script>
